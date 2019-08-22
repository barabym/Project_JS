var userName = "Вася";
function showMessage() {
    var userName = "Петя"; /* переменная заново создается и сама по себе*/
    var message = "Привет, я " + userName;
    alert(message); /* петя - т.е. новая перемменная*/
}
showMessage();
alert(userName); /* Вася - т.те вне функции переменная осталась неизменной*/