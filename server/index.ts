import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/sum/:number1/:number2", (request, response) => {
  let sum = parseInt(request.params.number1) + parseInt(request.params.number2);
  response.send(`${sum}`);
});

app.get("/substraction/:number1/:number2", (request, response) => {
  let substraction =
    parseInt(request.params.number1) - parseInt(request.params.number2);
  response.send(`${substraction}`);
});

app.get("/multiplication/:number1/:number2", (request, response) => {
  let multiplication =
    parseInt(request.params.number1) * parseInt(request.params.number2);
  response.send(`${multiplication}`);
});

app.get("/division/:number1/:number2", (request, response) => {
  let division =
    parseInt(request.params.number1) / parseInt(request.params.number2);
  response.send(`${division}`);
});

app.post("/square-root", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";
  let squareRoot = Math.sqrt(parseInt(number));
  response.json(squareRoot);
});

app.post("/pow", (request, response) => {
  let number1 = request.body.number1 ? request.body.number1 : "N/A";
  let number2 = request.body.number2 ? request.body.number2 : "N/A";
  let power = Math.pow(parseInt(number1), parseInt(number2));

  response.json(power);
});

app.post("/min", (request, response) => {
  let number1 = request.body.number1 ? request.body.number1 : "N/A";
  let number2 = request.body.number2 ? request.body.number2 : "N/A";
  let min = Math.min(parseInt(number1), parseInt(number2));
  response.json(min);
});

app.post("/max", (request, response) => {
  let number1 = request.body.number1 ? request.body.number1 : "N/A";
  let number2 = request.body.number2 ? request.body.number2 : "N/A";
  let max = Math.max(parseInt(number1), parseInt(number2));
  response.json(max);
});

app.post("/cos", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";
  let cos = Math.cos(parseInt(number));
  response.json(cos);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
