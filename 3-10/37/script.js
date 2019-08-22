function Accumulator(x) {
    this.value = x;

    this.read = function () {
        this.number = +prompt("Number=", "");
        this.value += this.number;
        
    }

};


var accumulator = new Accumulator(10); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение
accumulator.read(); 
accumulator.read(); 
alert(accumulator.value); // выведет текущее значение