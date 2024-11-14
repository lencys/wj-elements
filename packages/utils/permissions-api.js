export class WjePermissionsApi {
    constructor() {
        this._permissionKey = 'permissions';
    }

    /**
     * Sets the permission key.
     * @param value
     */
    static set permissionKey(value) {
        WjePermissionsApi._permissionKey = value || 'permissions';
    }

    /**
     * Returns the permission key.
     * @returns {*|string}
     */
    static get permissionKey() {
        return WjePermissionsApi._permissionKey;
    }

    /**
     * Sets the permissions.
     * @param value
     */
    static set permissions(value) {
        window.localStorage.setItem(WjePermissionsApi.permissionKey, value);
    }

    /**
     * Returns the permissions.
     * @returns {string[]}
     */
    static get permissions() {
        return window.localStorage.getItem(WjePermissionsApi.permissionKey) || [];
    }

    /**
     * Checks if the permission is included.
     * @param key
     * @returns {boolean}
     */
    static includesKey(key) {
        return WjePermissionsApi.permissions.includes(key);
    }

    /**
     * Returns the keys for the permission check.
     * @returns {string[]}
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
     * @returns {boolean}
     */
    static shouldShow() {
        return this.hasAttribute('show') && JSON.parse(this.getAttribute('show'));
    }

    /**
     * Checks if the permission is fulfilled.
     * @returns {boolean}
     */
    static isPermissionFulfilled() {
        return (
            WjePermissionsApi.getKeys
                .bind(this)()
                .some((perm) => WjePermissionsApi.permissions.includes(perm)) || WjePermissionsApi.shouldShow.bind(this)()
        );
    }
}