export class UniversalService {
    constructor(props = {}) {
        this._store = props.store;
    }

    findByKey = (attrName, key, keyValue) => {
        if (this._store.getState()[attrName] instanceof Array) {
            return this._store.getState()[attrName].find((item) => item[key] === keyValue);
        } else {
            console.warn(` Attribute ${attrName} is not array`);
            return null;
        }
    };

    findById = (attrName, id) => {
        if (this._store.getState()[attrName] instanceof Array) {
            return this._store.getState()[attrName].find((item) => item.id === id);
        } else {
            console.warn(` Attribute ${attrName} is not array`);
            return null;
        }
    };

    findAttributeValue = (attrName) => {
        return this._store.getState()[attrName];
    };

    update = (data, action) => {
        this._store.dispatch(action(data));
    };

    add = (data, action) => {
        this._store.dispatch(action(data));
    };

    _request(url, data, action, dispatchMethod, method, signal) {
        let promise = fetch(url, {
            method: method,
            ...(data ? { body: JSON.stringify(data) } : {}),
            headers: {
                'Content-Type': 'application/json',
            },
            ...(signal ? { signal } : {}),
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
        return this._request(url, data, action, dispatchMethod, 'PUT', signal);
    }

    post(url, data, action, dispatchMethod = true, signal = null) {
        return this._request(url, data, action, dispatchMethod, 'POST', signal);
    }

    delete(url, data, action, dispatchMethod = true, signal = null) {
        return this._request(url, data, action, dispatchMethod, 'DELETE', signal);
    }

    //url, action, dispatchMethod, signa
    get(url, action, dispatchMethod = true, signal = null) {
        return this._request(url, null, action, dispatchMethod, 'GET', signal);
    }

    patch(url, data, action, dispatchMethod = true, signal = null) {
        return this._request(url, data, action, dispatchMethod, 'PATCH', signal);
    }

    dispatch(promise, dispatchMethod, action) {
        if (dispatchMethod) {
            return promise
                .then((data) => {
                    this._store.dispatch(action(data.data));
                    return data;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        return promise;
    }

    loadPromise = (
        url,
        action,
        method = 'GET',
        data = '',
        permissionCallBack = () => {
            //
            // No empty function
        }
    ) => {
        return fetch(url, {
            method: method,
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
            async: true,
        })
            .then((response, e) => {
                let permissions = response.headers.get('permissions')?.split(',');
                permissionCallBack(permissions);

                if (response.ok) {
                    return response.json();
                } else {
                    throw response.json();
                }
            })
            .then((responseData) => {
                this._store.dispatch(action(responseData));
                return responseData;
            });
    };

    loadOnePromise = (url, action) => {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            const responseData = response.json();
            if (action) {
                this._store.dispatch(action(responseData));
            }
            return responseData;
        });
    };
}
