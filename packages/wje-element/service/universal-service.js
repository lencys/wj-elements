export class UniversalService {
	constructor(props = {}) {
		this._store = props.store
	}

	findByKey = (attrName, key, keyValue) => {
		if (this._store.getState()[attrName] instanceof Array) {
			return this._store.getState()[attrName].find((item) => item[key] === keyValue);
		} else {
			console.warn(` Attribute ${attrName} is not array`);
			return null;
		}
	}

	findById = (attrName, id) => {
		if (this._store.getState()[attrName] instanceof Array) {
			return this._store.getState()[attrName].find((item) => item.id === id);
		} else {
			console.warn(` Attribute ${attrName} is not array`);
			return null;
		}
	}

	findAttributeValue = (attrName) => {
		return this._store.getState()[attrName];
	}

	update = (data, action) => {
		this._store.dispatch(action(data))
	};

	add = (data, action) => {
		this._store.dispatch(action(data))
	};

	_save(url, data, action, dispatchMethod, method) {
		let promise = fetch(url, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return response.json();
			}
		});

		return this.dispatch(promise, dispatchMethod, action);
	}

	_get(url, action, dispatchMethod, signal) {
		let promise = fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			...(signal ? { signal } : {})
		}).then(async (response) => {
			let responseText;
			try {
				responseText = await response.text();
				return JSON.parse(responseText);
			} catch (err) {
				console.error(err);
				return responseText
			}
		});

		return this.dispatch(promise, dispatchMethod, action);
	}

	put(url, data, action, dispatchMethod = true) {
		return this._save(url, data, action, dispatchMethod, "PUT");
	}

	post(url, data, action, dispatchMethod = true) {
		return this._save(url, data, action, dispatchMethod, "POST");
	}

	delete(url, data, action, dispatchMethod = true) {
		return this._save(url, data, action, dispatchMethod, "DELETE");
	}

	get(url, action, dispatchMethod = true) {
		return this._get(url, action, dispatchMethod);
	}

	dispatch(promise, dispatchMethod, action) {
		if (dispatchMethod) {
			return promise.then((data) => {
				this._store.dispatch(action(data.data));
				return data;
			}).catch(error => {
				console.error(error)
			});
		}
		return promise;
	}

	loadPromise = (url, action, method = 'GET', data = '', permissionCallBack = () => { //
		// No empty function
	}) => {
		return fetch(url, {
			method: method,
			body: data,
			headers: {
				'Content-Type': 'application/json'
			},
			async: true,
		}).then((response, e) => {
			let permissions = response.headers.get('permissions')?.split(',')
			permissionCallBack(permissions)

			if (response.ok) {
				return response.json();
			} else {
				throw response.json()
			}
		}).then((responseData) => {
			this._store.dispatch(action(responseData));
			return responseData;
		});
	}

	loadOnePromise = (url, action) => {
		return fetch(url, {
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {
			const responseData = response.json()
			if (action) {
				this._store.dispatch(action(responseData));
			}
			return responseData;
		})
	}
}