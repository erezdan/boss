const express = require("express");
const server = express();
const port = 3000;

// Function 1: Hello World
server.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

// Function 2: Add two numbers
server.get("/add/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  res.send(`The result of ${num1} + ${num2} is ${result}`);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
