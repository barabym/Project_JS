

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function multiplyNumeric(object) {
    for (var key in object) {
        if (isNumeric(object[key])) {
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

// alert(menu.width);
// alert(menu.height);
// alert(menu.title);

alert("width=" + menu.width + "\n height=" + menu.height + "\n title=" + menu.title);