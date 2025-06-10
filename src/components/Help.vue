<template>
  <div class="help-page">
    <!-- Renkli Hero Bölümü -->
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">Yardım</h1>
        <p class="hero-text">Size nasıl yardımcı olabiliriz?</p>
      </div>
    </div>
    
    <div class="container main-content">
      <!-- Sık Sorulanlar Bölümü -->
      <section id="siksorular" class="help-section">
        <div class="section-header">
          <div class="icon-container">
            <i class="section-icon">❓</i>
          </div>
          <h2 class="section-title">Sık Sorulan Sorular</h2>
        </div>
        
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <h3 class="faq-question">
            <span class="question-marker">Q</span>
            {{ faq.question }}
          </h3>
          <p class="faq-answer">
            <span class="answer-marker">A</span>
            {{ faq.answer }}
          </p>
        </div>
      </section>

      <!-- Destek Bölümü -->
      <section id="destek" class="help-section">
        <div class="section-header">
          <div class="icon-container support-icon">
            <i class="section-icon">🛟</i>
          </div>
          <h2 class="section-title">Destek</h2>
        </div>
        <p>Kütüphane hizmetlerimiz ile ilgili destek almak için aşağıdaki iletişim kanallarını kullanabilirsiniz:</p>
        
        <div class="support-info">
          <div class="support-item" style="border-top: 4px solid #1F2937;">
            <h3><i class="support-item-icon">📞</i> Telefon Desteği</h3>
            <p>+90 (212) 123 45 67</p>
            <p>Çalışma Saatleri: Hafta içi 09:00 - 18:00</p>
          </div>
          
          <div class="support-item" style="border-top: 4px solid #1F2937;">
            <h3><i class="support-item-icon">📧</i> E-posta Desteği</h3>
            <p>destek@libpoint.com</p>
            <p>24 saat içinde yanıt verilmektedir.</p>
          </div>
          
          <div class="support-item" style="border-top: 4px solid #1F2937;">
            <h3><i class="support-item-icon">👥</i> Kütüphane İçi Destek</h3>
            <p>Kütüphane görevlilerimiz çalışma saatleri içerisinde size yardımcı olmaktan memnuniyet duyacaktır.</p>
          </div>
        </div>
      </section>

      <!-- İade Politikası Bölümü -->
      <section id="iadepolitikasi" class="help-section">
        <div class="section-header">
          <div class="icon-container policy-icon">
            <i class="section-icon">📚</i>
          </div>
          <h2 class="section-title">İade Politikası</h2>
        </div>
        
        <div class="policy-content">
          <h3 class="policy-subtitle"><span class="policy-icon">📝</span> Kitap İade Kuralları</h3>
          <ul class="policy-list">
            <li>Ödünç alınan kitaplar, belirtilen tarihte veya daha önce iade edilmelidir.</li>
            <li>Kitapların zamanında iade edilmemesi durumunda, her gün için gecikme ücreti uygulanır.</li>
            <li>Hasarlı olarak iade edilen kitapların tamir veya yenileme maliyeti kullanıcıdan tahsil edilir.</li>
            <li>Kaybolan kitaplar için, kitabın güncel fiyatı ve işlem ücreti tahsil edilir.</li>
          </ul>
          
          <h3 class="policy-subtitle"><span class="policy-icon">⏱️</span> Süre Uzatma</h3>
          <p>Ödünç alınan kitapların süresini uzatmak istiyorsanız:</p>
          <ul class="policy-list">
            <li>Kitap rezerve edilmemişse, teslim tarihinden önce iki kez süre uzatma yapılabilir.</li>
            <li>Süre uzatma işlemi online sistemden, telefonla veya kütüphaneye şahsen başvurarak yapılabilir.</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      faqs: [
        {
          question: "Kütüphaneye nasıl üye olabilirim?",
          answer: "Kütüphane üyeliği için kimlik kartınız ve ikamet belgeniz ile birlikte kütüphane görevlisine başvurabilirsiniz. Online üyelik için web sitemizden kayıt formunu doldurabilirsiniz."
        },
        {
          question: "Kaç kitap ödünç alabilirim?",
          answer: "Üyelik tipinize göre aynı anda 3 ila 5 kitap ödünç alabilirsiniz. Öğrenciler 3, akademik personel 5, diğer üyeler ise 4 kitap ödünç alabilir."
        },
        {
          question: "Kitap ödünç alma süresi ne kadardır?",
          answer: "Kitaplar genellikle 15 gün süreyle ödünç alınabilir. Kitap üzerinde rezervasyon yoksa bu süre iki kez uzatılabilir."
        },
        {
          question: "Gecikme durumunda ne kadar ceza ödenir?",
          answer: "Her kitap için günlük 2 TL gecikme ücreti uygulanmaktadır. Gecikme süresi 30 günü aştığında üyelik hakları geçici olarak dondurulur."
        },
        {
          question: "Kütüphane çalışma saatleri nelerdir?",
          answer: "Kütüphanemiz hafta içi 08:00-22:00, hafta sonu 10:00-20:00 saatleri arasında hizmet vermektedir. Resmi tatillerde çalışma saatleri değişiklik gösterebilir."
        }
      ]
    };
  }
};
</script>

