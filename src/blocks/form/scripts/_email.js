import { Name } from './_name';

export class Email extends Name {
    constructor(props, form) {
        super(props, form);
        this.inputEl = this.formEl.querySelector('.form__email');
        this.validated = true;
    }

    correctCheck(isBtnCheck) {
        let inputText = this.inputEl.value;

        if (!this.validate(inputText)) {
            this.showErr();

        } else {
            this.removeErr();
        }

        if (inputText === '') {
            if (!isBtnCheck) {
                this.removeErr();
            }
        }
    }

    validate(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}