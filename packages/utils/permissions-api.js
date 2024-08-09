export class WjePermissionsApi {
    constructor() {
        this._permissionKey = 'permissions';
    }

    static set permissionKey(value) {
        WjePermissionsApi._permissionKey = value || 'permissions';
    }

    static get permissionKey() {
        return WjePermissionsApi._permissionKey;
    }

    static set permissions(value) {
        window.localStorage.setItem(WjePermissionsApi.permissionKey, value);
    }

    /**
     * Returns the permissions.
     * @returns {*}
     */
    static get permissions() {
        return window.localStorage.getItem(WjePermissionsApi.permissionKey) || [];
    }

    /**
     * Checks if the permission is included.
     * @param key
     * @returns {*}
     */
    static includesKey(key) {
        return WjePermissionsApi.permissions.includes(key);
    }

    /**
     * Returns the keys for the permission check.
     * @returns {*[]}
     */
    static getKeys() {
        let key = [];
        if (this.hasAttribute('permission-check')) {
            key = this.getAttribute('permission-check').split(',');
        }

        return key;
    }

    /**
     * Checks if the component should be shown.
     * @returns {*}
     */
    static shouldShow() {
        return this.hasAttribute('show') && JSON.parse(this.getAttribute('show'));
    }

    /**
     * Checks if the permission is fulfilled.
     * @returns {*}
     */
    static isPermissionFulfilled() {
        return (
            WjePermissionsApi.getKeys
                .bind(this)()
                .some((perm) => WjePermissionsApi.permissions.includes(perm)) || WjePermissionsApi.shouldShow.bind(this)()
        );
    }
}