var arr = [];

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

while (1) {
    var zapros = prompt("Введите данные", "");
    if (zapros === "" || zapros === null || !isNumeric(zapros)) break;
    arr.push(+zapros);
}
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert(sum);

