const getters = {
    cityId: state => state.settings.cityId,
    host: state => state.settings.host,
    webviewHost: state => state.settings.webviewHost,
    apiSecret: state => state.settings.apiSecretKey,
    version: state => state.settings.version
};

export default getters;
