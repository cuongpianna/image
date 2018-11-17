import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        console.log('okoko');
        api.login();
    },
    logout: ({commmit}) => {
        commmit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state, getters, actions, mutations
}