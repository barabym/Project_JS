function Calculator() {


  this.calculate = function (stroka) {
    var arr = stroka.split(' ');
    var result = "Неизвестная операция";
    if (arr[1] == '+') { result = +arr[0] + +arr[2] };
    if (arr[1] == '-') { result = +arr[0] - +arr[2] };
    return result;
  };




}


var calc = new Calculator;

alert(calc.calculate("3 + 7")); // 10
