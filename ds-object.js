const user = {
  name: "Jamil",
  age: 21,
};

console.log(user);
console.log(user.name);

// AKSES PROPERTI MENGGUNAKAN OBJECT DESTRUCTURING
// Object destructuring sangat berguna sekali ketika kita memiliki object
// dengan properti yang banyak dan ingin mendapatkan nilai masing-masing properti
// seperti contoh berikut

const costumer = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { id, email } = costumer; // -> with destructuring

// const id = user.id; -> tanpa destructuring
// const email = user.email; -> tanpa destructuring

console.log(id, email);

// MENGUBAH NILAI PROPERTI OBJECT
const bankAccount = {
  balance: 25000,
  debt: 500,
};

bankAccount.balance = 50000;
console.log(bankAccount);