<style scoped>
.help-page {
  background-color: #f8fafc;
  min-height: 80vh;
  padding: 10px 0 20px;
}

/* Hero Bölümü */
.hero-section {
  background: #F7FAFC;
  color: #1f2937;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.hero-text {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  color: #4b5563;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.main-content {
  position: relative;
  margin-top: -2rem;
}

/* Bölüm Stilleri */
.help-section {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);
  border-left: 5px solid transparent;
  transition: transform 0.3s ease;
}

.help-section:hover {
  transform: translateY(-5px);
}

#siksorular {
  border-left-color: #1F2937;
}

#destek {
  border-left-color: #1F2937;
}

#iadepolitikasi {
  border-left-color: #1F2937;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1F2937;
  margin-right: 1rem;
  font-size: 1.5rem;
}

.support-icon {
  background-color: #1F2937;
}

.policy-icon {
  background-color: #1F2937;
}

.section-icon {
  color: white;
  font-style: normal;
}

.section-title {
  font-size: 1.8rem;
  color: #1f2937;
  margin: 0;
  flex: 1;
}

/* FAQ Stilleri */
.faq-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
}

.faq-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.question-marker, .answer-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.75rem;
  font-weight: bold;
  font-size: 0.875rem;
}

.question-marker {
  background-color: #1F2937;
  color: white;
}

.answer-marker {
  background-color: #10b981;
  color: white;
}

.faq-question {
  font-size: 1.2rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.faq-answer {
  color: #4b5563;
  line-height: 1.6;
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
}

/* Destek Bölümü */
.support-info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.support-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.support-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.support-item:nth-child(1), 
.support-item:nth-child(2),
.support-item:nth-child(3) {
  border-top: 4px solid #1F2937;
}

.support-item h3 {
  font-size: 1.2rem;
  color: #1f2937;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.support-item-icon {
  margin-right: 0.5rem;
  font-style: normal;
}

.support-item p {
  color: #4b5563;
  margin-bottom: 0.5rem;
}

/* İade Politikası Bölümü */
.policy-subtitle {
  font-size: 1.2rem;
  color: #1f2937;
  margin: 1.5rem 0 1rem;
  display: flex;
  align-items: center;
}

.policy-subtitle:first-child {
  margin-top: 0;
}

.policy-icon {
  margin-right: 0.75rem;
  font-style: normal;
}

.policy-list {
  padding-left: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.policy-list li {
  color: #4b5563;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  position: relative;
}

.policy-list li::before {
  content: "✓";
  position: absolute;
  left: -1.5rem;
  color: #10b981;
  font-weight: bold;
}

@media (max-width: 768px) {
  .support-info {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .icon-container {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .section-header {
    margin-bottom: 1rem;
  }
}
</style> 