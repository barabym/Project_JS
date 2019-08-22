arr = ["test", 2, 1.5, false];


function find (arr, value){
var vivod=-1;
for (i=0; i<arr.length; i++){
    if (arr[i]===value) {
        vivod=i;
        break;
    }
}
return vivod;
}

alert(find (arr, 0));

