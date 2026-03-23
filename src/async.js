function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

fetchData("https://api.example.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
