function Calculator() {

  this.addMethod = function (name, func) {
    this[name] = func;
  };

  this.calculate = function (stroka) {
    var arr = stroka.split(' ');
    var result = "Неизвестная операция";

    if (arr[1] == '+') { result = +arr[0] + +arr[2] };
    if (arr[1] == '-') { result = +arr[0] - +arr[2] };

    for (var key in this) {
      if (arr[1] == key) { result = this[key](arr[0], arr[2]) };

    };

    return result;
  };

}
var calc = new Calculator;

alert(calc.calculate("3 + 7")); // 10

alert(calc.calculate("3 - 7")); // -4



var powerCalc = new Calculator;

powerCalc.addMethod("*", function (a, b) {
  return a * b;
});
powerCalc.addMethod("/", function (a, b) {
  return a / b;
});
powerCalc.addMethod("**", function (a, b) {
  return Math.pow(a, b);
});



alert(powerCalc.calculate("2 ** 3")); // 8

alert(powerCalc.calculate("20 / 5")); // 4

alert(powerCalc.calculate("2 * 3")); // 6





