// perubahan/manipulasi data, eg: penggabungan, slicing

const username = "jamil";
const myFullName = `${username} ${"Nashrulloh"}`;

console.log(myFullName);
console.log(myFullName.slice(2, 10));

const capitalize = myFullName.charAt(0).toUpperCase();
const capitalFullName = `${capitalize}${myFullName.slice(1)}`;
// .slice(start?: number, end?: number): string, kalau ada question mark-nya maka boleh dikosongkan (opsional)
console.log(capitalFullName);
