<template>
  <div class="reservation-page">
    <h1 class="reservation-title">📌 Tüm Aktif Rezervasyonlar</h1>

    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="reservations.length === 0" class="empty">Aktif rezervasyon bulunmamaktadır.</div>

    <div class="reservation-list" v-else>
      <div class="reservation-card" v-for="reservation in reservations" :key="reservation.id">
        <!-- Masa / Sandalye Bilgisi -->
        <div class="seat-info">Masa Sandalye No: <span>{{ reservation.seat.seatNumber }}</span></div>
        
        <!-- Başlangıç / Bitiş Zamanı -->
        <div class="time-info">
          {{ formatDateTimeUTC(reservation.startTime) }} - {{ formatDateTimeUTC(reservation.endTime) }}
        </div>

        <!-- Rezervasyon İptal Butonu -->
        <button class="cancel-btn" @click="cancelReservation(reservation.id)">Rezervasyonu İptal Et</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'UserReservations',
  data() {
    return {
      reservations: [],
      loading: true,
    };
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
      let userId = jwtDecode(this.$store.state.token).Id;

      let response = await axios.get(`http://35.158.197.224/api/reservation/get-active-reservations`);

      console.log(response.data.data);

      // Sadece aktif rezervasyonları filtrele
      this.reservations = response.data.data;
    } catch (err) {
      console.error("Rezervasyonlar alınamadı:", err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDateTimeUTC(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleString('tr-TR', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'Europe/Istanbul'
    });
  }
    ,
    async cancelReservation(reservationId) {
      try {
        console.log(jwtDecode(this.$store.state.token).Id);
        console.log(reservationId);
        await axios.post(`http://35.158.197.224/api/reservation/end-reservation-early`, {
          userId: jwtDecode(this.$store.state.token).Id,
          reservationId: reservationId
        });
        alert("Rezervasyon iptal edildi.");
        this.$router.go(0);
      } catch (err) {
        console.error("Rezervasyon iptal hatası:", err);
        alert("Rezervasyon iptal edilemedi.");
      }
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
  margin-bottom: 2rem;
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
  margin-bottom: 1rem;
}

.cancel-btn {
  background-color: #dc3545;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #c82333;
}
</style>
