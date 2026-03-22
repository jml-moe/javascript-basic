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
