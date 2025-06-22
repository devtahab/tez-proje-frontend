<template>
  <div class="user-page">
    <h1 class="user-title">👥 Kullanıcı Listesi</h1>

    <!-- 🔍 Arama -->
    <input
      v-model="searchQuery"
      class="search-input"
      type="text"
      placeholder="ID veya e-posta ile ara"
    />

    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else-if="filteredUsers.length === 0" class="empty">Kullanıcı bulunamadı.</div>

    <div class="user-list" v-else>
      <div
        class="user-card"
        v-for="user in paginatedUsers"
        :key="user.id"
      >
        <div><strong>Ad Soyad:</strong> {{ user.name }} {{ user.surname }}</div>
        <div><strong>Email:</strong> {{ user.email }}</div>
        <div><strong>Telefon:</strong> {{ user.phoneNumber }}</div>
        <div><strong>Kullanıcı ID:</strong> {{ user.id }}</div>
        <div><strong>Admin:</strong> {{ user.isAdmin ? '✅' : '❌' }}</div>
        <div><strong>Malformed:</strong> {{ user.isMalformed ? '✅' : '🚫' }}</div>
      </div>
    </div>

    <div class="pagination">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">⏮</button>
        <span>Sayfa {{ currentPage }} / {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">⏭</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: true,
      searchQuery: '',
      currentPage: 1,
      pageSize: 15
    };
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user =>
        user.email.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query)
      );
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredUsers.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.pageSize);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
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
      const response = await axios.get('http://35.158.197.224/api/auth/get-user-list');
      this.users = response.data.data;
    } catch (err) {
      console.error("Kullanıcılar alınamadı:", err);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.user-page {
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.user-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.search-input {
  display: block;
  margin: 0 auto 1.5rem auto;
  padding: 0.5rem;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.loading,
.empty {
  text-align: center;
  font-size: 1.1rem;
  color: #777;
  margin-top: 2rem;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.user-card {
  background-color: #fff;
  color: black;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.user-card:hover {
  transform: scale(1.02);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
