<template>
  <div class="books-page">
    <div class="container">
      <h1 class="page-title">Kitap Arama</h1>
      
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          class="search-input" 
          placeholder="Kitap adı, yazar veya konu ara..."
          @input="searchBooks"
        />
        <button class="search-button" @click="searchBooks">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="search-icon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
        </button>
      </div>
      
      <div class="books-container">
        <div 
          v-for="book in paginatedBooks" 
          :key="book.id" 
          class="book-card"
          @click="selectBook(book)"
        >
          <div class="book-cover">
            <img :src="book.coverImage" :alt="book.title">
          </div>
          <div class="book-info">
            <h3 class="book-title">{{ book.title }}</h3>
            <p class="book-author">{{ book.author }}</p>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div class="pagination" v-if="totalPages > 1">
        <button 
          class="pagination-button" 
          @click="changePage(currentPage - 1)" 
          :disabled="currentPage === 1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </button>
        
        <div class="pagination-numbers">
          <button 
            v-for="page in paginationRange" 
            :key="page" 
            @click="changePage(page)" 
            class="pagination-number"
            :class="{ 'active': currentPage === page }"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          class="pagination-button" 
          @click="changePage(currentPage + 1)" 
          :disabled="currentPage === totalPages"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pagination-icon">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
          </svg>
        </button>
      </div>
      
      <!-- Book Detail Modal -->
      <div class="book-modal" v-if="selectedBook" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-button" @click="closeModal">×</button>
          <div class="modal-book-details">
            <div class="modal-book-cover">
              <img :src="selectedBook.coverImage" :alt="selectedBook.title">
            </div>
            <div class="modal-book-info">
              <h2>{{ selectedBook.title }}</h2>
              <p class="modal-book-author">Yazar: {{ selectedBook.author }}</p>
              <p class="modal-book-year">Yayın Yılı: {{ selectedBook.year }}</p>
              <p class="modal-book-genre">Tür: {{ selectedBook.genre }}</p>
              <p class="modal-book-description">{{ selectedBook.description }}</p>
              <div class="modal-book-status">
                <span :class="['status-indicator', selectedBook.available ? 'available' : 'not-available']"></span>
                {{ selectedBook.available ? 'Mevcut' : 'Ödünç Verilmiş' }}
              </div>
              
              <div class="modal-actions">
                <button 
                  class="borrow-button" 
                  :class="{ 'disabled': !selectedBook.available }"
                  :disabled="!selectedBook.available"
                  @click="borrowBook(selectedBook)"
                >
                  Ödünç Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedBook: null,
      currentPage: 1,
      itemsPerPage: 8,
      books: [
        {
          id: 1,
          title: 'Suç ve Ceza',
          author: 'Fyodor Dostoyevski',
          year: 1866,
          genre: 'Roman',
          description: 'Raskolnikov adlı fakir bir gencin işlediği cinayet sonrasında yaşadığı psikolojik çöküntüyü anlatan dünya klasiklerinden bir eser.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11439747/wh:true/wi:220',
          available: true
        },
        {
          id: 2,
          title: 'Küçük Prens',
          author: 'Antoine de Saint-Exupéry',
          year: 1943,
          genre: 'Fantastik',
          description: 'Bir pilotun çölde tanıştığı küçük prensin hikayesini anlatan, çocuklar için yazılmış ancak tüm yaşlara hitap eden felsefi bir masal.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11456461/wh:true/wi:220',
          available: true
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          year: 1949,
          genre: 'Distopya',
          description: 'Büyük Birader\'in gözetimindeki totaliter bir dünyada yaşayan Winston Smith\'in hikayesini anlatan, distopik kurgu klasiklerinden.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11453559/wh:true/wi:220',
          available: false
        },
        {
          id: 4,
          title: 'Simyacı',
          author: 'Paulo Coelho',
          year: 1988,
          genre: 'Roman',
          description: 'Santiago adlı çobanın kişisel efsanesini gerçekleştirmek için çıktığı yolculuğu anlatan, spiritüel temalar içeren bir başyapıt.',
          coverImage: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000064552-1.jpg',
          available: true
        },
        {
          id: 5,
          title: 'Sefiller',
          author: 'Victor Hugo',
          year: 1862,
          genre: 'Roman',
          description: 'Jean Valjean\'ın adaletsizlik, kefaret ve kurtuluş arayışı hikayesini anlatan, Fransız edebiyatının en önemli eserlerinden biri.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11580789/wh:true/wi:220',
          available: true
        },
        {
          id: 6,
          title: 'Şeker Portakalı',
          author: 'José Mauro de Vasconcelos',
          year: 1968,
          genre: 'Roman',
          description: 'Brezilya\'nın yoksul kesiminde büyüyen Zezé adlı küçük bir çocuğun hayata tutunma çabasını anlatan dokunaklı bir hikaye.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11454466/wh:true/wi:220',
          available: false
        },
        {
          id: 7,
          title: 'Yüzüklerin Efendisi',
          author: 'J.R.R. Tolkien',
          year: 1954,
          genre: 'Fantastik',
          description: 'Yüzük taşıyıcısı Frodo Baggins\'in Tek Yüzük\'ü yok etmek için çıktığı tehlikeli yolculuğu anlatan epik fantastik kurgu serisi.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11675124/wh:true/wi:220',
          available: true
        },
        {
          id: 8,
          title: 'Beyaz Diş',
          author: 'Jack London',
          year: 1906,
          genre: 'Macera',
          description: 'Yukon\'da yaşayan kurt köpeği White Fang\'in vahşi doğadan evcilleştirilmeye giden yolculuğunu anlatan klasik bir macera romanı.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:1249760/wh:true/wi:220',
          available: true
        },
        {
          id: 9,
          title: 'Dönüşüm',
          author: 'Franz Kafka',
          year: 1915,
          genre: 'Absürt',
          description: 'Gregor Samsa\'nın bir sabah uyandığında kendini dev bir böceğe dönüşmüş olarak bulmasıyla başlayan absürt ve alegorik hikaye.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11457886/wh:true/wi:220',
          available: false
        },
        {
          id: 10,
          title: 'Satranç',
          author: 'Stefan Zweig',
          year: 1942,
          genre: 'Novella',
          description: 'Bir transatlantik gemisinde satranç ustası Mirko Czentovic ile diğer yolcular arasındaki psikolojik satranç mücadelesini konu alan novella.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11494042/wh:true/wi:220',
          available: true
        },
        {
          id: 11,
          title: 'Uçurtma Avcısı',
          author: 'Khaled Hosseini',
          year: 2003,
          genre: 'Roman',
          description: 'Afganistan\'dan Amerika\'ya uzanan ve dostluk, ihanet, pişmanlık ve kurtuluş temalarını işleyen etkileyici bir hikaye.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11456053/wh:true/wi:220',
          available: true
        },
        {
          id: 12,
          title: 'Hayvan Çiftliği',
          author: 'George Orwell',
          year: 1945,
          genre: 'Alegorik',
          description: 'Bir çiftlikte hayvanların insanlara karşı ayaklanmasını ve sonrasında gelişen olayları anlatan, Sovyet rejimini eleştiren alegorik bir roman.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11429373/wh:true/wi:220',
          available: false
        },
        {
          id: 13,
          title: 'Bülbülü Öldürmek',
          author: 'Harper Lee',
          year: 1960,
          genre: 'Roman',
          description: 'Amerikan Güneyi\'nde ırkçılık ve adaletsizliğe karşı mücadele eden bir avukat ve onun çocuklarının hikayesini anlatan Pulitzer ödüllü roman.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11450211/wh:true/wi:220',
          available: true
        },
        {
          id: 14,
          title: 'Yabancı',
          author: 'Albert Camus',
          year: 1942,
          genre: 'Absürdizm',
          description: 'Toplumsal normlara kayıtsız kalan ve bir Arap\'ı öldürdükten sonra yargılanan Meursault\'un hikayesini anlatan varoluşçu roman.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11463051/wh:true/wi:220',
          available: true
        },
        {
          id: 15,
          title: 'Bin Muhteşem Güneş',
          author: 'Khaled Hosseini',
          year: 2007,
          genre: 'Roman',
          description: 'Afganistan\'da farklı kuşaklardan iki kadının hayatlarının kesişmesini ve dostluklarını anlatan duygusal bir roman.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11456093/wh:true/wi:220',
          available: false
        },
        {
          id: 16,
          title: 'Fareler ve İnsanlar',
          author: 'John Steinbeck',
          year: 1937,
          genre: 'Roman',
          description: 'Büyük Buhran döneminde Kaliforniya\'da çalışan iki gezgin tarım işçisinin dostluğunu ve hayallerini anlatan bir klasik.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11452999/wh:true/wi:220',
          available: true
        },
        {
          id: 17,
          title: 'Martı Jonathan Livingston',
          author: 'Richard Bach',
          year: 1970,
          genre: 'Felsefi',
          description: 'Sürüsünün geleneklerini reddederek uçmanın sınırlarını zorlamaya çalışan bir martının kendini gerçekleştirme yolculuğu.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:6559238/wh:true/wi:220',
          available: true
        },
        {
          id: 18,
          title: 'Dokuzuncu Hariciye Koğuşu',
          author: 'Peyami Safa',
          year: 1930,
          genre: 'Roman',
          description: 'Bacağındaki kemik hastalığı yüzünden hastane hastane dolaşan bir gencin acılarını, aşkını ve hayata tutunma çabasını anlatan otobiyografik roman.',
          coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11568693/wh:true/wi:220',
          available: false
        }
      ]
    }
  },
  computed: {
    filteredBooks() {
      if (!this.searchQuery) {
        return this.books;
      }
      
      const query = this.searchQuery.toLowerCase();
      return this.books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredBooks.slice(startIndex, endIndex);
    },
    paginationRange() {
      // Sayfa numaralarını oluşturmak için
      const paginationCount = 5; // Görüntülenecek maksimum sayfa numarası
      const halfPagination = Math.floor(paginationCount / 2);
      
      let startPage = Math.max(this.currentPage - halfPagination, 1);
      let endPage = startPage + paginationCount - 1;
      
      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(endPage - paginationCount + 1, 1);
      }
      
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      return pages;
    }
  },
  methods: {
    searchBooks() {
      // Arama yapıldığında sayfa 1'e dön
      this.currentPage = 1;
    },
    selectBook(book) {
      this.selectedBook = book;
      document.body.style.overflow = 'hidden'; // Modal açıkken scroll'u engelle
    },
    closeModal() {
      this.selectedBook = null;
      document.body.style.overflow = ''; // Scroll'u geri etkinleştir
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        // Sayfa değiştiğinde sayfanın üstüne scroll yap
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    borrowBook(book) {
      // Burada kitap ödünç alma işlemleri yapılabilir
      // Şimdilik basit bir alert gösterelim
      if (book.available) {
        alert(`"${book.title}" kitabını ödünç aldınız.`);
        // Gerçek uygulamada burada API isteği yapılabilir
        // book.available = false; // Kitabın durumunu güncelleyebiliriz
      }
    }
  }
}
</script>

