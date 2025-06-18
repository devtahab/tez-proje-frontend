import { createStore } from "vuex";

let store = createStore({
    state: {
        token: localStorage.getItem('token') || null,
    },
    mutations: {
        saveToken(state, token){
            state.token = token;
            localStorage.setItem('token', token);
        },
        clearToken(state){
            state.token = null;
            localStorage.removeItem('token');
        }
    }
})

export default store;