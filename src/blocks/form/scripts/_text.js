import { Name } from './_name';

export class Text extends Name {
    constructor(props, form) {
        super(props, form);
        this.inputEl = this.formEl.querySelector('.form__text');
    }
}