<style scoped>
.books-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  text-align: center;
  color: #1F2937;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search-input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #4B5563;
}

.search-button {
  background-color: #1F2937;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #374151;
}

.search-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.books-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.book-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.book-cover {
  height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s;
}

.book-card:hover .book-cover img {
  transform: scale(1.05);
}

.book-info {
  padding: 1rem;
}

.book-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #1F2937;
  line-height: 1.3;
}

.book-author {
  margin: 0;
  color: #6B7280;
  font-size: 0.8rem;
}

/* Pagination styles */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.pagination-button {
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.pagination-button:hover:not(:disabled) {
  background-color: #f3f4f6;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-icon {
  width: 14px;
  height: 14px;
  fill: #4B5563;
}

.pagination-numbers {
  display: flex;
  margin: 0 0.5rem;
}

.pagination-number {
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  cursor: pointer;
  min-width: 2.5rem;
  text-align: center;
  transition: all 0.2s;
}

.pagination-number:hover {
  background-color: #f3f4f6;
}

.pagination-number.active {
  background-color: #1F2937;
  color: white;
  border-color: #1F2937;
}

/* Modal styles */
.book-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4B5563;
  z-index: 1;
}

.modal-book-details {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

@media (min-width: 768px) {
  .modal-book-details {
    flex-direction: row;
  }
}

.modal-book-cover {
  flex: 0 0 200px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

@media (min-width: 768px) {
  .modal-book-cover {
    margin-right: 2rem;
    margin-bottom: 0;
  }
}

.modal-book-cover img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-book-info {
  flex: 1;
}

.modal-book-info h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #1F2937;
}

.modal-book-author,
.modal-book-year,
.modal-book-genre {
  margin: 0.5rem 0;
  color: #4B5563;
}

.modal-book-description {
  margin: 1.5rem 0;
  line-height: 1.6;
  color: #4B5563;
}

.modal-book-status {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.status-indicator {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.available {
  background-color: #10B981;
}

.not-available {
  background-color: #EF4444;
}

.modal-actions {
  margin-top: 1rem;
}

.borrow-button {
  background-color: #1F2937;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.borrow-button:hover:not(.disabled) {
  background-color: #111827;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.borrow-button.disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .books-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .book-cover {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .books-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .book-cover {
    height: 180px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .books-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  
  .book-cover {
    height: 250px;
  }
  
  .book-info {
    padding: 0.8rem;
  }
  
  .pagination-numbers {
    margin: 0 0.25rem;
  }
  
  .pagination-number {
    padding: 0.4rem 0.6rem;
    margin: 0 0.125rem;
    min-width: 2rem;
  }
}
</style> 