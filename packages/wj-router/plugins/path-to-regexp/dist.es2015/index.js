/**
 * Default configs.
 */
var DEFAULT_DELIMITER = "/";
/**
 * Balanced bracket helper function.
 */
function balanced(open, close, str, index) {
    var count = 0;
    var i = index;
    while (i < str.length) {
        if (str[i] === "\\") {
            i += 2;
            continue;
        }
        if (str[i] === close) {
            count--;
            if (count === 0)
                return i + 1;
        }
        if (str[i] === open) {
            count++;
        }
        i++;
    }
    return -1;
}
/**
 * Parse a string for the raw tokens.
 */
export function parse(str, options) {
    if (options === void 0) { options = {}; }
    var _a, _b;
    var tokens = [];
    var defaultDelimiter = (_a = options.delimiter, (_a !== null && _a !== void 0 ? _a : DEFAULT_DELIMITER));
    var whitelist = (_b = options.whitelist, (_b !== null && _b !== void 0 ? _b : undefined));
    var i = 0;
    var key = 0;
    var path = "";
    var isEscaped = false;
    // tslint:disable-next-line
    while (i < str.length) {
        var prefix = "";
        var name = "";
        var pattern = "";
        // Ignore escaped sequences.
        if (str[i] === "\\") {
            i++;
            path += str[i++];
            isEscaped = true;
            continue;
        }
        if (str[i] === ":") {
            while (++i < str.length) {
                var code = str.charCodeAt(i);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[i];
                    continue;
                }
                break;
            }
            // False positive on param name.
            if (!name)
                i--;
        }
        if (str[i] === "(") {
            var end = balanced("(", ")", str, i);
            // False positive on matching brackets.
            if (end > -1) {
                pattern = str.slice(i + 1, end - 1);
                i = end;
                if (pattern[0] === "?") {
                    throw new TypeError("Path pattern must be a capturing group");
                }
                if (/\((?=[^?])/.test(pattern)) {
                    var validPattern = pattern.replace(/\((?=[^?])/, "(?:");
                    throw new TypeError("Capturing groups are not allowed in pattern, use a non-capturing group: (" + validPattern + ")");
                }
            }
        }
        // Add regular characters to the path string.
        if (name === "" && pattern === "") {
            path += str[i++];
            isEscaped = false;
            continue;
        }
        // Extract the final character from `path` for the prefix.
        if (path.length && !isEscaped) {
            var char = path[path.length - 1];
            var matches = whitelist ? whitelist.indexOf(char) > -1 : true;
            if (matches) {
                prefix = char;
                path = path.slice(0, -1);
            }
        }
        // Push the current path onto the list of tokens.
        if (path.length) {
            tokens.push(path);
            path = "";
        }
        var repeat = str[i] === "+" || str[i] === "*";
        var optional = str[i] === "?" || str[i] === "*";
        var delimiter = prefix || defaultDelimiter;
        // Increment `i` past modifier token.
        if (repeat || optional)
            i++;
        tokens.push({
            name: name || key++,
            prefix: prefix,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            pattern: pattern ||
                "[^" + escapeString(delimiter === defaultDelimiter
                    ? delimiter
                    : delimiter + defaultDelimiter) + "]+?"
        });
    }
    if (path.length)
        tokens.push(path);
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 */
export function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
export function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            if (Array.isArray(value)) {
                if (!token.repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (token.optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment;
                continue;
            }
            if (token.optional)
                continue;
            var typeOfMessage = token.repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
export function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
export function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.repeat) {
                params[key.name] = m[i].split(key.delimiter).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                delimiter: "",
                optional: false,
                repeat: false,
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
export function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var strict = options.strict, _a = options.start, start = _a === void 0 ? true : _a, _b = options.end, end = _b === void 0 ? true : _b, _c = options.delimiter, delimiter = _c === void 0 ? DEFAULT_DELIMITER : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = (typeof options.endsWith === "string"
        ? options.endsWith.split("")
        : options.endsWith || [])
        .map(escapeString)
        .concat("$")
        .join("|");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var capture = token.repeat
                ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*"
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (!token.prefix) {
                    route += "(" + capture + ")?";
                }
                else {
                    route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
                }
            }
            else {
                route += escapeString(token.prefix) + "(" + capture + ")";
            }
        }
    }
    if (end) {
        if (!strict)
            route += "(?:" + escapeString(delimiter) + ")?";
        route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? endToken[endToken.length - 1] === delimiter
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + escapeString(delimiter) + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + escapeString(delimiter) + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
export function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(path, keys, options);
    }
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map