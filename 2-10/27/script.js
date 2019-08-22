var obj = {
    className: 'open menu'
}
// так не сработало какрор надо сравнение - нужно через масив а не строку
// function addClass(obj, cls) {

//     if (obj.className.indexOf(cls)==-1) {
//         obj.className += " " + cls;
//     }
//     return;
// }

function addClass(obj, cls) {
var arr = obj.className.split(' ');
var flag = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === cls) {
        flag = true;
    }
};
if (!flag) {
    arr.push(cls);
    obj.className=arr.join(" ")
};
}










addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className); // "open menu new me"