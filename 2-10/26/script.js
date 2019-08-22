var arr = [];
for (i = 0; i < 99; i++) {
    arr[i] = i + 2;
}

var arr_finish = [];
var p = 2;
var n = 100;
var pozition = 0;
var sum = 0;


while (p * p < n) {
    for (i = pozition + p; i < n; i += p) {
        if (arr[i] > 0) arr[i] = -arr[i];

    }
    for (i = pozition + 1; i < n; i++) {
        if (arr[i] > 0) {
            pozition = i;
            p = arr[i];
            break;
        }
    }
}

for (i = 0; i < 99; i++) {
    if (arr[i] > 0) {
        arr_finish.push(arr[i]);
    }
}
for (i = 0; i < arr_finish.length; i++) {
    sum += arr_finish[i]

}

