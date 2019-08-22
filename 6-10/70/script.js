// setTimeout(() => alert("Проверка3000"), 3000);

new Promise((good) => setTimeout(good, 3000))

  .then(() => {
    alert('promis 1');
    setTimeout(()=> alert("1"), 13000);
    return true;
  })


  .then(() => {
    alert('promis 2');
    setTimeout(alert("2"), 9000);
    return true;
  })

  .then(() => {
    alert('promis 3');
  })

  .catch((error) => {
    alert(error)});


setTimeout(() => alert("Проверка5000"), 5000);


alert("Проверка1");

//----------------------------------------------------------------------------------------------------------

// new Promise((good) => setTimeout(good, 3000))

//   .then(() => {
//     alert('promis 1');
//     return new Promise((good) => setTimeout(good, 3000));
//   })

//   .then(() => {
//     alert('promis 2');
//     return new Promise((good) => setTimeout(good, 3000));
//   })

//   .then(() => {
//     alert('promis 3');
//   });


// setTimeout(() => alert("Проверка5000"), 5000);


// alert("Проверка1");
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// delay(3000)

//   .then(() => {
//     alert('promis 1');
//     return delay(3000);
//   })

//   .then(() => {
//     alert('promis 2');
//     return delay(3000);
//   })

//   .then(() => {
//     alert('promis 3');
//     throw new Error();
//   })
//   .catch(() => {
//     console.log('Caught an error.');
//   })
//   .then(() => {
//     console.log('Done.');
//   });

// setTimeout(() => alert("Проверка5000"), 5000);


// alert("Проверка1");
