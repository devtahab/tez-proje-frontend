import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import App from './App.vue'

import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Help from './components/Help.vue';
import Books from './components/Books.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Reservation from './components/Reservation.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/hakkimizda', component: About },
        { path: '/yardim', component: Help },
        { path: '/rezervasyon', component: Reservation },
        { path: '/kitaplar', component: Books },
        { path: '/giris-yap', component: Login },
        { path: '/kayit-ol', component: SignUp }
    ]
})

let app = createApp(App);

app.use(router);
app.use(store);

app.component('app-navbar', Navbar);
app.component('app-footer', Footer);

app.mount('#app');