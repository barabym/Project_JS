function aclean(arr) {
      // этот объект будем использовать для уникальности
      var obj = {};
    
      for (var i = 0; i < arr.length; i++) {
        // разбить строку на буквы, отсортировать и слить обратно
        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)
    
        obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
      }
    
      var result = [];
    
      // теперь в obj находится для каждого ключа ровно одно значение
      for (var key in obj) result.push(obj[key]);
    
      return result;
    }
    
    var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
    
    alert( aclean(arr) );