// index.js

class MathOperations {
    // Method untuk penjumlahan dua angka
    static add(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
      }
      return a + b;
    }
  
    // Method untuk pengurangan dua angka
    static subtract(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
      }
      return a - b;
    }
  
    // Method untuk perkalian dua angka
    static multiply(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
      }
      return a * b;
    }
  
    // Method untuk pembagian dua angka dengan pengecekan pembagian oleh nol
    static divide(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
      }
      if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
      }
      return a / b;
    }
  }
  
  // Ekspor modul
module.exports = MathOperations;
  
