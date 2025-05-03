<template>
    <div class="navbar">
        <div class="first-nav">
            <span>WinBid <i class="bi bi-trophy"></i></span>
            <router-link to="/">Ana Sayfa</router-link>
            <div class="nav-item">
                <a href="#">Ürünler</a>
                <div class="dropdown">
                    <router-link to="/shop">Online Satış</router-link>
                    <router-link to="/auction-shop">Müzayede</router-link>
                </div>
            </div>
            <router-link to="/about">Hakkında</router-link>
            <router-link to="/contact">İletişim</router-link>
        </div>

        <div v-if="this.$store.state.token" class="second-nav">
            <div class="nav-item">
                <a href="#">Hesap <i class="bi bi-person"></i></a>
                <div class="dropdown">
                    <router-link to="/cart">Sepet <i class="bi bi-bag"></i></router-link>
                    <router-link to="/admin/home">Panel <i class="bi bi-speedometer2"></i></router-link>
                </div>
            </div>
            <!-- <router-link to="/login">Giriş <i class="bi bi-box-arrow-in-left"></i></router-link> -->
            <a href="" @click="logout">Çıkış <i class="bi bi-box-arrow-right"></i></a>
        </div>

        <div v-else class="second-nav">
            <div class="nav-item">
                <a href="#">Hesap <i class="bi bi-person"></i></a>
                <div class="dropdown">
                    <router-link to="/cart">Sepet <i class="bi bi-bag"></i></router-link>
                    <!-- <router-link to="/admin/home">Panel <i class="bi bi-speedometer2"></i></router-link> -->
                </div>
            </div>
            <router-link to="/login">Giriş <i class="bi bi-box-arrow-in-left"></i></router-link>
            <!-- <a href="">Logout <i class="bi bi-box-arrow-right"></i></a> -->
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods: {
            logout(){
                this.$store.commit('clearToken')
            }
        }
    }
</script>


<style scoped>
    .navbar{
        width: 100%;
        height: 60px;
        padding: 0;
        display: flex;
        justify-content: space-between;
        background-color: black;
    }

    .navbar > .first-nav{
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }

    .navbar > .first-nav > span{
        flex-grow: 1;
        padding: 0 10px;
        text-align: center;
        text-decoration: none;
        color: green;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 26px;
        font-weight: 600;
    }

    .navbar > .first-nav > a{
        flex-grow: 1;
        padding: 0 10px;
        text-align: center;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition-duration: 0.3s;
    }

    .navbar > .first-nav > a:hover{
        background-color: whitesmoke;
        color: green;
    }

    .navbar > .second-nav{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }

    .navbar > .second-nav > a{
        flex-grow: 1;
        padding: 0 10px;
        text-align: center;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 24px;
        transition-duration: 0.3s;
    }

    .navbar > .second-nav > a:hover{
        background-color: whitesmoke;
        color: green;
    }

    /* Dropdown - Products */

    .navbar > .first-nav > .nav-item {
        position: relative;
        flex-grow: 1;
        background-color: antiquewhite;
    }

    .navbar > .first-nav > .nav-item > a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        background-color: black;
        padding: 0 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition-duration: 0.3s;
    }

    .navbar > .first-nav > .nav-item > a:hover{
        background-color: white;
        color: green;
    }

    .navbar > .first-nav > .nav-item > .dropdown {
        display: none;
        position: absolute;
        top: 60px; /* Adjust as per navbar height */
        left: 0;
        min-width: 120%;
        background-color: black;
        border-radius: 4px;
        overflow: hidden;
        z-index: 100;
    }

    .navbar > .first-nav > .nav-item > .dropdown > a {
        color: white;
        background-color: black;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 18px;
        transition: 0.3s;
    }

    .navbar > .first-nav > .nav-item > .dropdown > a:hover {
        background-color: white;
        color: green;
    }

    .navbar > .first-nav > .nav-item:hover > .dropdown {
        display: block;
    }

    /* Dropdown - Account */

    .navbar > .second-nav > .nav-item {
        position: relative;
        flex-grow: 1;
        background-color: antiquewhite;
    }

    .navbar > .second-nav > .nav-item > a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        background-color: black;
        padding: 0 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        column-gap: 5px;
        transition-duration: 0.3s;
    }

    .navbar > .second-nav > .nav-item > a:hover{
        background-color: white;
        color: green;
    }

    .navbar > .second-nav > .nav-item > .dropdown {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        min-width: 100%;
        background-color: black;
        border-radius: 4px;
        overflow: hidden;
        z-index: 100;
    }

    .navbar > .second-nav > .nav-item > .dropdown > a {
        color: white;
        background-color: black;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5px;
        text-decoration: none;
        font-size: 18px;
        transition: 0.3s;
    }

    .navbar > .second-nav > .nav-item > .dropdown > a:hover {
        background-color: white;
        color: green;
    }

    .navbar > .second-nav > .nav-item:hover > .dropdown {
        display: block;
    }
</style>