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
            <img :src="book.imageUrl" :alt="book.name">
          </div>
          <div class="book-info">
            <h3 class="book-title">{{ book.name }}</h3>
            <p class="book-author">{{ book.authorName }}</p>
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
          
          <!-- Tab Navigation -->
          <div class="modal-tabs">
            <button 
              class="tab-button" 
              :class="{ 'active': activeTab === 'info' }"
              @click="activeTab = 'info'"
            >
              Kitap Bilgisi
            </button>
            <button 
              class="tab-button" 
              :class="{ 'active': activeTab === 'comments' }"
              @click="activeTab = 'comments'"
            >
              Yorumlar ({{ selectedBook.comments.length }})
            </button>
          </div>
          
          <!-- Book Info Tab -->
          <div v-if="activeTab === 'info'" class="tab-content">
            <div class="modal-book-details">
              <div class="modal-book-cover">
                <img :src="selectedBook.imageUrl" :alt="selectedBook.title">
              </div>
              <div class="modal-book-info">
                <h2>{{ selectedBook.title }}</h2>
                <p class="modal-book-author">Yazar: {{ selectedBook.authorName }}</p>
                <p class="modal-book-year">Yayın Yılı: {{ selectedBook.publishedYear }}</p>
                <p class="modal-book-genre">Tür: {{ selectedBook.genre }}</p>
                
                <!-- Rating Section -->
                <div class="rating-section">
                  <div class="current-rating">
                    <span class="rating-label">Puan Ver:</span>
                    <div class="stars-display">
                      <svg 
                        v-for="star in 5" 
                        :key="`display-${star}`"
                        class="star interactive"
                        :class="{ 
                          'filled': star <= selectedBook.rating,
                          'hover': star <= hoverRating && hoverRating > 0,
                          'selected': star <= tempRating && tempRating > 0
                        }"
                        @mouseover="hoverRating = star"
                        @mouseleave="hoverRating = 0"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span class="rating-text">({{ selectedBook.rating }}/5)</span>
                    </div>
                  </div>
                </div>
                
                <p class="modal-book-description">{{ selectedBook.description }}</p>
                <div class="modal-book-status">
                  <span :class="['status-indicator', selectedBook.isAvailable ? 'available' : 'not-available']"></span>
                  {{ selectedBook.isAvailable ? 'Mevcut' : 'Ödünç Verilmiş' }}
                </div>
                
                <div class="modal-actions">
                  <button 
                    class="borrow-button" 
                    :class="{ 'disabled': !selectedBook.isAvailable }"
                    :disabled="!selectedBook.isAvailable"
                    @click="borrowBook(selectedBook)"
                  >
                    Ödünç Al
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Comments Tab -->
          <div v-else-if="activeTab === 'comments'" class="tab-content">
            <div class="comments-section">
              
              <!-- Add Comment Form -->
              <div class="add-comment-section">
                <h3>Yorum Yaz</h3>
                
                <!-- Success Message -->
                <div v-if="commentSubmitted" class="comment-success">
                  ✅ Yorumunuz başarıyla eklendi!
                </div>
                
                <div class="comment-form">
                  <input 
                    type="text" 
                    placeholder="Adınız" 
                    class="comment-input"
                    v-model="newComment.userName"
                  />
                  <div class="comment-rating-input">
                    <span>Puanınız:</span>
                    <div class="comment-stars">
                      <svg 
                        v-for="star in 5" 
                        :key="`new-comment-star-${star}`"
                        class="star interactive small"
                        :class="{ 
                          'filled': star <= newComment.rating,
                          'hover': star <= newCommentHover && newCommentHover > 0
                        }"
                        @mouseover="newCommentHover = star"
                        @mouseleave="newCommentHover = 0"
                        @click="newComment.rating = star"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <textarea 
                    placeholder="Yorumunuzu yazın..." 
                    class="comment-textarea"
                    v-model="newComment.text"
                  ></textarea>
                  <button 
                    class="submit-comment-button"
                    @click="submitComment"
                    :disabled="!canSubmitComment"
                  >
                    Yorum Gönder
                  </button>
                </div>
              </div>
              
              <!-- Existing Comments -->
              <div v-if="selectedBook.comments.length === 0" class="no-comments">
                <p>Bu kitap için henüz yorum yapılmamış.</p>
                <p>İlk yorumu siz yazın!</p>
              </div>
              
              <div v-else class="comments-list">
                <h4 class="comments-title">Yapılan Yorumlar ({{ selectedBook.comments.length }})</h4>
                <div 
                  v-for="comment in selectedBook.comments" 
                  :key="comment.id"
                  class="comment-card"
                >
                  <div class="comment-header">
                    <div class="comment-user">
                      <div class="user-avatar">
                        {{ comment.userName ? comment.userName.charAt(0) : "U" }}
                      </div>
                      <div class="user-info">
                        <span class="user-name">{{ comment.userName ? comment.userName : "Username" }}</span>
                        <span class="comment-date">{{ comment.date ? formatDate(comment.date) : "2025" }}</span>
                      </div>
                    </div>
                    <div class="comment-rating">
                      <svg 
                        v-for="star in 5" 
                        :key="`comment-${comment.id}-star-${star}`"
                        class="comment-star"
                        :class="{ 'filled': star <= comment.rating }"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <p class="comment-text">{{ comment.comment }}</p>
                  <button v-if="comment.appuUserId === userId" class="comment-delete-btn">Sil <i class="bi bi-trash"></i></button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default {
data() {
    return {
      searchQuery: '',
      selectedBook: null,
      currentPage: 1,
      itemsPerPage: 8,
      hoverRating: 0,
      tempRating: 0,
      activeTab: 'info', // 'info' veya 'comments'
      newComment: {
        userName: '',
        rating: 0,
        text: ''
      },
      newCommentHover: 0,
      commentSubmitted: false, // Yorum gönderildi göstergesi
      books: [],
      userId: null
    }
},
computed: {
    filteredBooks() {
      if (!this.searchQuery) {
        return this.books;
      }
      
      const query = this.searchQuery.toLowerCase();
      return this.books.filter(book => 
        book.name.toLowerCase().includes(query) ||
        book.authorName.toLowerCase().includes(query) ||
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
    },
    canSubmitComment() {
      return this.newComment.userName.trim() !== '' && 
             this.newComment.rating > 0 && 
             this.newComment.text.trim() !== '';
    }
},
methods: {
    searchBooks() {
      // Arama yapıldığında sayfa 1'e dön
      this.currentPage = 1;
    },
    async selectBook(book) {
      try {
        let response = await axios.get(`http://35.158.197.224/api/review/get-average-rating-by-book-id?bookId=${book.id}`);
        book.rating = response.data.data;
      } catch (error) {
        book.rating = 0;
        console.warn("No rating found for this book");
      }

      try {
        let response = await axios.get(`http://35.158.197.224/api/review/get-reviews-by-book-id?bookId=${book.id}`);
        book.comments = response.data.data;
      } catch (error) {
        book.comments = [];
        console.warn("No reviews found for this book");
      }
      console.log(book.comments);
      console.log(this.userId);      

      this.selectedBook = book;
      this.hoverRating = 0;
      this.tempRating = 0;
      this.activeTab = 'info'; // Reset to info tab
      this.resetCommentForm(); // Reset comment form
      document.body.style.overflow = 'hidden'; // Modal açıkken scroll'u engelle
    },
    closeModal() {
      this.selectedBook = null;
      this.hoverRating = 0;
      this.tempRating = 0;
      this.activeTab = 'info';
      this.resetCommentForm();
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
    },
    resetCommentForm() {
      this.newComment = {
        userName: '',
        rating: 0,
        text: ''
      };
      this.newCommentHover = 0;
      this.commentSubmitted = false;
    },
    formatDate(date) {
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      return new Date(date).toLocaleDateString('tr-TR', options);
    },
    async submitComment() {
      if(!this.$store.state.token){
        alert("Yorum yapmak için giriş yapmanız gerekiyor");
        this.$router.push('/giris-yap');
        return;
      }

      console.log(jwtDecode(this.$store.state.token));

      if (!this.canSubmitComment) return;
      
      // Yeni yorum objesi oluştur
      const newComment = {
        // userName: this.newComment.userName.trim(),
        rating: this.newComment.rating,
        comment: this.newComment.text.trim(),
        appuUserId: jwtDecode(this.$store.state.token).id,
        bookId: this.selectedBook.id
        // date: new Date().toISOString().split('T')[0] // Bugünün tarihi (YYYY-MM-DD)
      };
      
      // // Yorumu kitabın comments dizisine ekle
      this.selectedBook.comments.push(newComment);

      let response = await axios.post('http://35.158.197.224/api/review/create-review', newComment);
      if(response.data.success){
        // Form'u temizle
        this.resetCommentForm();
        
        // Başarı göstergesi göster ve 3 saniye sonra gizle
        this.commentSubmitted = true;
        setTimeout(() => {
          this.commentSubmitted = false;
        }, 3000);
        
        // İsteğe bağlı: küçük bir başarı mesajı
        alert('Yorumunuz başarıyla eklendi!');
        this.selectBook(this.selectedBook);
      }
      else{
        alert("Bir hata oluştu...");
        this.$router.go(0);
      }
    },
    async getBooks(){
        let response = await axios.get("http://35.158.197.224/api/book/booklist");
        console.log(response.data.data);
        this.books = response.data.data;
        console.log(this.books);
    }
  },
  mounted(){
    this.getBooks();

    let token = this.$store.state.token;
    if (typeof token === 'string' && token.trim() !== '') {
        try {
          const decoded = jwtDecode(token);
          this.userId = decoded.Id || null; // küçük harf "id"
        } catch (e) {
          console.error('Token decode error:', e);
        }
      } else {
        console.warn('No valid token found.');
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

.modal-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.tab-button {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #6B7280;
  transition: all 0.2s ease;
  position: relative;
}

.tab-button:hover {
  color: #1F2937;
  background-color: #f8f9fa;
}

.tab-button.active {
  color: #1F2937;
  border-bottom-color: #1F2937;
  background-color: transparent;
}

.tab-content {
  padding: 1.5rem 2rem 2rem;
}

.modal-book-details {
  display: flex;
  flex-direction: column;
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

/* Rating styles */
.rating-section {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.current-rating {
  margin-bottom: 0;
}

.rating-label {
  display: block;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.stars-display {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.star path {
  fill: #d1d5db;
  stroke: #9ca3af;
  stroke-width: 1;
  transition: all 0.2s ease;
}

.star.filled path {
  fill: #fbbf24;
  stroke: #f59e0b;
}

.star.interactive:hover path,
.star.hover path {
  fill: #fbbf24;
  stroke: #895906;
}

.star.selected path {
  fill: #f59e0b;
  stroke: #d97706;
}

.star.interactive:hover {
  transform: scale(1.15);
}

.rating-text {
  margin-left: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
}

.rating-hint {
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.8rem;
  color: #6b7280;
  font-style: italic;
}

/* Comments Section Styles */
.comments-section {
  padding: 0;
}

.no-comments {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.no-comments p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.comments-list {
  margin-bottom: 0;
}

.comments-title {
  margin: 0 0 1rem 0;
  color: #1F2937;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.5rem;
}

.comment-card {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.comment-user {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1F2937;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  color: #1F2937;
  font-size: 0.9rem;
}

.comment-date {
  font-size: 0.8rem;
  color: #6b7280;
}

.comment-rating {
  display: flex;
  gap: 0.2rem;
}

.comment-star {
  width: 16px;
  height: 16px;
}

.comment-star path {
  fill: #d1d5db;
  stroke: #9ca3af;
  stroke-width: 1;
}

.comment-star.filled path {
  fill: #fbbf24;
  stroke: #f59e0b;
}

.comment-text {
  color: #4B5563;
  line-height: 1.6;
  margin: 0;
}

.add-comment-section {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.add-comment-section h3 {
  margin: 0 0 1rem 0;
  color: #1F2937;
  font-size: 1.2rem;
}

.comment-success {
  background-color: #d1fae5;
  color: #065f46;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #a7f3d0;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}

.comment-input:focus {
  border-color: #1F2937;
}

.comment-rating-input {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.comment-rating-input span {
  color: #1F2937;
  font-weight: 500;
  font-size: 0.9rem;
}

.comment-stars {
  display: flex;
  gap: 0.25rem;
}

.star.small {
  width: 18px;
  height: 18px;
}

.comment-textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
  min-height: 80px;
  resize: vertical;
  font-family: inherit;
}

.comment-textarea:focus {
  border-color: #1F2937;
}

.submit-comment-button {
  background-color: #1F2937;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.submit-comment-button:hover:not(:disabled) {
  background-color: #111827;
  transform: translateY(-1px);
}

.submit-comment-button:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.comment-delete-btn{
  color: white;
  background-color: red;
  font-weight: 500;
  font-size: 16px;
  border: 0;
  outline: 0;
  padding: 2px 24px;
  margin-top: 10px;
  border-radius: 8px;
}

.comment-delete-btn:hover{
  color: red;
  background-color: white;
  outline: 1px solid red;
}

/* Responsive Comments */
@media (max-width: 768px) {
  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .comment-rating-input {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style> 