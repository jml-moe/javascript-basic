// Contoh penggunaan Map di JavaScript

// Map adalah struktur data yang menyimpan pasangan key-value
// dimana key bisa berupa berbagai tipe data, tidak hanya string seperti pada Object biasa

// 1. Membuat Map baru
const userMap = new Map();

// 2. Menambahkan elemen ke dalam Map
userMap.set("user1", { name: "John", age: 25 }); // String sebagai key
userMap.set(42, "Answer to everything"); // Number sebagai key
userMap.set(true, "Boolean key"); // Boolean sebagai key

const objKey = { id: 1 };
userMap.set(objKey, "Object sebagai key"); // Object sebagai key

// 3. Mendapatkan nilai dari Map berdasarkan key
console.log(userMap.get("user1")); // { name: 'John', age: 25 }
console.log(userMap.get(42)); // 'Answer to everything'

// 4. Memeriksa keberadaan key di dalam Map
console.log(userMap.has(true)); // true
console.log(userMap.has("user2")); // false

// 5. Menghapus elemen dari Map
userMap.delete(true);
console.log(userMap.has(true)); // false setelah dihapus

// 6. Mendapatkan ukuran Map
console.log(userMap.size); // 3 (setelah menghapus satu elemen)

// 7. Iterasi pada Map
console.log("Iterasi dengan for...of:");
// 7.1. Iterasi key-value pairs
for (const [key, value] of userMap) {
  console.log(`${key} => ${JSON.stringify(value)}`);
}

// 7.2. Iterasi key saja
console.log("Keys:");
for (const key of userMap.keys()) {
  console.log(key);
}

// 7.3. Iterasi value saja
console.log("Values:");
for (const value of userMap.values()) {
  console.log(value);
}

// 7.4. Menggunakan forEach
console.log("Using forEach:");
userMap.forEach((value, key) => {
  console.log(`${key} => ${JSON.stringify(value)}`);
});

// 8. Membuat Map dari Array 2D
const arrayToMap = new Map([
  ["fruit", "apple"],
  ["vegetable", "carrot"],
  ["protein", "chicken"],
]);
console.log(arrayToMap.get("fruit")); // 'apple'

// 9. Mengkonversi Map ke Array
const mapEntries = Array.from(userMap.entries());
console.log(mapEntries); // Array dari [key, value] pairs

// 10. Menghapus semua elemen dari Map
userMap.clear();
console.log(userMap.size); // 0
