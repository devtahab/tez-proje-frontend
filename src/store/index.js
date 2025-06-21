import { createStore } from "vuex";

let store = createStore({
    state: {
        token: localStorage.getItem('token') || null,
        colorBlindness: JSON.parse(localStorage.getItem('clb') || "false"),
        lightsOn: JSON.parse(localStorage.getItem('lights') || "false"),
        username: localStorage.getItem('username') || "",
        userRole: localStorage.getItem('userRole') || "user"
    },
    mutations: {
        saveToken(state, token){
            state.token = token;
            localStorage.setItem('token', token);
        },
        clearToken(state){
            state.token = null;
            localStorage.removeItem('token');
        },
        toggleColorBlindness(state) {
            state.colorBlindness = !state.colorBlindness;
            localStorage.setItem('clb', state.colorBlindness);
        },
        toggleLights(state){
            state.lightsOn = !state.lightsOn;
            localStorage.setItem('lights', state.lightsOn);
        },
        saveUsername(state, username){
            state.username = username;
            localStorage.setItem('username', username);
        },
        saveUserRole(state, userRole){
            state.userRole = userRole;
            localStorage.setItem('userRole', userRole);
        }
    }
})

export default store;