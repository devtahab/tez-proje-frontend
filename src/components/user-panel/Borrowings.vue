<template>
  <div class="loan-page">
    <h1 class="loan-title">📚 Aktif Ödünç Alınan Kitaplar</h1>

    <div v-if="loading" class="loan-loading">Yükleniyor...</div>
    <div v-else-if="borrowings.length === 0" class="loan-empty">
      Hiç ödünç alınan kitap bulunamadı.
    </div>

    <div class="loan-list" v-else>
      <div class="loan-card" v-for="borrowing in borrowings" :key="borrowing.bookId">
        
        <!-- ✅ Kitap İsmi -->
        <div class="book-name">{{ borrowing.bookName }}</div>

        <!-- ✅ Ödünç Kodu -->
        <div class="loan-code">Ödünç Kodu: <span>{{ borrowing.code }}</span></div>

        <!-- ✅ Kitap Görseli -->
        <img :src="borrowing.imageUrl" alt="Kitap Resmi" class="loan-image" />
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'UserBorrowings',
  data() {
    return {
      borrowings: [],
      loading: true,
    };
  },
  async created() {
    try {
      let userId = jwtDecode(this.$store.state.token).Id;

      // Step 1: Get all borrowings
      let response = await axios.get(`http://35.158.197.224/api/borrowing/getborrowingsbyuserid?userId=${userId}`);
      let borrowings = response.data.data.filter(b => b.isActive === true);

      // Step 2: Fetch book info for each borrowing
      let enriched = await Promise.all(
        borrowings.map(async (borrowing) => {
          try {
            let bookResponse = await axios.get(`http://35.158.197.224/api/book/${borrowing.bookId}`);
            let book = bookResponse.data.data;

            return {
              code: borrowing.code,
              bookId: borrowing.bookId,
              bookName: book.name,
              imageUrl: book.imageUrl, // or book.imagePath depending on your API
            };
          } catch (err) {
            console.error(`Error loading book ${borrowing.bookId}`, err);
            return null;
          }
        })
      );

      console.log(enriched);

      // Step 3: Remove any failed/null fetches
      this.borrowings = enriched.filter(b => b !== null);

    } catch (error) {
      console.error("Error fetching borrowings or books:", error);
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
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.loan-code {
  font-weight: 500;
  color: #444;
  font-size: 1rem;
}

.loan-code span {
  color: #007bff;
}

.book-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}
</style>