var obj = {
    className: 'my menu menu my proba proba menu my'
  };

  function removeClass(obj, cls){;
  var arr = obj.className.split(" ");
  
  for (var i=arr.length-1; i>=0; i--){
        if (arr[i]===cls){
            arr.splice(i,1);
        }
            
  }
  obj.className=arr.join(" ");
        return obj;
}
  removeClass(obj, 'menu');
  alert( obj.className ); // 'my'
