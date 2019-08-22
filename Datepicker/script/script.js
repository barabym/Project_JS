class DataPicker {
    constructor() {
        this.main_parent = null;
        this.body_parent = null;
        this.div_month = null;
        this.this_Day = new Date();
        this.showing_Month = new Date(this.this_Day);

    }
    start() {

        this.main_parent = this.render(document.body, "main", "");

        let head_parent = this.render(this.main_parent, "head-picker", "");

        let arrow_left = this.render(head_parent, "head-picker__arrow", "Previous");

        // this.arrowPrevious = this.arrowPrevious.bind(this);
        // arrow_left.addEventListener("click", this.arrowPrevious);                      // 1 вариант работает

        // arrow_left.addEventListener("click", this.arrowPrevious.bind(this));         // 2 вариант работает

        arrow_left.addEventListener("click", () => { this.arrowPrevious() });               // 3 вариант тоже работает

        this.div_month = this.render(head_parent, "head-picker__month", "");

        let arrow_right = this.render(head_parent, "head-picker__arrow", "Next");

        // this.arrowNext = this.arrowNext.bind(this);
        // arrow_right.addEventListener("click", this.arrowNext);                        // 1 вариант работает

        // arrow_right.addEventListener("click", this.arrowNext.bind(this));         // 2 вариант работает

        arrow_right.addEventListener("click", () => { this.arrowNext() });               // 3 вариант тоже работает

        let week = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
        for (let i = 0; i < 7; i++) {
            this.render(head_parent, "head-picker__day", week[i])
        }

        let date_runner = new Date(this.showing_Month);
        date_runner.setDate(1);
        this.fillMonth(date_runner);
    };

    render(parent, css, text_note) {
        let obj = document.createElement("div");
        obj.className = css;
        if (text_note != "") obj.innerHTML = text_note;
        parent.appendChild(obj);
        return obj;
    };

    arrowPrevious() {
        this.showing_Month.setMonth(this.showing_Month.getMonth() - 1);
        let date_runner = new Date(this.showing_Month);
        date_runner.setDate(1);
        this.fillMonth(date_runner);
    };

    arrowNext() {
        this.showing_Month.setMonth(this.showing_Month.getMonth() + 1);
        let date_runner = new Date(this.showing_Month);
        date_runner.setDate(1);
        this.fillMonth(date_runner);
    };

    setmonth(month) {
        let month_arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.div_month.innerHTML = month_arr[month];
    };

    fillMonth(date_runner) {

        if (this.body_parent) this.main_parent.removeChild(this.body_parent);
        this.body_parent = this.render(this.main_parent, "body-picker", "");

        let month = date_runner.getMonth();
        this.setmonth(month);                    //Выводим месяц на табло 

        // заполняем предыдущие дни (если первый день месяца не понедельник)
        let week_day = date_runner.getDay();
        if (week_day != 1) {
            let finish_cikl = week_day - 1;
            if (!week_day) finish_cikl = 6;               //Если первый день воскресенье, то назначаем количество дней напрямую минуя формулу 
            date_runner.setDate(-finish_cikl + 1);
            for (let i = 1; i <= finish_cikl; i++) {
                this.render(this.body_parent, "head-picker__num head-picker__num_other-month", date_runner.getDate())
                date_runner.setDate(date_runner.getDate() + 1);
            };
        };
        // заполняем текущие дни
        while (date_runner.getMonth() == month) {
            // отлавливаю именно текущий день
            if (this.this_Day.getMonth() == month && this.this_Day.getDate() == date_runner.getDate()) {
                week_day = date_runner.getDay();
                if (week_day == 0 || week_day == 6) {
                    this.render(this.body_parent, "head-picker__num head-picker__num_weekend head-picker__num_day-now", date_runner.getDate());
                    date_runner.setDate(date_runner.getDate() + 1);
                }
                else {
                    this.render(this.body_parent, "head-picker__num head-picker__num_day-now", date_runner.getDate());
                    date_runner.setDate(date_runner.getDate() + 1);
                }
                continue;
            };
            // выходные дни
            if (date_runner.getDay() == 0 || date_runner.getDay() == 6) {
                this.render(this.body_parent, "head-picker__num head-picker__num_weekend", date_runner.getDate());
                date_runner.setDate(date_runner.getDate() + 1);
                continue;
            };
            // обычные дни
            this.render(this.body_parent, "head-picker__num", date_runner.getDate());
            date_runner.setDate(date_runner.getDate() + 1);
        };
        // заполняем последующие дни (если последний день месяца выпал не на воскресенье)
        while (date_runner.getDay() != 1) {
            this.render(this.body_parent, "head-picker__num head-picker__num_other-month", date_runner.getDate())
            date_runner.setDate(date_runner.getDate() + 1);
        };
    };
}


let data_picker = new DataPicker();
data_picker.start();




