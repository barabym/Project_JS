"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

//... ваш код выведет 650
var sum = 0;
for (const key in salaries) {
    sum += salaries[key];
}
alert(sum);
