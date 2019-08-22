"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};


// 2 вариант
// var salaries = {};


// ... ваш код выведет "Петя"

var max = 0;
var name="";
for (const key in salaries) {
    if (max < salaries[key]) {
        name = key;
        max = salaries[key]
    }
 }
alert(name || "нет сотрудников");