var calculator = {
// numberA: "0",
// numberB: "0",

read: function(){
this.numberA = +prompt("Number A=","0");
this.numberB = +prompt("Number B=","0");
},



sum: function(){
return this.numberA + this.numberB;
},

mul: function(){
  return this.numberA * this.numberB;
},


}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );