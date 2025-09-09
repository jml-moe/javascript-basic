const sampleProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shirt", category: "Apparel", price: 50 },
  { id: 4, name: "Shoes", category: "Apparel", price: 80 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
];

function getProductsByCategory(products, category) {
  /**
   * Menggunakan filter untuk mendapatkan produk berdasarkan kategori
   */
  return products.filter((product) => product.category === category);
}

function findProductById(products, id) {
  /**
   * Menggunakan find untuk mendapatkan produk dengan ID yang cocok
   */
  return products.find((product) => product.id === id);
}

function calculateTotalPrice(products) {
  /**
   * Menggunakan reduce untuk menjumlahkan harga semua produk
   */
  return products.reduce((total, product) => total + product.price, 0);
}

function applyDiscount(products, discount) {
  /**
   * Menggunakan map untuk membuat array baru dengan harga yang sudah didiskon
   */
  return products.map((product) => ({
    ...product,
    price: product.price * (1 - discount / 100),
  }));
}

console.log(getProductsByCategory(sampleProducts, "Electronics")); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
