const path = require('path');
const beforeHook = require('./hook/beforeHook');

beforeHook();

module.exports = {
    configureWebpack: {
        resolveLoader: {
            modules: [
                path.resolve(__dirname, './loaders/rules'),
                'node_modules'
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                'assets': path.resolve(__dirname, './src')
            }
        },
        module: {
            // rules: [{
            //     test: /(\.vue|\.js|\.json)$/,
            //     loader: 'webpack-replace-loader',
            //     options: {
            //         arr: strReplaceArr
            //     }
            // },
            // {
            //     test: /(pages\.json)$/,
            //     loader: 'hjt-replace-json-loader',
            //     options: {
            //         arr: jsonReplaceArr
            //     }
            // }
            // {
            //     test: /\.js|\.vue$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     exclude: /node_modules/,
            //     include: [path.resolve(__dirname, 'src/components'),
            //         path.resolve(__dirname, 'src/pages'),
            //         path.resolve(__dirname, 'src/subPackages'),
            //         path.resolve(__dirname, 'src/mixins')],
            //     options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
            //         // formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
            //     }
            // }
            // ]
        }
    }
};
