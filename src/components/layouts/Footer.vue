<template>
  <div>


    <!-- Footer Alanı -->
    <footer class="footer">
      <div class="container">
        <!-- Üst Kısım -->
        <div class="footer-top">
          <div class="footer-left">
            <h3 class="footer-title">LibPoint Kütüphane Sistemi</h3>
            <p class="footer-description">
              Kitaplara kolayca ulaşın, rezervasyon yapın.
            </p>
          </div>

          <div class="footer-links">
            <!-- Hakkında -->
            <div>
              <h4 class="footer-links-title">Hakkında</h4>
              <ul class="footer-links-list">
                <li><a href="#">Kütüphane Hakkında</a></li>
                <li><a href="#">Kurallar</a></li>
                <li><a href="#">İletişim</a></li>
              </ul>
            </div>
            <!-- Yardım -->
            <div>
              <h4 class="footer-links-title">Yardım</h4>
              <ul class="footer-links-list">
                <li><a href="#">Sık Sorulanlar</a></li>
                <li><a href="#">Destek</a></li>
                <li><a href="#">İade Politikası</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Alt Kısım -->
        <div class="footer-bottom">
          <p>© 2025 LibPoint. Tüm hakları saklıdır.</p>
          <div class="footer-bottom-links">
            <a href="#">Gizlilik</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>

/* Footer Alanı */
.footer {
  background-color: #1f2937;
  color: white;
  margin-top: -1px; /* Dalga ve footer'ı birleştirmek için küçük bir margin ekliyoruz */
  padding-top: 0; /* Footer'ın üst kısmındaki padding'i sıfırlıyoruz */
  padding-bottom: 4rem;
}

.container {
  max-width: 7xl;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}

.footer-left {
  text-align: center;
}

.footer-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-description {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Footer Link Kısımları */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  text-align: center;
}

.footer-links-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.footer-links-list {
  list-style-type: none;
  padding: 0;
}

.footer-links-list li a {
  color: #d1d5db;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}

.footer-links-list li a:hover {
  text-decoration: underline;
}

/* Alt Kısım */
.footer-bottom {
  margin-top: 3rem;
  border-top: 1px solid #4b5563;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.footer-bottom-links a {
  color: #d1d5db;
  text-decoration: none;
}

.footer-bottom-links a:hover {
  text-decoration: underline;
}
</style>
