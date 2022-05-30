function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function promedio(array) {
  let sumArray = 0;
  array.forEach((element) => {
    sumArray += element;
  });
  return sumArray / array.length;
}

// console.log("Esta es la funcion promedio");
// const array = [1, 5, 6];
// const result = promedio(array);
// console.log(result);

module.exports = {
  sum,
  multiply,
  divide,
  promedio,
};
