/**
 * Permissions is a utility class for managing permissions.
 * It allows setting, retrieving, and checking permissions stored in the browser's local storage.
 */
export class Permissions {
    static _permissionKey = 'permissions';

    /**
     * Sets the permission key for the Permissions utility.
     * The key is stored internally and defaults to 'permissions' if no value is provided.
     * @param {string} value The key to set for permissions. If no value is provided, the default is 'permissions'.
     */
    static set permissionKey(value) {
        Permissions._permissionKey = value || 'permissions';
    }

    /**
     * Retrieves the permission key used for accessing the permissions utility.
     * @returns {string} The permission key associated with the Permissions utility.
     */
    static get permissionKey() {
        return Permissions._permissionKey;
    }

    /**
     * Sets the permissions by storing them in the local storage.
     * @param {Array<string>} value The permissions array to be stored.
     */
    static set permissions(value) {
        window.localStorage.setItem(Permissions.permissionKey, JSON.stringify(value));
    }

    /**
     * Retrieves the list of permissions stored in the browser's local storage.
     * @returns {Array} An array of permissions. If no permissions are found, returns an empty array.
     */
    static get permissions() {
        return JSON.parse(window.localStorage.getItem(Permissions.permissionKey)) || [];
    }

    /**
     * Determines whether the specified key exists in the permissions list.
     * @param {string} key The key to check for existence in the permissions list.
     * @returns {boolean} Returns true if the key exists in the permissions list; otherwise, returns false.
     */
    static includesKey(key) {
        return Permissions.permissions.includes(key);
    }

    /**
     * Checks if at least one of the given permissions is fulfilled, based on the permissions available in `Permissions`.
     * @param {Array<string>} permissions The list of permissions to check against the permissions available in `Permissions`.
     * @returns {boolean} Returns `true` if any of the given permissions match the permissions available in `Permissions`, otherwise returns `false`.
     */
    static isPermissionFulfilled(permissions) {
        return permissions.some((perm) => Permissions.permissions.includes(perm));
    }
}
