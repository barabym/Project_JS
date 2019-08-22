function User() {
    var firstName;
    var surname;

    this.setFirstName = function (name) {
        firstName = name;
    };
    this.setSurname = function (surn) {
        surname = surn;
    };

    this.getFullName = function () {
        return firstName + " " + surname;
    };

}


var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert(user.getFullName()); // Петя Иванов