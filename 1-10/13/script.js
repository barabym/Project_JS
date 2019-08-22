// function sayHi() {
//     alert( "Привет" );
//   }
  
//   alert( sayHi ); // выведет код функции

  var f = function sayHi() {
    alert( sayHi ); // изнутри функции - видно (выведет код функции)
  };
  
  alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')
  var c=0;
  var v="ghjdd";
  v.