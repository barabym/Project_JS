var first= prompt("Введите А", "");
var second= prompt("Введите Б", "");

function min(a, b) {
    if (a < b) {return a;}
    if (a > b) {return b;} 
    return "Они равны";
}    

alert(min(+first,+second));