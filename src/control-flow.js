function checkProtein(protein) {
  if (protein > 80) {
    console.log("excellent");
    return;
  }

  if (protein > 60 && protein <= 80) {
    console.log("good");
    return;
  }

  console.log("Protein belum mencukupi");
}

checkProtein(100);

// Ternary -> return a value based on condition tested
const username = "Moe";

const isMoe = username === "Moe" ? "Yes, this is Moe" : "No, this is Jamil";
// kondisi yg di tes ? value yg di return ketika true : value di return ketika false
console.log(isMoe);
