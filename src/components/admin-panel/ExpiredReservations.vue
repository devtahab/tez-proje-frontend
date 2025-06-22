<template>
  <div class="reservation-page">
    <h1 class="reservation-title">📌 Tüm Geçmiş Rezervasyonlar</h1>

    <!-- Arama -->
    <input
      type="text"
      v-model="searchQuery"
      class="search-input"
      placeholder="Koltuk numarasına göre ara (örn: 25)"
    />

    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="filteredReservations.length === 0" class="empty">
      Herhangi bir sonuç bulunamadı.
    </div>

    <div class="reservation-list" v-else>
      <div
        class="reservation-card"
        v-for="reservation in paginatedReservations"
        :key="reservation.id"
      >
        <div class="seat-info">Masa Sandalye No: <span>{{ reservation.seat.seatNumber }}</span></div>
        <div class="time-info">
          {{ formatDateTimeUTC(reservation.startTime) }} - {{ formatDateTimeUTC(reservation.endTime) }}
        </div>
        <div class="user-info">Kullanıcı ID: <span>{{ reservation.appUserId }}</span></div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination" v-if="totalPages > 1">
      <button @click="currentPage--" :disabled="currentPage === 1">←</button>
      <span>Sayfa {{ currentPage }} / {{ totalPages }}</span>
      <button @click="currentPage++" :disabled="currentPage === totalPages">→</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserReservations',
  data() {
    return {
      reservations: [],
      loading: true,
      searchQuery: '',
      currentPage: 1,
      pageSize: 15,
    };
  },
  computed: {
    filteredReservations() {
      if (!this.searchQuery) return this.reservations;
      return this.reservations.filter(r =>
        r.seat.seatNumber.toString().includes(this.searchQuery)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredReservations.length / this.pageSize);
    },
    paginatedReservations() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredReservations.slice(start, start + this.pageSize);
    },
  },
  async created() {
    if(!this.$store.state.token){
      alert("Yorum yapmak için giriş yapmanız gerekiyor");
      this.$router.push('/giris-yap');
      return;
    }

    if(this.$store.state.userRole === "user"){
      this.$router.push('/');
      return;
    }

    try {
      const res = await axios.get(`http://35.158.197.224/api/reservation/get-expired-reservations`);
      this.reservations = res.data.data;
    } catch (err) {
      console.error("Rezervasyonlar alınamadı:", err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDateTimeUTC(dateStr) {
      const d = new Date(dateStr);
      d.setHours(d.getHours() - 3); // Türkiye saatine düzeltme
      return d.toLocaleString('tr-TR', {
        dateStyle: 'short',
        timeStyle: 'short',
      });
    }
  }
};
</script>

<style scoped>
.reservation-page {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.reservation-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.search-input {
  display: block;
  margin: 0 auto 1.5rem auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.loading,
.empty {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
}

.reservation-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.reservation-card {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
}

.seat-info {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: black;
}
.seat-info span {
  color: #007bff;
}

.time-info {
  color: #444;
  margin-bottom: 0.5rem;
}

.user-info {
  font-size: 0.9rem;
  color: #888;
}

.user-info span {
  font-weight: bold;
  color: #444;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.pagination button {
  padding: 0.4rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
