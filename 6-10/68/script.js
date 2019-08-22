'use strict';

// Создаётся объект promise1
let promise1= new Promise((resolve_aaa, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve_aaa("11111");
  }, 1000);

});
// Создаётся объект promise2
let promise2= new Promise((resolve_sdfg, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve_sdfg("22222");
  }, 2000);

}); 



// promise.then навешивает обработчики на успешный результат или ошибку
promise2
  .then(
    qweqwe => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + qweqwe); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );