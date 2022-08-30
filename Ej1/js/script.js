// Array extraño
const strangeArray = [
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  undefined,
  "ola ke ase",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  ["Hola mundo!"],
  "b",
];



console.log(strangeArray.filter((value) => typeof value === ""));