var styles = [
    "Джаз", "Блюз"
];
styles.push("Рон-н-Ролл");
styles[styles.length - 2] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");
