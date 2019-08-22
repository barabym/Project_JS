
var zapros = prompt('Кто пришел?', '');
if (zapros === "Админ") {
    var pass = prompt('Пароль?', '');
    if (pass == "Черный властелин") {
        alert("Добро пожаловать")
    } else {
        if (pass == null) {
            alert('Вход отменен');
        } else {
            alert('Пароль неверен');
        }
    }
}
else if (zapros == null) {
    alert('Вход отменен');
}
else {
    alert('Я вас не знаю');
}