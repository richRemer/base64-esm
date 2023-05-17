/**
 * Decode base64 encoded string.
 * @param {string} base64
 * @returns {string}
 */
export function decode(base64) {
  const bytes = new Uint8Array([...atob(base64)].map(c => c.charCodeAt(0)));
  return new TextDecoder().decode(bytes);
}

/**
 * Decode base64 encoded string into an array of bytes.
 * @param {string} base64
 * @returns {Uint8Array}
 */
export function decodeToBytes(base64) {
  return new Uint8Array([...atob(base64)].map(c => c.charCodeAt(0)));
}

/**
 * Encode string using base64.
 * @param {string} string
 * @returns {string}
 */
export function encode(string) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(string)));
}

/**
 * Encode array of bytes into string using base64.
 * @param {Uint8Array} bytes
 * @returns {string}
 */
export function encodeBytes(bytes) {
  return btoa(String.fromCharCode(...bytes));
}
