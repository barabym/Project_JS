function sum(a) {
    var summa = a;



    function f(b) {
        summa = summa + b;
        return f;
    };

    f.toString = function () { return summa; };

    return f;

}

alert (sum(3)(2)(5));
