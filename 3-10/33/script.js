//задание №1
// var a = new Date(2012, 1, 20, 3, 12);
// alert(a);

//задание №2

// function getWeekDay(date) {

//     var rusden;
//     switch (date.getDay()) {
//         case 0: rusden = "вс"; break
//         case 1: rusden = "пн"; break
//         case 2: rusden = "вт"; break
//         case 3: rusden = "ср"; break
//         case 4: rusden = "чт"; break
//         case 5: rusden = "пт"; break
//         case 6: rusden = "сб"; break
//     };
//     return rusden;
// };

// var a = new Date();
// alert(getWeekDay(a));


//задание №2 через массив
// function getWeekDay(date) {
//     var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

//     return days[date.getDay()];
//   }

//   var date = new Date(2014, 0, 3); // 3 января 2014
//   alert( getWeekDay(date) ); // 'пт'



//задание №4

// var a = new Date();

// function getDateAgo(date, days){

//      date.setDate(date.getDate()-days);

//      return date;
// };

// alert( getDateAgo(a, 3) );


//задание №4 с отвязкой переменной чтобы она не изменяласт в прцессе
// function getDateAgo(date, days) {

//     // var dateCopy=date; // так обьект не отвязать они остаются связаные скорее всего объект дата это как массив
//     var dateCopy = new Date(date); // вот так надо отвязывать

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// var date = new Date(2015, 0, 10);

// alert(getDateAgo(date, 1));
// alert(getDateAgo(date, 2));
// alert(getDateAgo(date, 5)); 


//задание №5

// function getLastDayOfMonth(year, month) {
//     var TempDate = new Date(year, month + 1, 0);

//     return TempDate.getDate();
// };
// alert(getLastDayOfMonth(2012, 1)); 


