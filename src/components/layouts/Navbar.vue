<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/logo.jpeg" alt="Logo" class="logo" />
      <span class="system-name">LibPoint Kütüphane Sistemi</span>
    </div>
    <div class="navbar-right">
      <router-link to="/" class="nav-link">Ana Sayfa</router-link>
      <router-link to="/hakkimizda" class="nav-link">Hakkımızda</router-link>
      <router-link to="/rezervasyon" class="nav-link">Rezervasyon</router-link>
      <router-link to="/kitaplar" class="nav-link">Kitaplar</router-link>

      <!-- Kullanıcı giriş yapmadıysa -->
      <div v-if="!isLoggedIn" class="auth-buttons">
        <router-link to="/giris-yap" class="nav-link">Giriş Yap</router-link>
        <router-link to="/kayit-ol" class="nav-link">Kayıt Ol</router-link>
      </div>

      <!-- Kullanıcı giriş yaptıysa -->
      <div v-else class="dropdown">
        <button class="dropdown-toggle" @click="toggleDropdown">
          Kullanıcı
        </button>
        <ul v-if="showDropdown" class="dropdown-menu">
          <li><a href="#">Profil</a></li>
          <li><a href="#">Ayarlar</a></li>
          <li><a href="#" @click="logout">Çıkış</a></li>
        </ul>
      </div>

      <img v-if="this.lightsOn" class="light_switch" src="/images/açık_ışık.png" @click="toggle_lights()">
      <img v-if="!this.lightsOn" class="light_switch" src="/images/kapalı_ışık.png" @click="toggle_lights()">
      <img v-if="!this.colorBlind" class="colorblind_button" src="/images/color_blind_off.png" @click="toggle_colors()">
      <img v-if="this.colorBlind" class="colorblind_button" src="/images/color_blind_on.png" @click="toggle_colors()">
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      isLoggedIn: false, // Bu değer gerçek uygulamada bir auth store'dan gelecek
      lightsOn: true,
      colorBlind: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggle_lights(){
      if(this.lightsOn){
        this.lightsOn = false;
        alert("Işıklar kapandı!");
      }
      else{
        this.lightsOn = true;
        alert("Işıklar açıldı!");
      }
    },
    toggle_colors(){
      if(!this.colorBlind){
        this.colorBlind = true;
        alert("Renk körüsünüz!");
      }
      else{
        this.colorBlind = false;
        alert("Renk körü değilsiniz!");
      }
    },
    logout() {
      // Burada logout işlemi yapılacak
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 3rem; /* Sağ ve soldan boşluk */
  background-color: #1f2937;
  color: var(--text-color);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 65px;
  margin-right: 10px;
}

.system-name {
  color: #bbb;
  font-style: italic;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  color: black;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  border-radius: 4px;
  z-index: 10;
}

.dropdown-menu li {
  margin: 0.25rem 0;
}

.dropdown-menu a {
  text-decoration: none;
  color: black;
}

.light_switch{
  width: 30px;
  height: 30px;
  margin-top: 6px;
  cursor: pointer;
}

.colorblind_button{
  width: 30px;
  height: 30px;
  margin-top: 6px;
  cursor: pointer;
}

</style>

<!-- Tema için global CSS (örneğin App.vue veya main.css içinde olabilir) -->
<style>
:root[data-theme="normal"] {
  --navbar-bg: #3e497a;
  --text-color: white;
}

:root[data-theme="colorblind"] {
  --navbar-bg: #006666;
  --text-color: #f5f5f5;
}
</style>
