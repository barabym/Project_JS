//Вариант №1
// function sumTo(x) {
//     var sum = 0;
//     for (i = 1; i <= x; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// alert(sumTo(+prompt("Введите число", 1)));

//Вариант №2
// function sumTo(n) {
//     if (n != 1) {
//         return n + sumTo(n - 1);
//     }
//     else {
//         return n;
//     }

// }
// alert(sumTo(+prompt("Введите число", 1)));

// Вариант №3
function sumTo(n) {
    var sum;
    sum=(2+(n-1))*n/2
        return sum;
    }


alert(sumTo(+prompt("Введите число", 1)));