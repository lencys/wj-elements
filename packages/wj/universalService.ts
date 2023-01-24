

export class UniversalService {
    private _store: any;
    premenna: null;
	constructor(props = {}) {
		this._store = props.store
		this.premenna= null
	}

	findByKey = (attrName: string | number, key: string | number, keyValue: any) => {
		if (this._store.getState()[attrName] instanceof Array) {
			let find = this._store.getState()[attrName].find((item: { [x: string]: any; }) => item[key] == keyValue);
			return find;
		} else {
			console.warn(` Attribute ${attrName} is not array`);
		}
	};

	findById = (attrName: string | number, id: any) => {
		if (this._store.getState()[attrName] instanceof Array) {
			let find = this._store.getState()[attrName].find((item: { id: any; }) => item.id == id);
			return find;
		} else {
			console.warn(` Attribute ${attrName} is not array`);
		}
	};

	findAttributeValue = (attrName: string | number) => {
		return this._store.getState()[attrName];
	};

	update = (data: any, action: (arg0: any) => any) => {
		this._store.dispatch(action(data))
	};

	add = (data: any, action: (arg0: any) => any) => {
		this._store.dispatch(action(data))
	};

	_save(url: RequestInfo | URL, data: any, action: any, dispatchMethod: boolean, method: string){
		let promise = fetch(url, {
			method: method,
			body: JSON.stringify(data),
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			referrerPolicy: 'same-origin',
		}).then((response) => {
			if(response.ok){
				return response.json();
			} else {
				return response.json();
			}
		});

		return this.dispatch(promise, dispatchMethod, action);
	}

	_get(url: RequestInfo | URL, action: any, dispatchMethod: boolean){
		let promise = fetch(url, {
			method: 'GET',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			referrerPolicy: 'same-origin',
		}).then((response) => {
			if(response.ok){
				return response.json();
			} else {
				return response.text();
			}
		});

		return this.dispatch(promise, dispatchMethod, action);
	}

	put(url: any, data: any, action: any, dispatchMethod = true){
		return this._save(url, data, action, dispatchMethod, "PUT");
	}

	post(url: any, data: any, action: any, dispatchMethod = true) {
		return this._save(url, data, action, dispatchMethod, "POST");
	}

	delete(url: any, data: any, action: any, dispatchMethod = true) {
		return this._save(url, data, action, dispatchMethod, "DELETE");
	}

	get(url: any, action: any, dispatchMethod = true) {
		return this._get(url, action, dispatchMethod);
	}

	dispatch(promise: Promise<any>, dispatchMethod: any, action: (arg0: any) => any){
		if(dispatchMethod){
			return promise.then((data: { data: any; })=>{
				this._store.dispatch(action(data.data));
				return data;
			}).catch((error: any) =>{
				console.error(error)
			});
		}

		return promise;
	}

	private _loadPromise = (url: RequestInfo | URL, action: (arg0: any) => any, method = 'GET', data: any, permissionCallBack = (permissions: string[] | undefined) => { }) => {
        return fetch(url, {
            method: method,
            body: data,
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'same-origin',
        }).then((response: Response) => {
            let permissions = response.headers.get('permissions')?.split(',');
            permissionCallBack(permissions);

            if (response.ok) {
                return response.json();
            } else {
                throw response.json();
            }
        }).then((data) => {
            this._store.dispatch(action(data));
            return data;
        });
    };
    public get loadPromise() {
        return this._loadPromise;
    }
    public set loadPromise(value) {
        this._loadPromise = value;
    }

	loadOnePromise = (url: RequestInfo | URL, action: (arg0: Promise<any>) => any) => {
		return fetch(url, {
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			referrerPolicy: 'same-origin',
		}).then((data: Response)=>{
			let jsonPromise = data.json()
			if(action){
				this._store.dispatch(action(jsonPromise))
			}
			return jsonPromise
		})
	};

	load = (url: any, async = false) => {
		return $.ajax({
			method: "GET",
			url: url,
			async: async,
			dataType: 'json',
		});
	}
}
