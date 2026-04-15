function solve(input) {
  return input.trim();
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
console.log(solve(input));
