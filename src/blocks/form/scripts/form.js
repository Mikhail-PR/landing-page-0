import { Name } from './_name';
import { Email } from './_email';
import { Text } from './_text';

export class Form {
    constructor(props) {
        this.formEl = props.formEl;
        this.elements = [];
        this.init(props);
    }

    init(props) {
        if (props.nameProps) this.elements.push(new Name(props.nameProps, this));
        if (props.emailProps) this.elements.push(new Email(props.emailProps, this));
        if (props.textProps) this.elements.push(new Text(props.textProps, this));

        this.formEl.addEventListener('input', e => this.elements.forEach(element => element.listenFunc(e)));

        this.formEl.addEventListener('submit', e => {
                e.preventDefault();

                this.elements.forEach(element => !element.validated ? element.listenFunc() : element.listenFunc(null, true));
                this.isIncorrect = this.elements.some(element => element.isCorrect === false);

                if (!this.isIncorrect) this.formEl.submit();
        });
    }
}