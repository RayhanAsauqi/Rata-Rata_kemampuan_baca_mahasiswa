# Mahasiswa Reading Ability Analysis

## Deskripsi Program

Program ini bertujuan untuk menghitung beberapa metrik terkait kemampuan membaca mahasiswa, seperti persentase pemahaman (dari jawaban benar) dan kecepatan membaca dalam KPM (Kata per Menit). Hasil akhirnya mencakup rata-rata persentase pemahaman, rata-rata KPM, dan rata-rata kemampuan baca untuk sampel mahasiswa yang diberikan.

## Struktur Proyek

- `lib.js`: File ini mengandung data mahasiswa yang akan digunakan dalam perhitungan.
- `main.js`: File utama yang mengandung logika program untuk menghitung metrik-metrik yang diinginkan.

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/mahasiswa-reading-analysis.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd mahasiswa-reading-analysis
   ```
3. Pastikan Node.js terinstal di sistem Anda.

## Cara Menjalankan Program

1. Pastikan `lib.js` berisi data mahasiswa yang sesuai dengan struktur yang diharapkan (lihat bagian Struktur Data Mahasiswa).
2. Jalankan file `main.js` dengan perintah:
   ```bash
   node main.js
   ```

## Struktur Data Mahasiswa

Data mahasiswa dalam `lib.js` diharapkan memiliki struktur berikut:

```javascript
[
  {
    jawabanBenar: Number,
    waktuMembaca: Number, // dalam menit
  },
  // Data mahasiswa lainnya...
];
```

## Membuat Data Mahasiswa Secara Acak

Untuk membuat data mahasiswa secara acak, Anda dapat menggunakan kode berikut dalam `lib.js`:

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

const mahasiswa = [];
for (let i = 0; i < 400; i++) {
  const jawabanBenar = getRandomInt(1, 5); // Random integer between 1 and 5 inclusive
  const waktuMembaca = getRandomFloat(4, 7.5, 2); // Random float between 4 and 7.5 with 2 decimal places
  mahasiswa.push({ jawabanBenar, waktuMembaca });
}

module.exports = mahasiswa;
```

## Fungsi dalam Program

### 1. `hitungPersentasePemahaman(jawabanBenar, totalSoal)`

Fungsi ini digunakan untuk menghitung persentase pemahaman mahasiswa berdasarkan jumlah jawaban benar dan total soal.

- **Parameter:**
  - `jawabanBenar` (number): Jumlah jawaban yang benar.
  - `totalSoal` (number): Total jumlah soal.
- **Return:**
  - `number`: Persentase pemahaman mahasiswa.

### 2. `hitungKPM(jumlahKataBacaan, waktuMembaca)`

Fungsi ini digunakan untuk menghitung kecepatan membaca mahasiswa dalam KPM (Kata per Menit).

- **Parameter:**
  - `jumlahKataBacaan` (number): Jumlah kata dalam bacaan.
  - `waktuMembaca` (number): Waktu yang dibutuhkan untuk membaca dalam menit.
- **Return:**
  - `number`: Kecepatan membaca dalam KPM.

## Main Function

### `main()`

Fungsi ini adalah fungsi utama yang menjalankan keseluruhan program. Di dalamnya terdapat beberapa langkah:

1. Mengambil data mahasiswa dari modul `lib`.
2. Menghitung persentase pemahaman dan KPM untuk setiap mahasiswa.
3. Menghitung rata-rata persentase pemahaman dan rata-rata KPM untuk seluruh mahasiswa.
4. Menghitung rata-rata kemampuan baca (DEX) untuk seluruh sampel mahasiswa.

## Output Program

Program ini akan menghasilkan output berupa:

- Rata-rata persentase pemahaman mahasiswa.
- Rata-rata KPM (Kemampuan Baca) mahasiswa.
- Rata-rata kemampuan baca (DEX) untuk sampel mahasiswa.

### Contoh Output

```plaintext
Rata-rata Persentase Pemahaman: 80.00%
Rata-rata KPM (Kemampuan Baca): 150.00
Rata-rata kemampuan baca untuk sampel n: 85.00%
```

## Error Handling

Program ini menggunakan blok `try-catch` untuk menangani kesalahan yang mungkin terjadi selama eksekusi. Jika ada kesalahan, pesan kesalahan akan ditampilkan di konsol.

## Catatan Tambahan

- Pastikan data yang dimasukkan dalam `lib.js` valid dan sesuai dengan struktur yang diharapkan.
- Pastikan Node.js terinstal di sistem Anda untuk menjalankan program ini.
