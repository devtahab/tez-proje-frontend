<template>
    <div class="footer">
        <span>Winbid <i class="bi bi-trophy"></i></span>
        <div class="footer-links">
            <router-link to="/">Ana Sayfa</router-link>
            <router-link to="/cart">Sepet</router-link>
            <router-link to="/about">Hakkında</router-link>
            <router-link to="/contact">İletişim</router-link>
        </div>
        <div class="footer-socials">
            <a href="">Instagram <i class="bi bi-instagram"></i></a>
            <a href="">Twitter <i class="bi bi-twitter"></i></a>
            <a href="">Facebook <i class="bi bi-facebook"></i></a>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>


<style scoped>
.footer{
        width: 100%;
        height: 200px;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 45px
    }

    .footer > span{
        padding: 5px 0;
        color: green;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 26px;
        font-weight: 600;
        /* background-color: wheat; */
    }

    .footer > .footer-links{
        width: 420px;
        padding: 5px 25px;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-left: 180px;
        /* background-color: red; */
    }

    .footer > .footer-links > a{
        font-size: 20px;
        text-decoration: none;
        color: white;
    }

    .footer > .footer-links > a:hover{
        color: green;
    }

    .footer > .footer-socials{
        width: 350px;
        padding: 5px 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        /* background-color: red; */
    }

    .footer > .footer-socials > a{
        font-size: 18px;
        text-decoration: none;
        color: white;
    }

    .footer > .footer-socials > a:hover{
        color: green;
    }
</style>