<template>
  <div class="login-page">
    <div class="container">
      <h1 class="page-title">Giriş Yap</h1>
      
      <div class="form-container">
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="email">E-posta</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.email">{{ errors.email }}</div>
          </div>
          
          <div class="form-group">
            <label for="password">Şifre</label>
            <input 
              type="password" 
              id="password" 
              v-model="form.password" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.password">{{ errors.password }}</div>
          </div>
          
          <div class="forgot-password">
            <router-link to="/forgot-password" class="forgot-password-link">Şifremi Unuttum</router-link>
          </div>
          
          <div class="form-group">
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap' }}
            </button>
          </div>
          
          <div class="form-footer">
            Hesabınız yok mu? 
            <router-link to="/kayit-ol" class="signup-link">Kayıt Ol</router-link>
          </div>
          
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>

          <div v-if="failMessage" class="fail-message">
            {{ failMessage }}
          </div>

        </form>
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
      form: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      isSubmitting: false,
      successMessage: '',
      failMessage: ''
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        email: '',
        password: ''
      };
      
      if (!this.form.email.trim()) {
        this.errors.email = 'E-posta alanı zorunludur';
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Geçerli bir e-posta adresi giriniz';
        isValid = false;
      }
      
      if (!this.form.password) {
        this.errors.password = 'Şifre alanı zorunludur';
        isValid = false;
      }
      
      return isValid;
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async login() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        console.log(this.form);
        let response = await axios.post("http://35.158.197.224/api/auth/login", {
          email: this.form.email,
          password: this.form.password
        });

        console.log(response.data);

        let token = response.data.data.token
        this.$store.commit('saveToken', token);
        console.log(jwtDecode(token));

        let responseTwo = await axios.get("http://35.158.197.224/api/auth/get-user-list");
        let user = responseTwo.data.data.find(u => u.id === jwtDecode(token).Id);
        console.log(user);
        this.$store.commit('saveUsername', `${user.name} ${user.surname}`);
        let userRole = user.isAdmin ? "admin" : "user";
        this.$store.commit('saveUserRole', userRole);

        this.failMessage = '';
        this.successMessage = 'Hoşgeldiniz!'

        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
        
      } catch (error) {
        // Hata durumunda
        console.error('Giriş hatası:', error);
        this.failMessage = 'E-posta veya şifre hatalı. Lütfen tekrar deneyin.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.login-page {
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

.form-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  color: #4B5563;
  font-weight: 500;
}

.form-input {
  padding: 0.8rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #4B5563;
}

.form-error {
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.forgot-password {
  text-align: right;
  margin-top: 0.5rem;
}

.forgot-password-link {
  color: #4B5563;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.forgot-password-link:hover {
  color: #1F2937;
  text-decoration: underline;
}

.submit-button {
  background-color: #1F2937;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  background-color: #111827;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.submit-button:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
  opacity: 0.7;
}

.form-footer {
  text-align: center;
  margin-top: 1rem;
  color: #4B5563;
}

.signup-link {
  color: #2563EB;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.signup-link:hover {
  color: #1D4ED8;
  text-decoration: underline;
}

.success-message {
  background-color: #D1FAE5;
  color: #065F46;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
}

.fail-message {
  background-color: #ff0000;
  color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .form-input, .submit-button {
    padding: 0.7rem 0.9rem;
  }
}
</style> 