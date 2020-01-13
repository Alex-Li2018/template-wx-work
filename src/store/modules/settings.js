import conf from '../../config';

const state = {
    cityId: conf.CITY_ID,
    host: process.env.VUE_APP_API_HOST,
    webviewHost: process.env.VUE_APP_WEBVIEW_HOST,
    apiSecretKey: process.env.VUE_APP_API_SECRET_KEY
};

const mutations = {
    // 设置城市ID
    SET_CITY: (state, { cityId }) => {
        state.cityId = cityId;
    }
};

const actions = {
    setCity({ commit }, data) {
        // TODO::切换城市逻辑
        commit('SET_CITY', data);
    }
};

export default {
    namespace: true,
    state,
    mutations,
    actions
};
