const { a } = require("./module2.js");

function hello() {
  console.log(a());
  return "hello";
}

module.exports = {
  hello,
};
