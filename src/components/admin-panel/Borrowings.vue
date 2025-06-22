<template>
  <div class="loan-page">
    <h1 class="loan-title">📚 Tüm Aktif Ödünç Alınan Kitaplar</h1>

    <!-- 🔍 Arama Girişi -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Kitap adına veya ödünç koduna göre ara..."
      class="search-box"
    />

    <div v-if="loading" class="loan-loading">Yükleniyor...</div>
    <div v-else-if="filteredBorrowings.length === 0" class="loan-empty">
      Eşleşen sonuç bulunamadı.
    </div>

    <div class="loan-list" v-else>
      <div
        class="loan-card"
        v-for="borrowing in paginatedBorrowings"
        :key="borrowing.borrowingId"
      >
        <div class="book-name">{{ borrowing.bookName }}</div>
        <div class="loan-code">Ödünç Kodu: <span>{{ borrowing.code }}</span></div>
        <img :src="borrowing.imageUrl" alt="Kitap Resmi" class="loan-image" />
        <button class="return-button" @click="returnBook(borrowing)">
          İade Et
        </button>
      </div>
    </div>

    <!-- 📄 Sayfalama -->
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">‹</button>
      <span>Sayfa {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">›</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default {
  name: "AdminBorrowings",
  data() {
    return {
      borrowings: [],
      loading: true,
      searchQuery: "",
      currentPage: 1,
      itemsPerPage: 6
    };
  },
  computed: {
    filteredBorrowings() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) return this.borrowings;

      return this.borrowings.filter(b =>
        b.bookName.toLowerCase().includes(query) ||
        b.code.toLowerCase().includes(query)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredBorrowings.length / this.itemsPerPage);
    },
    paginatedBorrowings() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredBorrowings.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    async returnBook(borrowing) {
      try {
        console.log(borrowing);
        console.log(borrowing.userId);
        console.log(borrowing.bookId);
        console.log(jwtDecode(this.$store.state.token).Id);
        const confirmed = confirm("Bu kitabı iade etmek istediğinize emin misiniz?");
        if (!confirmed) return;

        let response = await axios.post('http://35.158.197.224/api/borrowing/completeborrowing', {
          appUserId: borrowing.userId,
          adminId: jwtDecode(this.$store.state.token).Id,
          bookId: borrowing.bookId
        }
        );

        console.log(response.data);

        alert("Kitap başarıyla iade edildi.");
        this.$router.go(0);
      } catch (err) {
        console.error("İade sırasında hata:", err);
        alert("İade işlemi başarısız oldu.");
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://35.158.197.224/api/borrowing/getallborrowings`);
      const active = response.data.data.filter(b => b.isActive === true);

      const enriched = await Promise.all(
        active.map(async b => {
          try {
            const bookResponse = await axios.get(`http://35.158.197.224/api/book/${b.bookId}`);
            const book = bookResponse.data.data;

            return {
              borrowingId: b.id,
              code: b.code,
              bookId: b.bookId,
              userId: b.appUserId,
              bookName: book.name,
              imageUrl: book.imageUrl
            };
          } catch (err) {
            console.error("Kitap alınamadı:", err);
            return null;
          }
        })
      );

      this.borrowings = enriched.filter(b => b !== null);
    } catch (err) {
      console.error("Veri çekilemedi:", err);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.loan-page {
  padding: 2rem 3rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.loan-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.loan-loading,
.loan-empty {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-top: 2rem;
}

.loan-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.loan-card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s;
}

.loan-card:hover {
  transform: scale(1.03);
}

.loan-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 0.5rem;
}

.book-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #222;
}

.user-name {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.3rem;
}

.loan-code {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.5rem;
}

.loan-code span {
  color: #007bff;
}

.return-button {
  background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  margin-top: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.return-button:hover {
  background-color: darkorange;
}

.search-box {
  width: 100%;
  max-width: 400px;
  padding: 0.6rem 1rem;
  margin: 0 auto 1.5rem;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.pagination {
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

</style>
