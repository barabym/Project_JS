function User(fullName) {
  this.fullName = fullName;
}

var vasya = new User("Василий Попкин");

Object.defineProperty(vasya, "firstName", {
  get: function () {
    var arr = this.fullName.split(' ');
    return arr[0];
  },
  set: function(firstName){
    var arr = this.fullName.split(' ');
    arr[0]=firstName;
    this.fullName=arr.join(' ');
}

});

Object.defineProperty(vasya, "lastName", {
  get: function () {
    var arr = this.fullName.split(' ');
    return arr[1];
  },
  set: function(lastName){
    var arr = this.fullName.split(' ');
    arr[1]=lastName;
    this.fullName=arr.join(' ');
  }
});








// чтение firstName/lastName
alert(vasya.firstName); // Василий
alert(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert(vasya.fullName); // Василий Сидоров

// запись в firstName
vasya.firstName = 'Алексей';

alert(vasya.fullName); // Алексей Сидоров