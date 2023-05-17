/**
 * Decode URI safe base64 encoded string.
 * @param {string} base64
 * @returns {string}
 */
export function decode(base64) {
  const basic = convertURISafeToBasic(base64);
  const bytes = new Uint8Array([...atob(basic)].map(c => c.charCodeAt(0)));
  return new TextDecoder().decode(bytes);
}

/**
 * Decode URI safe base64 encoded string into an array of bytes.
 * @param {string} base64
 * @returns {Uint8Array}
 */
export function decodeToBytes(base64) {
  const basic = convertURISafeToBasic(base64);
  return new Uint8Array([...atob(basic)].map(c => c.charCodeAt(0)));
}

/**
 * Encode string using URI safe base64.
 * @param {string} string
 * @returns {string}
 */
export function encode(string) {
  const basic = btoa(String.fromCharCode(...new TextEncoder().encode(string)));
  return convertBasicToURISafe(basic)
}

/**
 * Encode array of bytes into string using URI safe base64.
 * @param {Uint8Array} bytes
 * @returns {string}
 */
export function encodeBytes(bytes) {
  const basic = btoa(String.fromCharCode(...bytes));
  return convertBasicToURISafe(basic);
}

/**
 * Convert basic base64 encoded string to URI safe base64 encoded string.
 * @param {string}
 * @returns {string}
 */
export function convertBasicToURISafe(base64) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Convert URI safe base64 encoded string to basic base64 encoded string.
 * @param {string}
 * @returns {string}
 */
export function convertURISafeToBasic(base64) {
  const padding = padEnd[base64.length % 4];
  return base64.replace(/-/g, "+").replace(/_/g, "/") + padding;
}

// padding appended to URI safe base64; indexed by length % 4
// base64 encoding should never result in (length % 4 === 1)
const padEnd = ["", undefined, "==", "="];
