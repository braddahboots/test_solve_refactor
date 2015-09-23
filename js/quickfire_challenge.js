function bankAccount(num) {
  var number = [];

  for(var i = 1; i < num + 1; i++) {
    number.push(i);
  }
  console.log(number);

  var numberSum = number.map(square).reduce(sum, 0);
  return numberSum;

    function square(current, index, array) {
      return Math.sqrt(current);
    }

    function sum(previous, current) {
      return previous + current;
    }
}

module.exports = bankAccount;
