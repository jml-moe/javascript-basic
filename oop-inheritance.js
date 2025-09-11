class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log("iOS have a behavior AirDrop");
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "Galaxy S21");

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen

// Instanceof dapat digunakan untuk menguji apakah suatu object
// merupakan instance dari sebuah class atau constructor function tertentu.

console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true

// Example: Vehicle hierarchy
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} has started.`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} has stopped.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
    this.type = "car";
  }

  honk() {
    console.log("Beep beep!");
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
    this.type = "motorcycle";
  }

  wheelie() {
    console.log(
      this.hasSidecar ? "Cannot do wheelie with sidecar!" : "Doing a wheelie!"
    );
  }
}

// Creating instances
const car = new Car("Toyota", "Corolla", 2022, 4);
const motorcycle = new Motorcycle("Harley", "Davidson", 2021, false);

// Using methods
car.start();
car.honk();
car.stop();

motorcycle.start();
motorcycle.wheelie();
motorcycle.stop();

// Testing inheritance
console.log(car instanceof Vehicle); // true
console.log(car instanceof Car); // true
console.log(car instanceof Motorcycle); // false
console.log(motorcycle instanceof Vehicle); // true
