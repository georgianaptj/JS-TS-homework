import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/9/3";
const substractionURL = "http://localhost:8080/substraction/9/2";
const multiplicationURL = "http://localhost:8080/multiplication/2/2";
const divisionURL = "http://localhost:8080/division/2/2";
const powURL = "http://localhost:8080/pow";
const sqrtURL = "http://localhost:8080/square-root";

fetch(sumURL) // apeleaza fetch returneaza un Promise (promise e un obiect) ca la un moment dat vom primi un response de la un API de pe internet
  .then((body) => body.json()) //
  .then((result) => {
    // cand obiectul de tip json e returnat, noi il folosim as it is
    console.log(`Sum: ${result}`);
  });

//Post with form parameters
const powParams = new URLSearchParams();
powParams.set("number1", "2");
powParams.set("number2", "3");
fetch(powURL, {
  method: "POST",
  body: powParams,
})
  .then((res) => res.json()) // expecting a json response
  .then((json) => console.log(`Pow: ${json}`));

const sqrtParams = new URLSearchParams();
sqrtParams.set("number", "9");
fetch(sqrtURL, {
  method: "POST",
  body: sqrtParams,
})
  .then((res) => res.json()) // expecting a json response
  .then((json) => console.log(`Square-root: ${json}`));
