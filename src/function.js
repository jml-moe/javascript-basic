// reusable block of a unit code
// named function & arrow function

// named-function
function add(x, y) {
  console.log(x + y);
}
add(1, 2); // 3
add(10, 2); // 12

function sub(x, y) {
  return x - y;
}

const resultOne = sub(5, 3); // 2
const resultTwo = sub(10, 2); // 8
console.log("Hasil : ", resultOne); // 2
console.log("Hasil : ", resultOne + resultTwo); // 10, value resultOne bisa dipanggil karena value nya ditampung karena menggunakan return

// arrow-function
const adds = (x, y) => x + y;
const subs = (x, y) => x - y;

const resulThree = adds(5, 3);
const resultFour = subs(5, 3);

console.log("Hasil : ", resulThree); // 8
console.log("Hasil : ", resultFour); // 2

// EXERCISE

// function capital(username) {
//   return `${username.charAt(0).toUpperCase()}${username.slice(1)}`;
// }

// const result_one = capital("syarif");
// const result_two = capital("fuah");
// const result_three = capital("jamil");
// console.log(result_one);
// console.log(result_two);
// console.log(result_three);

function capital(username) {
  console.log(`${username.charAt(0).toUpperCase()}${username.slice(1)}`);
}

capital("jamil");
capital("moe");
