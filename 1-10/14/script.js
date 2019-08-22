var stroka = prompt("Напиши слово строчными буквами", "");
// var stroka= "проверка";
var len = stroka.length;
var chars = "";
for (i = 1; i < len; i++) {
    chars += stroka[i];
}
stroka = stroka[0].toUpperCase() + chars;
alert(stroka);