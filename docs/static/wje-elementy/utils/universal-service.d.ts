export class UniversalService {
    constructor(props?: {});
    _store: any;
    findByKey: (attrName: any, key: any, keyValue: any) => any;
    findById: (attrName: any, id: any) => any;
    findAttributeValue: (attrName: any) => any;
    update: (data: any, action: any) => void;
    add: (data: any, action: any) => void;
    _request(url: any, data: any, action: any, dispatchMethod: any, method: any, signal: any): any;
    put(url: any, data: any, action: any, dispatchMethod?: boolean, signal?: any): any;
    post(url: any, data: any, action: any, dispatchMethod?: boolean, signal?: any): any;
    delete(url: any, data: any, action: any, dispatchMethod?: boolean, signal?: any): any;
    get(url: any, action: any, dispatchMethod?: boolean, signal?: any): any;
    patch(url: any, data: any, action: any, dispatchMethod?: boolean, signal?: any): any;
    dispatch(promise: any, dispatchMethod: any, action: any): any;
    loadPromise: (url: any, action: any, method?: string, data?: string, permissionCallBack?: () => void) => Promise<any>;
    loadOnePromise: (url: any, action: any) => Promise<any>;
}
