
const loaderUtils = require('loader-utils');

function warning (num) {
    const arr = [
        '[hjt-replace-json-loader: Error] no arr'
    ];
    throw new Error(arr[num]);
}

module.exports = function (source, map) {
    this.cacheable();
    source = JSON.parse(source);
    const options = loaderUtils.getOptions(this);
    if (options.hasOwnProperty('arr')) {
        if (Array.isArray(options.arr)) {
            for (let i = 0; i < options.arr.length; i++) {
                const option = options.arr[i];
                source[option.key] = option.value;
            }
        } else {
            warning(0);
        }
    }
    source = JSON.stringify(source);
    this.callback(null, source, map);
    return JSON.stringify(source);
};
