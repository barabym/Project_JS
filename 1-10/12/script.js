
function fib(n) {
    var num_before1 = 0;
    var num_before2 = 1;
    var num_fib = 1;

    for (i = 1; i < n; i++) {
        num_fib = num_before1 + num_before2;
        num_before1=num_before2;
        num_before2=num_fib;
    }
return num_fib;
}
alert(fib(+prompt("Введите число", 1)));

