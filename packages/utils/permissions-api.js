export class WjPermissionsApi {
    constructor() {}

    static get permissions() {
        return [
            ...(intranet.storage().getItem('permissions', 'settings') || []),
            ...(intranet.storage().getItem('globalPermissions', 'settings') || []),
        ];
    }

    static includesKey(key) {
        return WjePermissionsApi.permissions.includes(key);
    }

    static getKeys() {
        let key = [];
        if (this.hasAttribute('permission-check')) {
            key = this.getAttribute('permission-check').split(',');
        }

        return key;
    }

    static shouldShow() {
        return this.hasAttribute('show') && JSON.parse(this.getAttribute('show'));
    }

    static isPermissionFulfilled() {
        return (
            WjePermissionsApi.getKeys
                .bind(this)()
                .some((perm) => WjePermissionsApi.permissions.includes(perm)) || WjePermissionsApi.shouldShow.bind(this)()
        );
    }
}