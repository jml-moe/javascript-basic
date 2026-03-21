// reusable block of a unit code
// named function & arrow function

function add(x, y) {
    console.log(x + y);
}
add(1, 2); // 3
add(10, 2); // 12

function sub(x, y) {
    return x - y;
}

const resultOne = sub(5, 3) // 2
const resultTwo = sub(10, 2) // 8
console.log("Hasil : ", resultOne); // 2
console.log("Hasil : ", resultOne + resultTwo); // 10, value resultOne bisa dipanggil karena value nya ditampung karena menggunakan return
