var first = prompt("Введите А", "");
var second = prompt("Введите Б", "");

function pow(a, b) {
    var i = 1;
    var otvet = a;
    while (i < b) {

        otvet = otvet * a;
        i++;

    }
    return otvet;
}

alert(pow(+first, +second));