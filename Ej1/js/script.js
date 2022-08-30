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


function acceso(){
let array = strangeArray.filter((value) => typeof value === "string");

let lista = document.getElementById("list");

for (const element of array) { // el element recorre el array uno por uno 
  
lista.innerHTML += `<li>${element}</li>` 
}

}

document.addEventListener("DOMContentLoaded", acceso());


