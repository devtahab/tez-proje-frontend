<template>
  <div class="library-floor-plan">
    <h2 class="library-title">Kütüphane Rezervasyon Sistemi</h2>
    
    <div class="floor-container">
      <!-- Sol Taraf -->
      <div class="left-section">
        <!-- Sol En Üst Uzun Masa -->
        <div 
          class="rectangular-table left-table" 
          :class="{ 'selected': selectedTableName === 'Masa 1' }"
          @click="selectTable('Masa 1', 0)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <!-- Masa Üstü -->
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <!-- Gölge -->
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <!-- Masa Ayakları -->
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <!-- Sandalyeler -->
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">1</div>
        </div>

        <!-- Sol Üst Uzun Masa -->
        <div 
          class="rectangular-table left-table" 
          :class="{ 'selected': selectedTableName === 'Masa 2' }"
          @click="selectTable('Masa 2', 1)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">2</div>
        </div>

        <!-- Sol Yuvarlak Masalar -->
        <div class="round-tables-row">
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 9' }"
            @click="selectTable('Masa 9', 8)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <!-- Masa Üstü -->
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <!-- Gölge -->
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <!-- Masa Ayağı -->
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <!-- Sandalyeler -->
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">9</div>
          </div>
          
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 10' }"
            @click="selectTable('Masa 10', 9)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">10</div>
          </div>
          
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 11' }"
            @click="selectTable('Masa 11', 10)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">11</div>
          </div>
        </div>

        <!-- Sol Alt Uzun Masa -->
        <div 
          class="rectangular-table left-table" 
          :class="{ 'selected': selectedTableName === 'Masa 3' }"
          @click="selectTable('Masa 3', 2)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">3</div>
        </div>

        <!-- Sol En Alt Uzun Masa -->
        <div 
          class="rectangular-table left-table" 
          :class="{ 'selected': selectedTableName === 'Masa 4' }"
          @click="selectTable('Masa 4', 3)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">4</div>
        </div>
      </div>

      <!-- Merkez Kitaplık -->
      <div class="bookshelf" @click="goToBooks">
        <div class="bookshelf-frame">
          <svg viewBox="0 0 80 500" xmlns="http://www.w3.org/2000/svg">
            <!-- Kitaplık Çerçevesi -->
            <rect x="5" y="10" width="70" height="480" fill="#8B4513" stroke="#654321" stroke-width="2" rx="5"/>
            <rect x="8" y="13" width="64" height="474" fill="#DEB887" opacity="0.3"/>
            
            <!-- Raf Plankaları -->
            <rect x="8" y="60" width="64" height="4" fill="#654321"/>
            <rect x="8" y="120" width="64" height="4" fill="#654321"/>
            <rect x="8" y="180" width="64" height="4" fill="#654321"/>
            <rect x="8" y="240" width="64" height="4" fill="#654321"/>
            <rect x="8" y="300" width="64" height="4" fill="#654321"/>
            <rect x="8" y="360" width="64" height="4" fill="#654321"/>
            <rect x="8" y="420" width="64" height="4" fill="#654321"/>
            
            <!-- Üst Raf Kitapları -->
            <rect x="12" y="20" width="4" height="35" fill="#FF6B6B" rx="1"/>
            <rect x="17" y="18" width="4" height="37" fill="#4ECDC4" rx="1"/>
            <rect x="22" y="22" width="4" height="33" fill="#45B7D1" rx="1"/>
            <rect x="27" y="20" width="4" height="35" fill="#FFA07A" rx="1"/>
            <rect x="32" y="19" width="4" height="36" fill="#98D8C8" rx="1"/>
            <rect x="37" y="21" width="4" height="34" fill="#F7DC6F" rx="1"/>
            <rect x="42" y="18" width="4" height="37" fill="#BB8FCE" rx="1"/>
            <rect x="47" y="20" width="4" height="35" fill="#F8C471" rx="1"/>
            <rect x="52" y="22" width="4" height="33" fill="#85C1E9" rx="1"/>
            <rect x="57" y="19" width="4" height="36" fill="#82E0AA" rx="1"/>
            <rect x="62" y="21" width="4" height="34" fill="#F1948A" rx="1"/>
            
            <!-- İkinci Raf Kitapları -->
            <rect x="12" y="80" width="4" height="35" fill="#E8743B" rx="1"/>
            <rect x="17" y="78" width="4" height="37" fill="#19A979" rx="1"/>
            <rect x="22" y="82" width="4" height="33" fill="#4A69BD" rx="1"/>
            <rect x="27" y="80" width="4" height="35" fill="#F39C12" rx="1"/>
            <rect x="32" y="79" width="4" height="36" fill="#1ABC9C" rx="1"/>
            <rect x="37" y="81" width="4" height="34" fill="#F4D03F" rx="1"/>
            <rect x="42" y="78" width="4" height="37" fill="#AF7AC5" rx="1"/>
            <rect x="47" y="80" width="4" height="35" fill="#EB984E" rx="1"/>
            <rect x="52" y="82" width="4" height="33" fill="#7FB3D3" rx="1"/>
            <rect x="57" y="79" width="4" height="36" fill="#7DCEA0" rx="1"/>
            <rect x="62" y="81" width="4" height="34" fill="#EC7063" rx="1"/>
            
            <!-- Üçüncü Raf Kitapları -->
            <rect x="12" y="140" width="4" height="35" fill="#D35400" rx="1"/>
            <rect x="17" y="138" width="4" height="37" fill="#148F77" rx="1"/>
            <rect x="22" y="142" width="4" height="33" fill="#2E4057" rx="1"/>
            <rect x="27" y="140" width="4" height="35" fill="#D68910" rx="1"/>
            <rect x="32" y="139" width="4" height="36" fill="#138D75" rx="1"/>
            <rect x="37" y="141" width="4" height="34" fill="#F1C40F" rx="1"/>
            <rect x="42" y="138" width="4" height="37" fill="#9B59B6" rx="1"/>
            <rect x="47" y="140" width="4" height="35" fill="#E67E22" rx="1"/>
            <rect x="52" y="142" width="4" height="33" fill="#3498DB" rx="1"/>
            <rect x="57" y="139" width="4" height="36" fill="#27AE60" rx="1"/>
            <rect x="62" y="141" width="4" height="34" fill="#E74C3C" rx="1"/>
            
            <!-- Dördüncü Raf Kitapları -->
            <rect x="12" y="200" width="4" height="35" fill="#A04000" rx="1"/>
            <rect x="17" y="198" width="4" height="37" fill="#0E6655" rx="1"/>
            <rect x="22" y="202" width="4" height="33" fill="#1B2631" rx="1"/>
            <rect x="27" y="200" width="4" height="35" fill="#B7950B" rx="1"/>
            <rect x="32" y="199" width="4" height="36" fill="#0E6251" rx="1"/>
            <rect x="37" y="201" width="4" height="34" fill="#D4AC0D" rx="1"/>
            <rect x="42" y="198" width="4" height="37" fill="#7D3C98" rx="1"/>
            <rect x="47" y="200" width="4" height="35" fill="#CA6F1E" rx="1"/>
            <rect x="52" y="202" width="4" height="33" fill="#2874A6" rx="1"/>
            <rect x="57" y="199" width="4" height="36" fill="#1E8449" rx="1"/>
            <rect x="62" y="201" width="4" height="34" fill="#CB4335" rx="1"/>
            
            <!-- Beşinci Raf Kitapları -->
            <rect x="12" y="260" width="4" height="35" fill="#922B21" rx="1"/>
            <rect x="17" y="258" width="4" height="37" fill="#0B5345" rx="1"/>
            <rect x="22" y="262" width="4" height="33" fill="#154360" rx="1"/>
            <rect x="27" y="260" width="4" height="35" fill="#9A7D0A" rx="1"/>
            <rect x="32" y="259" width="4" height="36" fill="#0A5132" rx="1"/>
            <rect x="37" y="261" width="4" height="34" fill="#B7950B" rx="1"/>
            <rect x="42" y="258" width="4" height="37" fill="#6C3483" rx="1"/>
            <rect x="47" y="260" width="4" height="35" fill="#A04000" rx="1"/>
            <rect x="52" y="262" width="4" height="33" fill="#1F618D" rx="1"/>
            <rect x="57" y="259" width="4" height="36" fill="#186A3B" rx="1"/>
            <rect x="62" y="261" width="4" height="34" fill="#A93226" rx="1"/>
            
            <!-- Altıncı Raf Kitapları -->
            <rect x="12" y="320" width="4" height="35" fill="#7E2A14" rx="1"/>
            <rect x="17" y="318" width="4" height="37" fill="#0D5A32" rx="1"/>
            <rect x="22" y="322" width="4" height="33" fill="#1C2833" rx="1"/>
            <rect x="27" y="320" width="4" height="35" fill="#7D6608" rx="1"/>
            <rect x="32" y="319" width="4" height="36" fill="#094A2B" rx="1"/>
            <rect x="37" y="321" width="4" height="34" fill="#9A7D0A" rx="1"/>
            <rect x="42" y="318" width="4" height="37" fill="#5B2C6F" rx="1"/>
            <rect x="47" y="320" width="4" height="35" fill="#873600" rx="1"/>
            <rect x="52" y="322" width="4" height="33" fill="#1A5276" rx="1"/>
            <rect x="57" y="319" width="4" height="36" fill="#145A32" rx="1"/>
            <rect x="62" y="321" width="4" height="34" fill="#922B21" rx="1"/>
            
            <!-- Yedinci Raf Kitapları -->
            <rect x="12" y="380" width="4" height="35" fill="#641E16" rx="1"/>
            <rect x="17" y="378" width="4" height="37" fill="#0C4B27" rx="1"/>
            <rect x="22" y="382" width="4" height="33" fill="#17202A" rx="1"/>
            <rect x="27" y="380" width="4" height="35" fill="#6B5B0F" rx="1"/>
            <rect x="32" y="379" width="4" height="36" fill="#0D5A3D" rx="1"/>
            <rect x="37" y="381" width="4" height="34" fill="#7D6608" rx="1"/>
            <rect x="42" y="378" width="4" height="37" fill="#4A235A" rx="1"/>
            <rect x="47" y="380" width="4" height="35" fill="#6E2C00" rx="1"/>
            <rect x="52" y="382" width="4" height="33" fill="#154360" rx="1"/>
            <rect x="57" y="379" width="4" height="36" fill="#0E4B27" rx="1"/>
            <rect x="62" y="381" width="4" height="34" fill="#7B241C" rx="1"/>
            
            <!-- Alt Raf Kitapları -->
            <rect x="12" y="440" width="4" height="35" fill="#5D1A13" rx="1"/>
            <rect x="17" y="438" width="4" height="37" fill="#0B3D1F" rx="1"/>
            <rect x="22" y="442" width="4" height="33" fill="#131921" rx="1"/>
            <rect x="27" y="440" width="4" height="35" fill="#5D4E0C" rx="1"/>
            <rect x="32" y="439" width="4" height="36" fill="#0A4A32" rx="1"/>
            <rect x="37" y="441" width="4" height="34" fill="#6B5B0F" rx="1"/>
            <rect x="42" y="438" width="4" height="37" fill="#3F1A4B" rx="1"/>
            <rect x="47" y="440" width="4" height="35" fill="#5D2200" rx="1"/>
            <rect x="52" y="442" width="4" height="33" fill="#0F3A5C" rx="1"/>
            <rect x="57" y="439" width="4" height="36" fill="#0B3D1F" rx="1"/>
            <rect x="62" y="441" width="4" height="34" fill="#641E16" rx="1"/>
            
            <!-- Kitaplık Gölgesi -->
            <rect x="75" y="15" width="3" height="480" fill="#000000" opacity="0.2" rx="2"/>
          </svg>
        </div>
        <div class="bookshelf-label">📚 KİTAPLIK</div>
        <div class="bookshelf-click-hint">Tıklayın</div>
      </div>

      <!-- Sağ Taraf -->
      <div class="right-section">
        <!-- Sağ En Üst Uzun Masa -->
        <div 
          class="rectangular-table right-table" 
          :class="{ 'selected': selectedTableName === 'Masa 5' }"
          @click="selectTable('Masa 5', 4)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">5</div>
        </div>

        <!-- Sağ Üst Uzun Masa -->
        <div 
          class="rectangular-table right-table" 
          :class="{ 'selected': selectedTableName === 'Masa 6' }"
          @click="selectTable('Masa 6', 5)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">6</div>
        </div>

        <!-- Sağ Yuvarlak Masalar -->
        <div class="round-tables-row">
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 12' }"
            @click="selectTable('Masa 12', 11)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">12</div>
          </div>
          
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 13' }"
            @click="selectTable('Masa 13', 12)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">13</div>
          </div>
          
          <div 
            class="round-table" 
            :class="{ 'selected': selectedTableName === 'Masa 14' }"
            @click="selectTable('Masa 14', 13)"
          >
            <svg class="table-icon round-icon" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#8B4513" stroke="#654321" stroke-width="2"/>
              <circle cx="42" cy="42" r="30" fill="#A0522D" opacity="0.6"/>
              <circle cx="40" cy="40" r="8" fill="#654321"/>
              <circle cx="40" cy="15" r="4" fill="#4A4A4A"/>
              <circle cx="65" cy="40" r="4" fill="#4A4A4A"/>
              <circle cx="40" cy="65" r="4" fill="#4A4A4A"/>
              <circle cx="15" cy="40" r="4" fill="#4A4A4A"/>
            </svg>
            <img src="/images/engelli-logo.png" class="accessibility-icon" alt="Engelli Masa" />
            <div class="table-label">14</div>
          </div>
        </div>

        <!-- Sağ Alt Uzun Masa -->
        <div 
          class="rectangular-table right-table" 
          :class="{ 'selected': selectedTableName === 'Masa 7' }"
          @click="selectTable('Masa 7', 6)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">7</div>
        </div>

        <!-- Sağ En Alt Uzun Masa -->
        <div 
          class="rectangular-table right-table" 
          :class="{ 'selected': selectedTableName === 'Masa 8' }"
          @click="selectTable('Masa 8', 7)"
        >
          <svg class="table-icon rectangular-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="20" width="90" height="25" rx="3" fill="#8B4513" stroke="#654321" stroke-width="1"/>
            <rect x="7" y="22" width="90" height="25" rx="3" fill="#A0522D" opacity="0.7"/>
            <rect x="10" y="45" width="4" height="12" fill="#654321"/>
            <rect x="86" y="45" width="4" height="12" fill="#654321"/>
            <circle cx="20" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="12" r="3" fill="#4A4A4A"/>
            <circle cx="20" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="35" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="50" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="65" cy="52" r="3" fill="#4A4A4A"/>
            <circle cx="80" cy="52" r="3" fill="#4A4A4A"/>
          </svg>
          <div class="table-label">8</div>
        </div>
      </div>
    </div>

    <!-- Rezervasyon Modal -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>🪑 {{ selectedTableName }} - Sandalye Seçimi</h3>
          <button class="close-btn" @click="closeModal">✕</button>
        </div>
        
        <div class="modal-body">
          <div class="table-view">
            <!-- Dikdörtgen Masa Görünümü -->
            <div v-if="isRectangularTable" class="rectangular-table-modal">
              
              <!-- Üst Taraf Sandalyeler (1-8) -->
              <div class="chair-row top-row">
                <div 
                  v-for="i in 3" 
                  class="chair-seat"
                  :class="{ 
                    'occupied': seats[i - 1].isReserved === true,
                    'selected': selectedChair === (tableNum * 8) + i,
                    'available': seats[i - 1].isReserved === false
                  }"
                  @click="toggleChair((tableNum * 8) + i)"
                  >
                  {{ (tableNum * 8) + i }}
                </div>
              </div>
              
              <!-- Sol ve Sağ Taraf Sandalyeler -->
              <div class="middle-section">
                <!-- Sol Taraf Sandalyeler (9-10) -->
                <div class="chair-column left-column">
                  <div 
                    v-for="i in 1" 
                    class="chair-seat"
                    :class="{ 
                    'occupied': seats[i - 1].isReserved === true,
                    'selected': selectedChair === (tableNum * 8) + i + 3,
                    'available': seats[i - 1].isReserved === false
                    }"
                    @click="toggleChair((tableNum * 8) + i + 3)"
                    >
                    {{ (tableNum * 8) + i + 3 }}
                  </div>
                </div>
                
                <!-- Masa (Orta) -->
                <div class="table-center">
                  <div class="table-surface-center">
                    <span class="table-number-center">{{ selectedTableName }}</span>
                  </div>
                </div>
                
                <!-- Sağ Taraf Sandalyeler (11-12) -->
                <div class="chair-column right-column">
                  <div 
                    v-for="i in 1" 
                    class="chair-seat"
                    :class="{ 
                    'occupied': seats[i - 1].isReserved === true,
                    'selected': selectedChair === (tableNum * 8) + i + 4,
                    'available': seats[i - 1].isReserved === false
                    }"
                    @click="toggleChair((tableNum * 8) + i + 4)"
                    >
                    {{ (tableNum * 8) + i + 4 }}
                  </div>
                </div>
              </div>
              
              <!-- Alt Taraf Sandalyeler (13-20) -->
              <div class="chair-row bottom-row">
                <div 
                  v-for="i in 3" 
                  class="chair-seat"
                  :class="{ 
                    'occupied': seats[i - 1].isReserved === true,
                    'selected': selectedChair === (tableNum * 8) + i + 5,
                    'available': seats[i - 1].isReserved === false
                  }"
                  @click="toggleChair((tableNum * 8) + i + 5)"
                  >
                  {{ (tableNum * 8) + i + 5 }}
                </div>
              </div>
            </div>
            
            <!-- Yuvarlak Masa Görünümü -->
            <div v-else class="round-table-modal">
              <div class="table-surface-round">
                <span class="table-number">{{ selectedTableName }}</span>
                <!-- Sandalyeler Çember Halinde (1-10) -->
                <div 
                  v-for="i in 4" 
                  class="chair-seat round-chair"
                  :class="{ 
                    'occupied': seats[i - 1].isReserved === true,
                    'selected': selectedChair === (tableNum * 8) - (4 * (tableNum - 8)) + i,
                    'available': seats[i - 1].isReserved === false
                  }"
                  :style="getChairPosition(i - 1)"
                  @click="toggleChair((tableNum * 8) - (4 * (tableNum - 8)) + i)"
                  >
                  {{ (tableNum * 8) - (4 * (tableNum - 8)) + i }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="selected-chair-info" v-if="selectedChair">
            <h4 class="weird-header">Seçilen Sandalye:</h4>
            <div class="selected-list">
              <span class="selected-chair-tag"> {{ selectedChair }}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="cancel-modal-btn" @click="closeModal">İptal</button>
          <button 
            class="confirm-btn" 
            @click="confirmReservation"
            :disabled="selectedChair === null"
          >
            Rezervasyonu Onayla
          </button>
        </div>
      </div>
    </div>

    <div class="modal-overlay" v-if="showDurationModal" @click="showDurationModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>⏱ Süre Seçimi</h3>
          <button class="close-btn" @click="showDurationModal = false">✕</button>
        </div>
        <div class="modal-body">
          <p>Lütfen rezervasyon süresini seçin:</p>
          <div class="duration-options">
            <button 
              v-for="hour in [1, 2, 3, 4, 5]" 
              :key="hour" 
              @click="selectedDuration = hour"
              :class="{ 'selected-duration': selectedDuration === hour }"
            >
              {{ hour }} saat
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-modal-btn" @click="showDurationModal = false">İptal</button>
          <button 
            class="confirm-btn" 
            :disabled="!selectedDuration" 
            @click="finalizeReservation"
          >
            Onayla
          </button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import { jwtDecode } from 'jwt-decode';

export default {
  name: 'LibraryReservation',
  data() {
    return {
      selectedTableName: '',
      tableNum: 0,
      showModal: false,
      selectedChair: null,
      chairStatus: null, // 'available', 'occupied'
      seats: [],
      showDurationModal: false,     // Süre seçimi modalı
      selectedDuration: null        // Seçilen süre
    }
  },
  computed: {
    isRectangularTable() {
      // Masa 1, 2, 3, 4, 5, 6, 7, 8 dikdörtgen masalar
      const rectangularTables = ['Masa 1', 'Masa 2', 'Masa 3', 'Masa 4', 'Masa 5', 'Masa 6', 'Masa 7', 'Masa 8'];
      return this.selectedTableName && rectangularTables.includes(this.selectedTableName);
    }
  },
  methods: {
    selectTable(tableName, tableNum) {
      this.selectedTableName = tableName;
      this.tableNum = tableNum;
      this.openModal();
    },
    clearSelection() {
      this.selectedTableName = '';
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedChair = null;
      this.clearSelection();
    },
    toggleChair(seatNumber) {
      if (this.seats[seatNumber - 1].isReserved === true) return;
      this.selectedChair = seatNumber;
    },
    getChairPosition(index) {
      const angle = (index * 90) * (Math.PI / 180); // 4 sandalye = 360°/4 = 90°
      const radius = 120;
      const centerX = 150;
      const centerY = 150;
      
      const x = centerX + radius * Math.cos(angle) - 20;
      const y = centerY + radius * Math.sin(angle) - 20;
      
      return {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px'
      };
    },
    confirmReservation() {
      if (this.selectedChair === null) return;
      // console.log(this.seats[this.selectedChair - 1]);
      this.showDurationModal = true;
    },
    async finalizeReservation(){
      if (!this.selectedDuration) return;
      let seat = this.seats[this.selectedChair - 1];

      console.log(jwtDecode(this.$store.state.token).Id);
      console.log(seat.id);
      console.log(this.selectedDuration);

      let response = await axios.post("http://35.158.197.224/api/reservation/reserve-seat-with-transaction", {
        appUserId: jwtDecode(this.$store.state.token).Id,
        seatId: seat.id,
        duration: this.selectedDuration
      })

      console.log(response);

      alert(`✅ ${this.selectedTableName} için ${this.selectedChair} numaralı sandalye ${this.selectedDuration} saatliğine rezerve edildi!`);

      // Kapat ve sıfırla
      this.showDurationModal = false;
      this.showModal = false;
      this.selectedChair = null;
      this.selectedDuration = null;
      this.clearSelection();
    },
    getTableCapacity() {
      // Dikdörtgen masalar 8 kişilik, yuvarlak masalar 4 kişilik
      if (this.isRectangularTable) {
        return 8; // Dikdörtgen masalar 8 kişilik
      } else {
        return 4; // Yuvarlak masalar 4 kişilik
      }
    },
    goToBooks() {
      this.$router.push('/kitaplar');
    },
    async getSeats(){
      let response = await axios.get("http://35.158.197.224/api/seat/get-seat-list");
      let sortedSeats = response.data.data.sort((a, b) => parseInt(a.seatNumber) - parseInt(b.seatNumber));
      console.log(response.data.data);
      this.seats = sortedSeats;
      console.log(this.seats);
    }
  },
  mounted(){
      this.getSeats();
  }
}
</script>

<style scoped>
.library-floor-plan {
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.library-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.floor-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  background: #ffffff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.left-section, .right-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.bookshelf {
  width: 140px;
  height: 550px;
  background: linear-gradient(145deg, #8B4513, #A0522D);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 15px 30px rgba(139, 69, 19, 0.4);
  overflow: hidden;
  border: 3px solid #654321;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bookshelf:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(139, 69, 19, 0.6);
  border-color: #8B4513;
}

.bookshelf-frame {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  transition: all 0.3s ease;
}

.bookshelf:hover .bookshelf-frame {
  filter: brightness(1.1);
}

.bookshelf-label {
  position: absolute;
  top: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #FFF;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  z-index: 2;
  background: rgba(139, 69, 19, 0.8);
  padding: 5px 10px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.bookshelf-click-hint {
  position: absolute;
  bottom: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
  z-index: 2;
  background: rgba(52, 73, 94, 0.8);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.bookshelf:hover .bookshelf-click-hint {
  opacity: 1;
  background: rgba(52, 73, 94, 0.9);
  transform: translateY(-2px);
}

/* Pulse animasyonu kitaplık için */
@keyframes bookshelf-pulse {
  0% { box-shadow: 0 15px 30px rgba(139, 69, 19, 0.4); }
  50% { box-shadow: 0 20px 40px rgba(139, 69, 19, 0.6); }
  100% { box-shadow: 0 15px 30px rgba(139, 69, 19, 0.4); }
}

.bookshelf:hover {
  animation: bookshelf-pulse 2s infinite;
}

.rectangular-table {
  width: 220px;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: linear-gradient(145deg, #f8f9fa, #e9ecef);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.rectangular-table:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.rectangular-table.selected {
  background: linear-gradient(145deg, #fff5f5, #fed7d7);
  box-shadow: 0 0 25px rgba(231, 76, 60, 0.5);
  transform: translateY(-8px) scale(1.05);
}

.round-table {
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #f8f9fa, #e9ecef);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.round-table:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

.round-table.selected {
  background: linear-gradient(145deg, #fff5f5, #fed7d7);
  box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);
  transform: translateY(-5px) scale(1.1);
}

.round-tables-row {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.table-icon {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.rectangular-icon {
  width: 180px;
  height: 70px;
}

.round-icon {
  width: 90px;
  height: 90px;
}

.accessibility-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  padding: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.table-label {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #2c3e50;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.9);
  padding: 4px 8px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

/* SVG Animasyonları */
.rectangular-table:hover .table-icon,
.round-table:hover .table-icon {
  filter: brightness(1.1);
}

.rectangular-table.selected .table-icon rect[fill="#8B4513"],
.round-table.selected .table-icon circle[fill="#8B4513"] {
  fill: #e74c3c;
}

.rectangular-table.selected .table-icon rect[fill="#A0522D"],
.round-table.selected .table-icon circle[fill="#A0522D"] {
  fill: #c0392b;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .floor-container {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  
  .bookshelf {
    width: 250px;
    height: 80px;
    flex-direction: row;
  }
  
  .bookshelf-label {
    writing-mode: initial;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  
  .bookshelf-click-hint {
    bottom: 50%;
    right: 20px;
    transform: translateY(50%);
  }
  
  .round-tables-row {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .rectangular-table {
    width: 180px;
    height: 80px;
  }
  
  .round-table {
    width: 70px;
    height: 70px;
  }
}

/* Pulse animasyonu seçili masalar için */
@keyframes pulse {
  0% { box-shadow: 0 0 20px rgba(231, 76, 60, 0.5); }
  50% { box-shadow: 0 0 30px rgba(231, 76, 60, 0.8); }
  100% { box-shadow: 0 0 20px rgba(231, 76, 60, 0.5); }
}

.rectangular-table.selected,
.round-table.selected {
  animation: pulse 2s infinite;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  padding: 0;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.modal-header {
  background: linear-gradient(145deg, #2c3e50, #34495e);
  color: white;
  padding: 1.5rem;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
}

.table-view {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

/* Dikdörtgen Masa Modal */
.rectangular-table-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.chair-row {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.top-row {
  margin-bottom: 1rem;
}

.bottom-row {
  margin-top: 1rem;
}

.middle-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
}

.chair-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.left-column {
  align-items: flex-end;
}

.right-column {
  align-items: flex-start;
}

.table-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-surface-center {
  width: 280px;
  height: 100px;
  background: linear-gradient(145deg, #8B4513, #A0522D);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 12px rgba(139, 69, 19, 0.3);
  border: 2px solid #654321;
}

.table-number-center {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Yuvarlak Masa Modal */
.round-table-modal {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-surface-round {
  width: 300px;
  height: 300px;
  background: linear-gradient(145deg, #8B4513, #A0522D);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(139, 69, 19, 0.3);
  border: 3px solid #654321;
  position: relative;
}

/* Sandalye Stilleri */
.chair-seat {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(145deg, #bdc3c7, #95a5a6);
  color: #2c3e50;
}

.chair-seat.available {
  background: linear-gradient(145deg, #27ae60, #2ecc71);
  color: white;
}

.chair-seat.available:hover {
  background: linear-gradient(145deg, #229954, #27ae60);
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 6px 12px rgba(39, 174, 96, 0.4);
}

.chair-seat.occupied {
  background: linear-gradient(145deg, #e74c3c, #c0392b);
  color: white;
  cursor: not-allowed;
  opacity: 0.7;
}

.chair-seat.selected {
  color: white;
  outline: 3px solid black;
  transform: translateY(-2px) scale(1.1);
}

.round-chair {
  border-radius: 50%;
}

/* Legend */
.chair-legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #2c3e50;
}

.legend-chair {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
}

.legend-chair.available {
  background: linear-gradient(145deg, #27ae60, #2ecc71);
}

.legend-chair.occupied {
  background: linear-gradient(145deg, #e74c3c, #c0392b);
}

.legend-chair.selected {
  background: linear-gradient(145deg, #f39c12, #e67e22);
}

/* Seçilen Sandalyeler */
.selected-chairs-info {
  background: linear-gradient(145deg, #ecf0f1, #bdc3c7);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.selected-chairs-info h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.weird-header{
  color: black;
}

.selected-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.selected-chair-tag {
  background: linear-gradient(145deg, #27ae60, #2ecc71);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(243, 156, 18, 0.3);
}

/* Modal Footer */
.modal-footer {
  background: linear-gradient(145deg, #ecf0f1, #bdc3c7);
  padding: 1.5rem;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.cancel-modal-btn, .confirm-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.cancel-modal-btn {
  background: red;
  color: white;
}

.cancel-modal-btn:hover {
  background: linear-gradient(145deg, #7f8c8d, #95a5a6);
  transform: translateY(-2px);
}

.confirm-btn {
  background: linear-gradient(145deg, #27ae60, #2ecc71);
  color: white;
  flex: 1;
}

.confirm-btn:hover {
  background: linear-gradient(145deg, #229954, #27ae60);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
}

.confirm-btn:disabled {
  background: linear-gradient(145deg, #95a5a6, #bdc3c7);
  color: #7f8c8d;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive Modal */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    margin: 1rem;
  }
  
  .table-surface-center {
    width: 220px;
    height: 80px;
  }
  
  .table-surface-round {
    width: 250px;
    height: 250px;
  }
  
  .chair-row {
    gap: 0.3rem;
  }
  
  .chair-column {
    gap: 0.3rem;
  }
  
  .middle-section {
    gap: 1rem;
  }
  
  .chair-seat {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
  
  .chair-legend {
    gap: 1rem;
  }
  
  .modal-footer {
    flex-direction: column;
  }
  
  .table-number-center {
    font-size: 1.4rem;
  }
}

.table-number {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.duration-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.duration-options button {
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: 0.2s;
}

.duration-options button:hover {
  border-color: #007bff;
}

.duration-options .selected-duration {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

</style>