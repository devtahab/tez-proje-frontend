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
      <div v-if="isLoggedIn" class="dropdown">
        <button type="button" class="dropdown-toggle" @click="toggleDropdown">
          Kullanıcı
        </button>
        <ul v-show="showDropdown" class="dropdown-menu">
          <li><a href="#">🧪 Test 1</a></li>
          <li><a href="#">⚙️ Test 2</a></li>
          <li><a href="#" @click="logout">🚪 Logout</a></li>
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
    };
  },
  computed: {
    lightsOn() {
      return this.$store.state.lightsOn;
    },
    colorBlind() {
      return this.$store.state.colorBlindness;
    },
    isLoggedIn() {
      return !!this.$store.state.token;
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggle_lights() {
      this.$store.commit('toggleLights');
      alert(this.lightsOn ? "Işıklar açıldı!" : "Işıklar kapandı!");
    },
    toggle_colors() {
      this.$store.commit('toggleColorBlindness');
      alert(this.colorBlind ? "Renk körüsünüz!" : "Renk körü değilsiniz!");
    },
    logout() {
      this.$store.commit('clearToken');
      this.$router.push('/');
    }
  }
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
  background-color: white;
  padding: 1rem;
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 9999;
}


.dropdown-menu li {
  padding: 0.5rem 1rem;
  color: black;
  font-weight: bold;
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
