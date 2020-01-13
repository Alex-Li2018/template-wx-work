/**
 * 通用函数库
 */

export const getType = Object.prototype.toString;

export const getProto = Object.getPrototypeOf;

export  function getOptions(target, copy) {
    return Object.assign({}, target, copy);
}


/**
 * 合并对象
 * @param first    目标
 * @param second  合并目标
 */
export function merge(first, second) {
    const len = +second.length; let j = 0,
        i = first.length;
    for (; j < len; j++) {
        first[i++] = second[j];
    }
    first.length = i;
    return first;
}

/**
 * 多对象合并
 */
export function mergeAll() {
    const args = arguments,
        len = args.length;
    let target,
        i = 0;

    if (len < 1) return { };
    target = args[0];
    if (getType.call(target) !== '[object Object]') target = {};
    i++;
    for (; i < len; i++) {
        const item = args[i];
        if (getType.call(item) === '[object Object]') {
            for (const name in item) {
                target[name] = item[name];
            }
        }
    }
    return target;
}

export function isFunction(obj) {
    return typeof obj === 'function';
}

/**
 * 继承
 * @param target object 继承目标
 * @param copy object 复制对象
 * @param deep boolean 是否深拷贝
 * @returns {*}
 */
export function extend(target = {}, copy = {}, deep = false) {
    if (deep) {
        return Object.assign({}, target, copy);
    } else {
        for (const name in copy) {
            target[name] = copy[name];
        }
        return target;
    }
}

export function toJSON(obj) {
    if (!obj || obj === '') return {};
    let res = {};
    try {
        res = getType.call(obj) === '[object Object]' || getType.call(obj) === '[object Array]' ? obj : JSON.parse(obj);
    } catch (e) {}
    return res;
}

// 简易深拷贝
export function deepCopy(obj) {
    let result = {};
    try {
        result = obj ? JSON.parse(JSON.stringify(obj)) : {};
    } catch (e) {}
    return result;
}

export default {
    getType,
    getProto,
    getOptions,
    merge,
    mergeAll,
    isFunction,
    extend,
    toJSON,
    deepCopy
};
