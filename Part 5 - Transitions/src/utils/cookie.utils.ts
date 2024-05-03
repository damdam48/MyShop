/**
 * Retrieves the value of a cookie with the given name.
 *
 * @param {string} name - The name of the cookie.
 * @returns {string} - The value of the cookie if it exists, otherwise an empty string.
 */
export function getCookie(name: string): string | undefined {
    const cookie : string | undefined  = document.cookie
        .split(';')
        .find((cookie : string) => cookie.trim().startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : undefined;
}

/**
 * Sets a cookie with the given name and value, which expires after the specified number of days.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 */
export function setCookie(name: string, value: string, days: number = 31536000): void {
    const date : Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

/**
 * Deletes a cookie with the given name.
 *
 * @param {string} name - The name of the cookie.
 */
export function deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}