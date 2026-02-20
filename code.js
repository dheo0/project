import { isPlainObject, isString } from 'lodash'
import { Base64 } from 'js-base64'

/**
 * Base64 문자열 인코딩
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 * @param {string|string[]|JSON} value 인코딩 대상
 * @returns {string}
 */
export function encodeBase64 (value) {
    if (Array.isArray(value)) {
        value = value.join(',')
    } else if (isPlainObject(value)) {
        value = JSON.stringify(value)
    }
    if (!isString(value)) {
        throw new Error(`[encodeBase64] undefined encoding type: ${typeof value}`)
    }
    // return window.btoa(encodeURIComponent(value))
    return Base64.encode(value, true)
}

/**
 * Base64 문자열 디코딩
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 * @param {string} value - Base64 문자열
 * @param {'JSON'|'ARRAY'} [type] - JSON, ARRAY
 * @returns {string|string[]|JSON}
 */
export function decodeBase64 (value, type) {
    value = replIncorrectTokenStr(value)
    let decoded
    try {
        // decoded = decodeURIComponent(window.atob(value))
        decoded = Base64.decode(value)
        switch (type.toUpperCase()) {
            case 'ARRAY':
                return decoded.split(',')
            case 'JSON':
                return JSON.parse(decoded)
        }
    } catch (err) {
        return value
    }
    return decoded
}

/**
* token 값 base64 형식으로 변환
* @param {string} base64String
* @returns {string}
*/
export function replIncorrectTokenStr (base64String) {
    // console.log(base64String)
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')
    return base64
}
