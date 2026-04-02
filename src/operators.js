// Comparison
const myNumber = "3";
const hisNumber = 3;
const isTheSame = myNumber == hisNumber;
const isTheDifference = myNumber !== hisNumber;

console.log(isTheSame);
console.log(isTheDifference);

// Logic Comparison

// OR ||
const username = "admin";
const password = "admin123";

// const isAccountValid = username === "admin" || username === "jamil";
// console.log(isAccountValid);

// const loginEmail = "jamil@admin.com";
const loginEmail = "me@admin.com";

const emailAdmin1 = "jamil@admin.com";
const emailAdmin2 = "moe@admin.com";

const isValid = loginEmail === emailAdmin1 || loginEmail === emailAdmin2;
console.log(isValid);

// AND &&
const isAccountValid = username === "admin" && password === "admin123";
console.log(isAccountValid);
