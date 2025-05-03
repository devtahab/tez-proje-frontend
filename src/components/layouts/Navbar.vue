<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      <span class="system-name">LibPoint Kütüphane Sistemi</span>
    </div>
    <div class="navbar-right">
      <a href="#" class="nav-link">Rezervasyon</a>
      <a href="#" class="nav-link">Arama</a>

      <div class="dropdown">
        <button class="dropdown-toggle" @click="toggleDropdown">
          Kullanıcı
        </button>
        <ul v-if="showDropdown" class="dropdown-menu">
          <li><a href="#">Profil</a></li>
          <li><a href="#">Ayarlar</a></li>
          <li><a href="#">Çıkış</a></li>
        </ul>
      </div>

      <button class="theme-button" @click="setTheme('normal')">🌗</button>
      <button class="theme-button" @click="setTheme('colorblind')">🟠🔵</button>
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
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    setTheme(mode) {
      document.documentElement.setAttribute("data-theme", mode);
    },
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
  height: 40px;
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

.theme-button {
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
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
