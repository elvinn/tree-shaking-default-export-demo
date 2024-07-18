function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

var util = { add, sub };

const sum = util.add(1, 2);
console.log(sum);
