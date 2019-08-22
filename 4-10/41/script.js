
  function sumArgs() {
    var f=[].reduce;
    return f.call(arguments,function(a, b) {return a + b;})
   
  }
  
  alert( sumArgs(4, 5, 6) ); // 15, аргументы переданы через запятую, без массива