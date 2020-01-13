import store from '../../../store';

import {
    SUCCESS,
    ERROR_TOKEN_EMPTY,
    ERROR_TOKEN_INVALID,
    ERROR_TOKEN_EXPIRE,
    ERROR_NEED_LOGIN,
    ERROR_NO_POWER
} from './code';

/**
 * request请求
 * @param url {String} 请求路径
 * @param method {String} 请求类型
 * @param data {Object|Array} body数据
 * @param header {Object}  请求头
 * @return {Promise<any>} 请求结果
 */
export const request = (url, method = 'GET', data = {}, header = {}) => {
    return new Promise((resolve, reject) => {
        const requestOpts = {
            header,
            method,
            success(response) {
                const data = response.data || {};
                if (response.statusCode !== 200) {
                    return reject(data);
                }

                // TODO::先简单封装请求
                switch (Math.floor(data.code)) {
                case ERROR_TOKEN_EMPTY:
                case ERROR_TOKEN_INVALID:
                case ERROR_TOKEN_EXPIRE:
                case ERROR_NEED_LOGIN:
                case ERROR_NO_POWER:
                    return reject(data);
                case SUCCESS:
                    return resolve(data);
                default:
                    return reject(data);
                }
            },
            fail(error) {
                return reject(error);
            }
        };

        switch (method.toUpperCase()) {
        case 'GET':
            const sendQuery = `${url.indexOf('?') > -1 ? '&' : '?'}city_id=${store.getters.cityId}&version=${store.getters.version}&_t=${Date.now()}`;
            requestOpts['url'] = `${store.getters.host}/${url}/${sendQuery}`;
            requestOpts['data'] = data;
            break;
        case 'DELETE':
        case 'PUT':
        case 'POST':
            requestOpts['url'] = `${store.getters.host}/${url}`;
            requestOpts['data'] = Object.assign(data, {
                city_id: store.getters.cityId,
                version: store.getters.version,
                _t: Date.now()
            });
            break;
        default:
            return reject(new Error('未知请求类型'));
        }
        uni.request(requestOpts);
    });
};

/**
 * GET请求
 * @param url {String} 请求路径
 * @param params {Object|Array} 请求参数
 * @param header {Object}  请求头
 * @return {Promise<any>} 请求结果
 */
export const get = (url, params = {}, header = {}) => {
    return request(url, 'GET', params, header);
};

/**
 * POST请求
 * @param url {String} 请求路径
 * @param data {Object|Array} body数据
 * @param header {Object}  请求头
 * @param isFromData {Boolean} 是否发送fromData类型
 * @return {Promise<any>} 请求结果
 */
export const post = (url, data = {}, header = {}, isFromData = false) => {
    if (isFromData) {
        header['content-type'] = 'multipart/form-data';
    }

    return request(url, 'POST', data, header);
};

/**
 * PUT请求
 * @param url {String} 请求路径
 * @param data {Object|Array} body数据
 * @param header {Object}  请求头
 * @return {Promise<any>} 请求结果
 */
export const put = (url, data = {}, header = {}) => {
    return request(url, 'PUT', data, header);
};

/**
 * DELETE请求
 * @param url {String} 请求路径
 * @param data {Object|Array} body数据
 * @param header {Object}  请求头
 * @return {Promise<any>} 请求结果
 */
export const del = (url, data = {}, header = {}) => {
    return request(url, 'DELETE', data, header);
};

export default {
    get,
    post,
    put,
    delete: del,
    request
};
