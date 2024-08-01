const p = document.querySelector("p");
const MAX = 100;
let result = "";

const multipleOf = function (i, number) {
  return i % number === 0;
};

for (let i = 1; i <= MAX; i++) {
  const multipleOf3 = multipleOf(i, 3);
  const multipleOf5 = multipleOf(i, 5);
  multipleOf3 && (result += "Foo");
  multipleOf5 && (result += "Bar");
  multipleOf3 || multipleOf5 || (result += i);
  result += "<br>";
}

p.innerHTML = result;
