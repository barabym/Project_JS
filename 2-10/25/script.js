var arr = [5, 4, 3, 8, 0];


function filterRange (arr, a, b){
var rezultat=[];
for (i=0; i<arr.length; i++){
    if (arr[i]>=a && arr[i]<=b) {
       rezultat.push(arr[i]);
    }
}
return rezultat;
};
var filtered = filterRange(arr, 3, 5);

alert(filtered);

