import * as wasm from './rustcalc_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function addition(a, b) {
    var ret = wasm.addition(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function substraction(a, b) {
    var ret = wasm.substraction(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function multiplication(a, b) {
    var ret = wasm.multiplication(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function divion(a, b) {
    var ret = wasm.divion(a, b);
    return ret;
}

export function __wbg_alert_c5fc05c5ce453061(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

