function isEmpty(obj) {
    var i = 0;
    for (var key in obj) {
        i++

    }
    return (i ? false : true);
}



var schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

alert(isEmpty(schedule)); // false