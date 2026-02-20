var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class UniversalService {
  constructor(props = {}) {
    __publicField(this, "findByKey", (attrName, key, keyValue) => {
      if (this._store.getState()[attrName] instanceof Array) {
        return this._store.getState()[attrName].find((item) => item[key] === keyValue);
      } else {
        console.warn(` Attribute ${attrName} is not array`);
        return null;
      }
    });
    __publicField(this, "findById", (attrName, id) => {
      if (this._store.getState()[attrName] instanceof Array) {
        return this._store.getState()[attrName].find((item) => item.id === id);
      } else {
        console.warn(` Attribute ${attrName} is not array`);
        return null;
      }
    });
    __publicField(this, "findAttributeValue", (attrName) => {
      return this._store.getState()[attrName];
    });
    __publicField(this, "update", (data, action) => {
      this._store.dispatch(action(data));
    });
    __publicField(this, "add", (data, action) => {
      this._store.dispatch(action(data));
    });
    __publicField(this, "loadPromise", (url, action, method = "GET", data = "", permissionCallBack = () => {
    }) => {
      return fetch(url, {
        method,
        body: data,
        headers: {
          "Content-Type": "application/json"
        },
        async: true
      }).then((response, e) => {
        var _a;
        let permissions = (_a = response.headers.get("permissions")) == null ? void 0 : _a.split(",");
        permissionCallBack(permissions);
        if (response.ok) {
          return response.json();
        } else {
          throw response.json();
        }
      }).then((responseData) => {
        this._store.dispatch(action(responseData));
        return responseData;
      });
    });
    __publicField(this, "loadOnePromise", (url, action) => {
      return fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        const responseData = response.json();
        if (action) {
          this._store.dispatch(action(responseData));
        }
        return responseData;
      });
    });
    this._store = props.store;
  }
  _request(url, data, action, dispatchMethod, method, signal) {
    let promise = fetch(url, {
      method,
      ...data ? { body: JSON.stringify(data) } : {},
      headers: {
        "Content-Type": "application/json"
      },
      ...signal ? { signal } : {}
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json();
      }
    });
    return this.dispatch(promise, dispatchMethod, action);
  }
  put(url, data, action, dispatchMethod = true, signal = null) {
    return this._request(url, data, action, dispatchMethod, "PUT", signal);
  }
  post(url, data, action, dispatchMethod = true, signal = null) {
    return this._request(url, data, action, dispatchMethod, "POST", signal);
  }
  delete(url, data, action, dispatchMethod = true, signal = null) {
    return this._request(url, data, action, dispatchMethod, "DELETE", signal);
  }
  //url, action, dispatchMethod, signa
  get(url, action, dispatchMethod = true, signal = null) {
    return this._request(url, null, action, dispatchMethod, "GET", signal);
  }
  patch(url, data, action, dispatchMethod = true, signal = null) {
    return this._request(url, data, action, dispatchMethod, "PATCH", signal);
  }
  dispatch(promise, dispatchMethod, action) {
    if (dispatchMethod) {
      return promise.then((data) => {
        this._store.dispatch(action(data.data));
        return data;
      }).catch((error) => {
        console.error(error);
      });
    }
    return promise;
  }
}
export {
  UniversalService
};
//# sourceMappingURL=universal-service.js.map
