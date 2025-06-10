<template>
  <div class="signup-page">
    <div class="container">
      <h1 class="page-title">Kayıt Ol</h1>
      
      <div class="form-container">
        <form @submit.prevent="register" class="signup-form">
          <div class="form-group">
            <label for="name">Ad</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.name">{{ errors.name }}</div>
          </div>

          <div class="form-group">
            <label for="surname">Soyad</label>
            <input 
              type="text" 
              id="surname" 
              v-model="form.surname" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.surname">{{ errors.surname }}</div>
          </div>
          
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
          
          <div class="form-group">
            <label for="confirmPassword">Şifre Tekrar</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="form.confirmPassword" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
          </div>

          <div class="form-group">
            <label for="phone">Telefon</label>
            <input 
              type="tel"
              placeholder="1234 123 12 12"
              pattern="[0-9]{4} [0-9]{3} [0-9]{2} [0-9]{2}"
              id="phone" 
              v-model="form.phone" 
              class="form-input" 
              required
            />
            <div class="form-error" v-if="errors.phone">{{ errors.phone }}</div>
          </div>
          
          <div class="form-group">
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Kayıt Yapılıyor...' : 'Kayıt Ol' }}
            </button>
          </div>
          
          <div class="form-footer">
            Zaten hesabınız var mı? 
            <router-link to="/giris-yap" class="login-link">Giriş Yap</router-link>
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
  import axios from "axios";
  import { jwtDecode } from "jwt-decode";

export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      },
      errors: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
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
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      };
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Ad alanı zorunludur';
        isValid = false;
      }

      if (!this.form.surname.trim()) {
        this.errors.surname = 'Ad alanı zorunludur';
        isValid = false;
      }
      
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
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Şifre en az 6 karakter olmalıdır';
        isValid = false;
      }
      
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = 'Şifre tekrar alanı zorunludur';
        isValid = false;
      } else if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = 'Şifreler eşleşmiyor';
        isValid = false;
      }
      
      return isValid;
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async register() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        console.log(this.form);
        let response = await axios.post("http://35.158.197.224/api/auth/register", {
          name: this.form.name,
          surname: this.form.surname,
          email: this.form.email,
          phoneNumber: this.form.phone,
          password: this.form.password
        });

        console.log(response.data);

        this.failMessage = '';
        // Başarılı kayıt sonrası
        this.successMessage = 'Kayıt işlemi başarıyla tamamlandı! Giriş sayfasına yönlendiriliyorsunuz...';
        
        // Form temizleme
        this.form = {
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
        
        // Giriş sayfasına yönlendirme
        setTimeout(() => {
          this.$router.push('/giris-yap');
        }, 2000);
        
      } catch (error) {
        // Hata durumunda
        console.error('Kayıt hatası:', error);
        this.failMessage = 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.signup-page {
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

.signup-form {
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

.login-link {
  color: #2563EB;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.login-link:hover {
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