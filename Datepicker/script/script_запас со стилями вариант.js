class DataPicker {
    constructor() {
        // this.divMain = this.start();
    }
    start() {

        let main_shell = new Shell();
        let main_parent = main_shell.render(document.body, "main", "");

        let head_shell = new Shell();
        let head_parent = head_shell.render(main_parent, "head-picker", "");

        let arrow_left = new Shell();
        arrow_left.render(head_parent, "head-picker__arrow", "Previous");

        let month = new Shell();
        month.render(head_parent, "head-picker__month", "September");

        let arrow_right = new Shell();
        arrow_right.render(head_parent, "head-picker__arrow", "Next");

    }

}

class Shell {

    constructor() { }

    render(parent, css, text_note) {

        let obj = document.createElement("div");
        obj.className = css;
        if (text_note != "") obj.innerHTML = text_note;
        parent.appendChild(obj);
        return obj;
    }

}















let data_picker = new DataPicker();
data_picker.start();


