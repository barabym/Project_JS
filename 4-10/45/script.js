


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

}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье