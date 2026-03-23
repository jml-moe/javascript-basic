/**
 * Latihan — scope: objek & array, fungsi (return), if/else, perbandingan,
 * loop / forEach, template string & string dasar (slice, charAt, dll.)
 *
 * Kerjakan fungsi di bawah. Uncomment bagian // TEST di akhir untuk cek manual,
 * atau jalankan: node src/exercise.js
 */

// -----------------------------------------------------------------------------
// SOAL 1 — EASY
// -----------------------------------------------------------------------------
// Buat fungsi `describeTemperature(celsius)` yang menerima satu angka suhu (°C)
// dan MENGEMBALIKAN string (bukan console.log di dalam fungsi):
//   - celsius < 0        → "beku"
//   - 0 <= celsius < 20  → "dingin"
//   - 20 <= celsius <= 32 → "nyaman"
//   - celsius > 32       → "panas"
//
// Petunjuk: gunakan if / else if dan return (mirip pola di control-flow.js).

function describeTemperature(celsius) {
  // TODO: isi di sini
}

// -----------------------------------------------------------------------------
// SOAL 2 — MEDIUM
// -----------------------------------------------------------------------------
// Buat fungsi `summarizeScores(students)` yang menerima array objek:
//   [ { name: string, score: number }, ... ]
//
// Fungsi harus MENGEMBALIKAN objek dengan bentuk:
//   {
//     passed: number,   // jumlah siswa dengan score >= 70
//     failed: number,   // jumlah siswa dengan score < 70
//     average: number   // rata-rata score (boleh desimal; jika array kosong, average = 0)
//   }
//
// Petunjuk: loop (for atau forEach), variabel penampung, pembagian untuk average.

function summarizeScores(students) {
  // TODO: isi di sini
}

// -----------------------------------------------------------------------------
// TEST (uncomment setelah mengisi fungsi)
// -----------------------------------------------------------------------------

// console.log("--- SOAL 1 ---");
// console.log(describeTemperature(-5));   // "beku"
// console.log(describeTemperature(10));  // "dingin"
// console.log(describeTemperature(25));  // "nyaman"
// console.log(describeTemperature(35));  // "panas"

// console.log("--- SOAL 2 ---");
// const kelas = [
//   { name: "A", score: 85 },
//   { name: "B", score: 60 },
//   { name: "C", score: 72 },
//   { name: "D", score: 45 },
// ];
// console.log(summarizeScores(kelas)); // { passed: 2, failed: 2, average: 65.5 }
// console.log(summarizeScores([]));    // { passed: 0, failed: 0, average: 0 }
