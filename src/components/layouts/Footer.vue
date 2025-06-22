<template>
  <div>
    <!-- Footer Alanı -->
    <footer class="footer">
      <div class="container">
        <!-- Üst Kısım -->
        <div class="footer-top">
          <div class="footer-left">
            <h3 class="footer-title">LibPoint <span :class="colorBlind ? 'kutuphane-color' : 'kutuphane'">Kütüphane</span></h3>
            <p class="footer-description">
              Kitaplara kolayca ulaşın, rezervasyon yapın.
            </p>
            <!-- Social Media Links -->
            <div class="social-links">
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <!-- Hakkında -->
            <div class="footer-link-group">
              <h4 class="footer-links-title">Hakkımızda</h4>
              <div :class="colorBlind ? 'title-underline-color' : 'title-underline'"></div>
              <ul class="footer-links-list">
                <li><router-link to="/hakkimizda#kutuphane-hakkinda">Kütüphane Hakkında</router-link></li>
                <li><router-link to="/hakkimizda#kurallar">Kurallar</router-link></li>
                <li><router-link to="/hakkimizda#iletisim">İletişim</router-link></li>
              </ul>
            </div>
            <!-- Yardım -->
            <div class="footer-link-group">
              <h4 class="footer-links-title">Yardım</h4>
              <div :class="colorBlind ? 'title-underline-color' : 'title-underline'"></div>
              <ul class="footer-links-list">
                <li><router-link to="/yardim#siksorular">Sık Sorulanlar</router-link></li>
                <li><router-link to="/yardim#destek">Destek</router-link></li>
                <li><router-link to="/yardim#iadepolitikasi">İade Politikası</router-link></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Alt Kısım -->
        <div class="footer-bottom">
          <p class="copyright">© 2025 <span :class="colorBlind ? 'kutuphane-color' : 'kutuphane'">LibPoint</span>. Tüm hakları saklıdır.</p>
          <div class="footer-bottom-links">
            <a href="#">Gizlilik</a>
            <span class="separator">•</span>
            <a href="#">Kullanım Şartları</a>
            <span class="separator">•</span>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    computed: {
      colorBlind() {
        return this.$store.state.colorBlindness;
      }
    },
  };
</script>

<style scoped>
/* Footer Alanı */
.footer {
  background-color: #1F2937;
  /* background-image: linear-gradient(to bottom, #1a2230, #1f2937); */
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
    align-items: flex-start;
    text-align: left;
  }
}

.footer-left {
  text-align: center;
  max-width: 350px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .footer-left {
    text-align: left;
    margin: 0;
  }
}

.footer-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  position: relative;
  display: inline-block;
}

.highlight {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.kutuphane {
  color: #11B981;
  font-weight: 800;
}

.kutuphane-color{
  color: blue;
  font-weight: 800;
}

.footer-description {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Social Media Links */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .social-links {
    justify-content: flex-start;
  }
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Footer Link Kısımları */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .footer-links {
    text-align: left;
    width: auto;
  }
}

.footer-link-group {
  display: flex;
  flex-direction: column;
}

.footer-links-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
}

.title-underline {
  height: 3px;
  width: 40px;
  background: #11B981;
  margin-bottom: 1.2rem;
  border-radius: 2px;
}

.title-underline-color{
  height: 3px;
  width: 40px;
  background: blue;
  margin-bottom: 1.2rem;
  border-radius: 2px;
}

@media (min-width: 1024px) {
  .title-underline {
    margin-left: 0;
  }
}

.footer-links-list {
  list-style-type: none;
  padding: 0;
}

.footer-links-list li {
  margin-bottom: 0.8rem;
}

.footer-links-list li a {
  color: #d1d5db;
  text-decoration: none;
  display: block;
  transition: all 0.2s ease;
  padding: 0.3rem 0;
  position: relative;
}

.footer-links-list li a:hover {
  color: white;
  transform: translateX(5px);
}

.footer-links-list li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: width 0.3s ease;
}

.footer-links-list li a:hover::after {
  width: 100%;
}

/* Alt Kısım */
.footer-bottom {
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    align-items: center;
  }
}

.copyright {
  color: #9ca3af;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.separator {
  color: #4b5563;
  font-size: 0.8rem;
}

.footer-bottom-links a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  padding: 0.2rem 0.5rem;
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 1023px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-bottom {
    margin-top: 3rem;
  }
  
  .title-underline {
    margin: 0 auto 1.2rem;
  }
}
</style>
