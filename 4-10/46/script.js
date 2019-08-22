


function Machine() {
    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };

    this.disable = function () {
        this._enabled = false;
    };
}

function Fridge(power) {
    Machine.call(this);
    var food = [];
    var power;

    this.addFood = function () {
        var tempArr = [].slice.call(arguments)
        if (!this._enabled) {
            alert("Холодос выключен, еду не добавить");
            return;
        }

        tempArr.forEach(function (item) {
            if (food.length < power / 100) {
                food.push(item);
            }
            else {
                alert("нету места!");
                return;
            }
        })
    }

    this.getFood = function () {
        return food.slice();
    }

    this.filterFood = function (func) {
        // моя версия тоже работала, но в примере все четче
        // var filretArr = [];
        // food.forEach(function (item) {
        //     if (func(item)) { filretArr.push(item); };

        // });
        // return filretArr;
        return food.filter(func);
    }

    this.removeFood = function (nameFood) {
        
        // моя версия тоже работала, но в примере все четче
        // for (var i = 0; i < food.length; i++) {
        //     if (food[i].title == nameFood.title) {
        //         food.splice(i,1)
        //     }
        // }
        var idx = food.indexOf(nameFood);
        if (idx != -1) food.splice(idx, 1);
    }
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert(fridge.getFood().length); // 4

var dietItems = fridge.filterFood(function (item) {
    return item.calories < 50;
});

dietItems.forEach(function (item) {
    alert(item.title); // сок, зелень
    fridge.removeFood(item);
});

alert(fridge.getFood().length); // 2
fridge.getFood().forEach(function (item) {
    alert(item.title);})