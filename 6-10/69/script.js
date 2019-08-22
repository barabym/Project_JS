setTimeout(() => alert("Проверка2000"), 2000);


Promise.resolve(4)

  .then(z => (z * 5))

  .then(s => {
    setTimeout((temp = s + 5), 15000);
    return temp;
  }
  )

  .then(ggg => alert("Вывод:" + ggg));


  setTimeout(() => alert("Проверка5000"), 5000);
// setTimeout (alert ('Проверка3000'), 2000);

alert("Проверка1");
  // Promise.resolve("Success").then(function(value) {alert (value)}, function(value) {});