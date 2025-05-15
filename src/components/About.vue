<template>
  <div class="about-page">
    <div class="about-container">
      <div class="about-content">
        <h1 class="about-title">Hakkımızda</h1>
        
        <!-- Ana bölüm - Kütüphane Hakkında -->
        <section id="kutuphane-hakkinda">
          <h2 class="section-title">Kütüphane Hakkında</h2>
          <div class="about-text">
            <p>LibPoint, öğrenciler ve araştırmacılar için tasarlanmış modern bir kütüphane yönetim sistemidir. 
              Amacımız, bilgiye erişimi kolaylaştırmak ve öğrenme deneyimini zenginleştirmektir.</p>
            
            <p>Kütüphanemiz, zengin bir koleksiyona sahiptir ve kullanıcılarımıza rahat bir çalışma ortamı sunmaktadır. 
              Özel çalışma alanları, grup çalışma odaları ve modern teknolojik altyapımız ile araştırma ve öğrenme 
              süreçlerinizi destekliyoruz.</p>
            
            <h3>Misyonumuz</h3>
            <p>Bilgiye erişimi demokratikleştirmek ve herkes için eşit öğrenme fırsatları sunmak.</p>
            
            <h3>Vizyonumuz</h3>
            <p>Teknoloji ve inovasyonu kullanarak kütüphane deneyimini yeniden tanımlamak ve 
              bilgi kaynaklarına erişimi kolaylaştırmak.</p>
            
            <h3>Değerlerimiz</h3>
            <ul>
              <li>Erişilebilirlik</li>
              <li>Yenilikçilik</li>
              <li>Kullanıcı Odaklılık</li>
              <li>Toplum Hizmeti</li>
              <li>Sürdürülebilirlik</li>
            </ul>
          </div>
        </section>
        
        <!-- Kurallar Bölümü -->
        <section id="kurallar" class="section-container">
          <h2 class="section-title">Kurallar</h2>
          <div class="rules-container">
            <div class="rule-item">
              <div class="rule-icon">📚</div>
              <div class="rule-content">
                <h3>Ödünç Alma</h3>
                <p>Kitaplar 15 gün süreyle ödünç alınabilir. Bir kullanıcı aynı anda en fazla 5 kitap ödünç alabilir.</p>
              </div>
            </div>
            
            <div class="rule-item">
              <div class="rule-icon">⏰</div>
              <div class="rule-content">
                <h3>Çalışma Saatleri</h3>
                <p>Kütüphane Pazartesi-Cuma 08:00-22:00, hafta sonları 10:00-20:00 saatleri arasında hizmet vermektedir.</p>
              </div>
            </div>
            
            <div class="rule-item">
              <div class="rule-icon">🔊</div>
              <div class="rule-content">
                <h3>Sessizlik</h3>
                <p>Kütüphane içerisinde sessizlik esastır. Grup çalışmaları için özel odalar kullanılmalıdır.</p>
              </div>
            </div>
            
            <div class="rule-item">
              <div class="rule-icon">🥤</div>
              <div class="rule-content">
                <h3>Yiyecek ve İçecek</h3>
                <p>Kütüphane içerisinde kapaklı içecekler dışında yiyecek ve içecek tüketimi yasaktır.</p>
              </div>
            </div>
            
            <div class="rule-item">
              <div class="rule-icon">💻</div>
              <div class="rule-content">
                <h3>Teknoloji Kullanımı</h3>
                <p>Kütüphane bilgisayarları sadece araştırma ve eğitim amaçlı kullanılabilir.</p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- İletişim Bölümü -->
        <section id="iletisim" class="section-container">
          <h2 class="section-title">İletişim</h2>
          <div class="contact-container">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <h3>Adres</h3>
                  <p>Doğuş Üniversitesi, Dudullu OSB Mah. Nato Yolu Cad. No:265, 34775 Ümraniye/İstanbul</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h3>Telefon</h3>
                  <p>+90 212 123 45 67</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <h3>E-posta</h3>
                  <p>info@libpoint.edu.tr</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div>
                  <h3>Çalışma Saatleri</h3>
                  <p>Pazartesi-Cuma: 08:00-22:00</p>
                  <p>Cumartesi-Pazar: 10:00-20:00</p>
                </div>
              </div>
            </div>
            
            <div class="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.075668563681!2d29.173514076818048!3d41.001716971351485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f63b1068af%3A0xd2bca6ca8c60ef84!2zRG_En3XFnyBVbml2ZXJzaXR5!5e0!3m2!1sen!2str!4v1747328410498!5m2!1sen!2str" 
                width="100%" 
                height="100%" 
                style="border: 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    // URL'de # ile belirtilen bir bölüm varsa o bölüme scroll yap
    if (window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        // Smooth scroll işlemi
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Sayfaya geldikten sonra hash değişikliklerini dinle
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },
  beforeUnmount() {
    // Component kaldırıldığında event listener'ı temizle
    window.removeEventListener('hashchange', () => {});
  }
}
</script>

<style scoped>
.about-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 40px 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.about-title {
  color: #1F2937;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

.section-title {
  color: #1F2937;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.about-text {
  line-height: 1.6;
  color: #4B5563;
  width: 100%;
  padding: 0;
}

.about-text h3 {
  color: #1F2937;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
}

.about-text p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.about-text ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.about-text li {
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.section-container {
  margin-top: 50px;
}

/* Kurallar Bölümü Stilleri */
.rules-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.rule-item {
  display: flex;
  background-color: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.rule-icon {
  font-size: 2rem;
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.rule-content h3 {
  color: #1F2937;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 600;
}

.rule-content p {
  color: #4B5563;
  margin: 0;
}

/* İletişim Bölümü Stilleri */
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  margin-top: 5px;
}

.contact-item h3 {
  color: #1F2937;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 600;
}

.contact-item p {
  color: #4B5563;
  margin: 0;
}

.contact-map {
  width: 100%;
  height: 300px;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-text {
  font-size: 1.5rem;
  color: #9ca3af;
}

@media (min-width: 768px) {
  .rules-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-container {
    flex-direction: row;
  }
  
  .contact-info {
    flex: 1;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-map {
    flex: 1;
  }
}
</style> 