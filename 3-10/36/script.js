function Calculator() {
   

    this.read = function () {
        this.numberA = +prompt("Number A=", "");
        this.numberB = +prompt("Number B=", "");
    },



        this.sum = function () {
            return this.numberA + this.numberB;
        },

        this.mul = function () {
            return this.numberA * this.numberB;
        }


};



var calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());