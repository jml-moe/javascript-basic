// for-loop
const myTechStack = ["JS", "Python", "Hono", "FastAPI", "React", "TanStack"];

for (i = 0; i < myTechStack.length; i++) {
  console.log(myTechStack[i]);
}

// for-each -> melakukan looping berdasarkan iterable object (ex: arrau), argument berbentuk fn (fallback)
myTechStack.forEach((stack) => {
  console.log(`I love ${stack}`);
});

// exercise
function checkProtein(fruit, protein) {
  if (protein > 10) {
    console.log(
      `${fruit} dengan ${protein}gr protein bagus untuk asupan protein`,
    );
    return;
  }

  if (protein > 5 && protein <= 10) {
    console.log(
      `${fruit} dengan ${protein}gr protein sudah cukup untuk memenuhi kebutuhan protein`,
    );
    return;
  }

  console.log(
    `${fruit} dengan ${protein}gr protein belum memenuhi kebutuhan protein`,
  );
}

const fruits = [
  {
    name: "Banana",
    protein: 15,
  },
  {
    name: "Apel",
    protein: 11,
  },
  {
    name: "Pir",
    protein: 8,
  },
  {
    name: "Bernuk",
    protein: 2,
  },
];

fruits.forEach((fruit) => {
  checkProtein(fruit.name, fruit.protein);
});
