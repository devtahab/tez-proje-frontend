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
import CreateBook from './components/CreateBook.vue'

import UserBorrowings from './components/user-panel/Borrowings.vue'
import Reservations from './components/user-panel/Reservations.vue'

import AdminBorrowings from './components/admin-panel/Borrowings.vue'
import ExpiredReservations from './components/admin-panel/ExpiredReservations.vue'
import Users from './components/admin-panel/Users.vue'
import ActiveReservations from './components/admin-panel/ActiveReservations.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/hakkimizda', component: About },
        { path: '/yardim', component: Help },
        { path: '/rezervasyon', component: Reservation },
        { path: '/kitaplar', component: Books },
        { path: '/giris-yap', component: Login },
        { path: '/kayit-ol', component: SignUp },
        { path: '/create-book', component: CreateBook },
        { path: '/odunc-kitaplar', component: UserBorrowings },
        { path: '/aktif-odunc-alinan-kitaplar', component: AdminBorrowings },
        { path: '/rezervasyonlarim', component: Reservations },
        { path: '/expired-reservations', component: ExpiredReservations },
        { path: '/users', component: Users},
        { path: '/active-reservations', component: ActiveReservations}
    ]
})

let app = createApp(App);

app.use(router);
app.use(store);

app.component('app-navbar', Navbar);
app.component('app-footer', Footer);

app.mount('#app');