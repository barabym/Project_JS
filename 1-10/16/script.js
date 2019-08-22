
// рабочий но корявый вариант
// function truncate(text, num) {
//     var vivod = text;
//     var len = text.length;
//     if (len > num) {
//         var predel = num - 3;
//         var NewText = "";
//         for (i = 0; i < predel; i++) {
//             NewText = NewText + text[i];
//         }
//         for (i = 0; i < 3; i++) {
//             NewText = NewText + ".";
//         }
//         vivod = NewText;
//     }
//     return vivod;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));

// правильный вариант
function truncate(text, num) {

    if (text.length > num) {
        text = text.slice(0, num - 3) + "...";
    }
    return text;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));