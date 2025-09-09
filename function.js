function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// convertCelsiusToFahrenheit();

/* Output:
Hasil konversi: NaN
*/

// ------------------

function convertCelsiusToFahrenheit(temperature) {
  if (temperature !== undefined) {
    // <-- conditional statement (perintah kondisional)
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log("Hasil konversi:", temperatureInFahrenheit);
  }
}

const temperatureInCelcius = 90;

// convertCelsiusToFahrenheit(temperatureInCelcius);

// ------------------

function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122

// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194
