
function camelizr(str) {
    var newStr = '';
    var flagUp = false;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "-") {
            flagUp = true;
            continue;
        };
        if (flagUp) {
            flagUp = false;
            newStr += str.charAt(i).toUpperCase();
            continue;
        }
        newStr += str.charAt(i);
    };
    return newStr;
}
alert(camelizr("background-color"));
alert(camelizr("list-style-image"));
alert(camelizr("-webkit-transition"));


