export class WjePermissionsApi {
  static _permissionKey = 'permissions';

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
    window.localStorage.setItem(WjePermissionsApi.permissionKey, JSON.stringify(value) );
  }

  /**
   * Returns the permissions.
   * @returns {string[]}
   */
  static get permissions() {
    return JSON.parse(window.localStorage.getItem(WjePermissionsApi.permissionKey)) || [];
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
   * Checks if the permission is fulfilled.
   * @returns {boolean}
   */
  static isPermissionFulfilled(permissions) {
    return permissions.some((perm) => WjePermissionsApi.permissions.includes(perm));
  }
}
