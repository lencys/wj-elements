var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _Permissions = class _Permissions {
  /**
   * Sets the permission key for the PermissionsApi.
   * The key is stored internally and defaults to 'permissions' if no value is provided.
   * @param {string} value The key to set for permissions. If no value is provided, the default is 'permissions'.
   */
  static set permissionKey(value) {
    _Permissions._permissionKey = value || "permissions";
  }
  /**
   * Retrieves the permission key used for accessing the permissions API.
   * @returns {string} The permission key associated with the PermissionsApi.
   */
  static get permissionKey() {
    return _Permissions._permissionKey;
  }
  /**
   * Sets the permissions by storing them in the local storage.
   * @param {object} value The permissions object to be stored.
   */
  static set permissions(value) {
    window.localStorage.setItem(_Permissions.permissionKey, JSON.stringify(value));
  }
  /**
   * Retrieves the list of permissions stored in the browser's local storage.
   * @returns {Array} An array of permissions. If no permissions are found, returns an empty array.
   */
  static get permissions() {
    return JSON.parse(window.localStorage.getItem(_Permissions.permissionKey)) || [];
  }
  /**
   * Determines whether the specified key exists in the permissions list.
   * @param {string} key The key to check for existence in the permissions list.
   * @returns {boolean} Returns true if the key exists in the permissions list; otherwise, returns false.
   */
  static includesKey(key) {
    return _Permissions.permissions.includes(key);
  }
  /**
   * Checks if at least one of the given permissions is fulfilled, based on the permissions available in `PermissionsApi`.
   * @param {Array<string>} permissions The list of permissions to check against the permissions available in `PermissionsApi`.
   * @returns {boolean} Returns `true` if any of the given permissions match the permissions available in `PermissionsApi`, otherwise returns `false`.
   */
  static isPermissionFulfilled(permissions) {
    return permissions.some((perm) => _Permissions.permissions.includes(perm));
  }
};
__publicField(_Permissions, "_permissionKey", "permissions");
let Permissions = _Permissions;
export {
  Permissions
};
//# sourceMappingURL=permissions.js.map
