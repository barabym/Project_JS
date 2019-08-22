
  // function sumArgs() {
  //   var f=[].reduce;
  //   return f.call(arguments,function(a, b) {return a + b;})
   
  // }
  
  // alert( sumArgs(4, 5, 6) ); // 15, аргументы переданы через запятую, без массива

  function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }






  function applyAll (){
    var f=[].slice;
    var fun=applyAll.arguments[0];
    var arr=f.call(arguments, 1)
     // return fun(arr.join(", "))
    return fun.apply(null, arr);
  };


  alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
  alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24