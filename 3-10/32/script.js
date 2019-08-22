
var arr = [1, 2, 3, 4, 5]
// var arr = [-2,-1,0,1];

function getSums(arr) {
  var newArrSumm = [];
  arr.reduce(function (sum, item, i) {

    // newArrSumm[i] = sum + item; // можно и по понтовее как ниже
    newArrSumm.push(sum + item);
    return sum + item;

  }, 0);
  
  return newArrSumm;
}

alert(getSums(arr));

