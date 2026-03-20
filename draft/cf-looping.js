// // const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };

// // for (const property in person) {
// //   console.log(`${property} bernilai ${person[property]}`);
// // //   console.log(`\n`);
// // }

// // const names = ["Bebek", "Ayam", "Telor", "Tempe"];

// // for (const item of names) {
// //   console.log(item);
// // }

// // function checkGrades(grades) {
// //   for (let i = 0; i < grades.length; i++) {
// //     if (typeof grades[i] !== "number") {
// //       throw new Error("Invalid input. Please provide an array of numbers.");
// //     }

// //     const grade = grades[i];
// //     let predicate;

// //     if (grade >= 90) {
// //       predicate = "A";
// //     } else if (grade >= 80) {
// //       predicate = "B";
// //     } else if (grade >= 70) {
// //       predicate = "C";
// //     } else if (grade >= 60) {
// //       predicate = "D";
// //     } else {
// //       predicate = "E";
// //     }

// //     console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
// //   }
// // }

// // try {
// //   const studentGrades = [95, 85, 65, 80, 70];
// //   checkGrades(studentGrades);
// // } catch (e) {
// //   console.error(e);
// // }

// // TODO

// function categorizeNumber(input) {
//     if (typeof input !== 'number' || Number.isNaN(input)) {
//         throw new Error("Input harus berupa bilangan bulat");
//     }

//     if (input === 0) {
//         return "Nol";
//     }

//     if (input < 0) {
//         return "Negatif";
//     }

//     if (isPrime(input)) {
//         return "Prima";
//     }

//     return input % 2 === 0 ? "Genap" : "Ganjil";

//     function isPrime(num) {
//         if (num <= 1) return false;
//         if (num <= 3) return true;
//         if (num % 2 === 0 || num % 3 === 0) return false;

//         for (let i = 5; i * i <= num; i += 6) {
//             if (num % i === 0 || num % (i + 2) === 0) return false;
//         }
//         return true;
//     }
// }

// // Contoh
// console.log(categorizeNumber(15)); // Output: "Ganjil"
// console.log(categorizeNumber(12)); // Output: "Genap"
// console.log(categorizeNumber(17)); // Output: "Prima"
// console.log(categorizeNumber(0)); // Output: "Nol"
// console.log(categorizeNumber(-5)); // Output: "Negatif"

// try {
//   categorizeNumber('abc');
// } catch (error) {
//   console.log(error.message);
// } // Output: "Input harus berupa bilangan bulat"

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
