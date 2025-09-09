const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  employees.push(newEmployee);
  return newEmployee;
}

const hasil = addEmployee("Budi", "budi@dicoding.com", 2021);
// console.log(hasil);
console.log(employees);

const numbers = [1, 2, 3];
const [first, ...rest] = numbers;
console.log(rest);