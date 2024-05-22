const mahasiswa = require("./lib");

// Fungsi untuk menghitung persentase pemahaman
function hitungPersentasePemahaman(jawabanBenar, totalSoal) {
  return (jawabanBenar / totalSoal) * 100;
}

// Fungsi untuk menghitung KPM (Kata per Menit)
function hitungKPM(jumlahKataBacaan, waktuMembaca) {
  const waktuDetik = waktuMembaca * 60; // Konversi waktu bacaan dari menit ke detik
  return (jumlahKataBacaan / (waktuDetik / 60)).toFixed(2);
}

async function main() {
  try {
    /*
     - di bawah ini ada totalSoal yang diisi dengan 5 soal
     - jumlah teks dalam bacaannya berjumlah 500 kata
     - totalKPM nya mempunyai nilai awal 0
    */
    console.log(mahasiswa);
    let totalSoal = 5;
    let jumlahKataBacaan = 500;
    let totalKPM = 0;

    // Hitung persentase pemahaman dan KPM untuk setiap mahasiswa

    for (let i = 0; i < mahasiswa.length; i++) {
      const mhs = mahasiswa[i];

      // Hitung persentase pemahaman dan KPM untuk setiap mahasiswa
      const persentasePemahaman = hitungPersentasePemahaman(
        mhs.jawabanBenar,
        totalSoal
      );

      const kpm = hitungKPM(jumlahKataBacaan, mhs.waktuMembaca);
      totalKPM += parseFloat(kpm);

      //menampilkan data menggunakan table pada console
      console.table({
        Mahasiswa: i + 1,
        "Persentase Pemahaman": persentasePemahaman + "%",
        "KPM (Kata per Menit)": kpm,
      });
      // Lakukan operasi lain yang diperlukan di sini
    }

    // Hitung rata-rata persentase pemahaman
    const totalPemahaman = mahasiswa.reduce(
      (acc, mahasiswa) =>
        acc + hitungPersentasePemahaman(mahasiswa.jawabanBenar, totalSoal),
      0
    );
    const rataRataPemahaman = (totalPemahaman / mahasiswa.length).toFixed(2);
    const rataRataKPM = (totalKPM / mahasiswa.length).toFixed(2);

    console.log(`Rata-rata Persentase Pemahaman: ${rataRataPemahaman}%`);
    console.log(`Rata-rata KPM (Kemampuan Baca): ${rataRataKPM}%`);

    const totalNilaiMaksimum = totalSoal * mahasiswa.length;
    const totalDEX = mahasiswa.reduce(
      (acc, mahasiswa) => acc + mahasiswa.jawabanBenar,
      0
    );
    const readingAbilityPercentage = (
      (totalDEX / totalNilaiMaksimum) *
      100
    ).toFixed(2);

    console.log(
      `Rata-rata kemampuan baca untuk sampel n: ${readingAbilityPercentage}%`
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Panggil main function untuk menjalankan program
main();
