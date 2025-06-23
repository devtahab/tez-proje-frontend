<template>
  <div :class="lightsOff ? 'reservation-page-lightsoff' : 'reservation-page'">
    <h1 :class="lightsOff ? 'reservation-title-lightsoff' : 'reservation-title'">📌 Aktif Rezervasyonlarım</h1>

    <div v-if="loading" :class="lightsOff ? 'loading-lightsoff' : 'loading'">Yükleniyor...</div>
    <div v-else-if="reservations.length === 0" :class="lightsOff ? 'empty-lightsoff' : 'empty'">Aktif rezervasyonunuz bulunmamaktadır.</div>

    <div class="reservation-list" v-else>
      <div class="reservation-card" v-for="reservation in reservations" :key="reservation.id">
        <!-- Masa ve zaman bilgileri -->
        <div class="seat-info">Masa Sandalye No: <span>{{ reservation.seat.seatNumber }}</span></div>
        <div class="time-info">
          {{ formatDateTimeUTC(reservation.startTime) }} - {{ formatDateTimeUTC(reservation.endTime) }}
        </div>

        <!-- Butonlar -->
        <button
          :class="colorBlind ? 'cancel-btn-color' : 'cancel-btn'"
          @click="cancelReservation(reservation.id)"
        >
          Rezervasyonu İptal Et
        </button>

        <!-- Check-in kontrolü -->
        <div v-if="reservation.checkIn" :class="colorBlind ? 'checkin-info-lightsoff' : 'checkin-info'">
             Check-in yapıldı
        </div>

        <!-- QR Oluştur butonu -->
        <button
          v-else
          :class="colorBlind ? 'qr-btn-color' : 'qr-btn'"
          @click="generateQr(reservation.id)"
        >
          Qr Oluştur
        </button>

        <!-- QR kodu gösterimi (check-in olmayanlar için) -->
        <div v-if="qrCodes[reservation.id] && !reservation.checkIn" class="qr-code-wrapper">
          <img :src="qrCodes[reservation.id]" alt="QR Kodu" />
        </div>
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
      qrCodes: {} // Her reservationId için QR base64 saklanacak
    };
  },
  computed: {
    colorBlind() {
      return this.$store.state.colorBlindness;
    },
    lightsOff() {
      return this.$store.state.lightsOff;
    }
  },
  async created() {
    if(!this.$store.state.token){
      alert("Giriş yapmanız gerekiyor");
      this.$router.push('/giris-yap');
      return;
    }
    
    try {
      let userId = jwtDecode(this.$store.state.token).Id;

      let response = await axios.get(`http://35.158.197.224/api/reservation/get-reservations-by-user`, {
        headers: { appUserId: userId }
      });

      console.log(response.data.data);

      // Sadece aktif rezervasyonları filtrele
      this.reservations = response.data.data.filter(r => r.isActive === true);
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
  },
    async cancelReservation(reservationId) {
      try {
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
    },
    async generateQr(reservationId) {
      console.log(reservationId);
      try {
        const response = await axios.get(`http://35.158.197.224/api/reservation/generate-qr?reservationId=${reservationId}`);
        console.log(response);
        // Eğer response.data.base64 olarak geliyorsa:
        const base64 = response.data.data; // <-- Buradan QR verisi alınıyor

        this.qrCodes[reservationId] = `data:image/png;base64,${base64}`;
      } catch (err) {
        console.error("QR kod oluşturulamadı:", err);
        alert("QR kod oluşturulurken hata oluştu.");
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

.reservation-page-lightsoff {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #343a40;
  min-height: 100vh;
}

.reservation-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.reservation-title-lightsoff {
  text-align: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
}

.loading,
.empty {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
}

.loading-lightsoff,
.empty-lightsoff {
  text-align: center;
  font-size: 1.1rem;
  color: white;
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

.cancel-btn-color {
  background-color: darkorange;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #c82333;
}

.cancel-btn-color:hover {
  background-color: orange;
}

.qr-btn {
  display: block;
  margin: 10px auto 0;
  background-color: green;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.qr-btn-color {
  display: block;
  margin: 10px auto 0;
  background-color: blue;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.qr-btn:hover {
  background-color: rgb(12, 190, 12);
}

.qr-btn-color:hover {
  background-color: darkblue;
}

.qr-code-wrapper {
  margin-top: 1rem;
  text-align: center;
}

.qr-code-wrapper img {
  max-width: 150px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.checkin-info {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}

.checkin-info-lightsoff {
  margin-top: 10px;
  color: blue;
  font-weight: bold;
}


</style>
