'use strict';

// Создаётся объект promise
let promise212 = new Promise((resolve121, reject) => {

    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve121("result");
    }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise212
    .then(
        result1adasd222 => {
            // первая функция-обработчик - запустится при вызове resolve
            alert("Fulfilled: " + result1adasd222); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        }
    )
    .then(
        x => {
            // первая функция-обработчик - запустится при вызове resolve
            alert("Проверка1"); // result - аргумент resolve
        }
    )
    .then(
        x => {
            // первая функция-обработчик - запустится при вызове resolve
            alert("Проверка2"); // result - аргумент resolve
        }
    );