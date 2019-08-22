var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min=0;
var max = arr.length-1;

var rand = min + Math.floor(Math.random() * (max + 1 - min)); //Код для генерации случайного целого от min to max включительно

alert (arr[rand]);