const fs = require('fs');
const path = require('path');
const cityName = process.env.CITY_NAME;

function createManifest() {
    const defaultManifest = {
        'name': 'Yao-uniapp',
        'appid': '',
        'description': '',
        'versionName': '1.0.0',
        'versionCode': '100',
        'transformPx': false,
        'uniStatistics': {
            'enable': false
        },
        'mp-weixin': {
            'uniStatistics': {
                'enable': false //微信平台关闭统计
            },
            'usingComponents': true,
            'optimization': {
                'subPackages': true
            },
            'permission': {
                'scope.userLocation': {
                    'desc': '获取地理位置'
                }
            }
        }
    };
    defaultManifest['mp-weixin'] = Object.assign({}, defaultManifest['mp-weixin'], createProjectConfig());
    return defaultManifest;
}

function createProjectConfig() {
    return require(`../build/${cityName}/config/project.config.json`);
}

function createPagesConfig() {
    return require(`../build/${cityName}/config/pages.json`);
}

module.exports = () => {
    // manifest 配置
    const manifest = createManifest();
    const manifestPath = path.resolve(__dirname, '../src/manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    // page 配置
    const pageConfig = createPagesConfig();
    const pageConfigPath = path.resolve(__dirname, '../src/pages.json');
    fs.writeFileSync(pageConfigPath, JSON.stringify(pageConfig, null, 2));
};
