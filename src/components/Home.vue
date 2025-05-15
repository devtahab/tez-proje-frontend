<template>
  <div class="home-page">
    <!-- 1. Yöntem: Video olarak -->
    <video 
      ref="videoPlayer" 
      autoplay 
      muted 
      loop 
      playsinline 
      preload="auto" 
      class="video-background"
    >
      <!-- Public dizinindeki dosya -->
      <source src="/library_medium.mp4" type="video/mp4">
      
      <!-- Assets dizinindeki import edilen dosya -->
      <source :src="videoSrc" type="video/mp4">
      
      Your browser does not support the video tag.
    </video>
    
    <!-- 2. Yöntem: Arka plan görseli olarak -->
    <div class="background-overlay"></div>
    
    <div class="welcome">
      <h1 class="welcome-title">LibPoint Kütüphane Sistemine Hoşgeldiniz</h1>
    </div>
    
    <div class="reservation-container">
      <router-link to="/reservation" class="reservation-link">
        <div class="reservation-label">Reservation</div>
        <img src="/reservation.jpg" alt="Reservation" class="reservation-image">
      </router-link>
    </div>
    
    <div class="book-search-container">
      <router-link to="/kitaplar" class="book-search-button">
        <svg class="book-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!-- Font Awesome Book icon -->
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
        </svg>
        <span>Kitap Ara</span>
      </router-link>
    </div>

    <div class="library-stats">
      <div class="stat-card">
        <div class="stat-icon seat-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- Font Awesome Chair icon (alternative) -->
            <path d="M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384H416c11.1 0 21.2-6.1 26.6-15.9s6.4-21.3 1.4-31.1l-16-32c-5.4-10.9-16.5-17.7-28.6-17.7H48zM32 416v32c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V416H32z" fill="black"/>
          </svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">42</div>
          <div class="stat-label">Boş Koltuk</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon people-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!-- Font Awesome People Group icon -->
            <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/>
          </svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">28</div>
          <div class="stat-label">İçeridekiler</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon reservation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- Font Awesome Calendar Check icon -->
            <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
          </svg>
        </div>
        <div class="stat-info">
          <div class="stat-value">15</div>
          <div class="stat-label">Rezervasyon</div>
        </div>
      </div>
    </div>

    <!-- Dalga SVG - Video'nun altında -->
    <svg
      class="wave"
      preserveAspectRatio="none"
      viewBox="0 0 2160 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
        fill="#1F2937"
      />
    </svg>
  </div>
</template>

<script>
import videoSource from '../assets/library_medium.mp4';

export default {
  data() {
    return {
      videoLoaded: false,
      videoSrc: videoSource
    };
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    if (video) {
      // Video elementi hazır olduğunda
      video.addEventListener('loadeddata', () => {
        this.videoLoaded = true;
        console.log('Video loaded successfully');
        
        // Video yüklendikten sonra doğrudan play çağrısı
        video.play().catch(err => {
          console.error('Video play error:', err);
        });
      });
      
      // Video yüklenirken hata oluşursa
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        // Hata olursa CSS background kullanılacak
        document.querySelector('.home-page').classList.add('use-background');
      });
    }
  }
};
</script>

<style scoped>
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  margin: 0;
  padding: 1;
}
.home-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* Video hata verirse bu arka plan görünecek */
  background-color: #1e293b;
}

/* Video çalışmadığında görsel arka plan kullanmak için */
.home-page.use-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
                    url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format');
  background-size: cover;
  background-position: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.welcome {
  position: relative;
  z-index: 2;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
}

.welcome-title {
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.5s ease-in-out;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reservation-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -20px auto 0;
  padding: 20px;
}

.features {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  margin-top: 20px;
}

.reservation-link {
  display: block;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding: 4px;
  background-color: rgba(255, 252, 245, 0.6);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.reservation-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
  pointer-events: none;
}

.reservation-link::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: inherit;
  background-image: url('/reservation.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.8);
  opacity: 0.7;
  border-radius: 15px;
}

.reservation-link:hover {
  transform: scale(1.05);
}

.reservation-image {
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.7);
}

.reservation-label {
  position: absolute;
  bottom: 25px;
  left: 10px;
  right: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 5;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 6px;
  margin: 0 auto;
}

.book-search-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
}

.book-search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 41, 55, 0.8);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.book-search-button:hover {
  background-color: rgba(31, 41, 55, 1);
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.book-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: currentColor;
}

.library-stats {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 40px;
  flex-wrap: wrap;
  max-width: 900px;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 15px 25px;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}
</style>
