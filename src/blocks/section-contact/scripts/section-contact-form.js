import { Form } from '../../form/scripts/form';

new Form({
    formEl: document.querySelector('.form'),

    nameProps: {
        errStyleClass: 'form--name-alert',
        errAlertClass: 'form__enter-name-alert',
        errText: 'Enter your name',
    },

    emailProps: {
        errStyleClass: 'form--email-alert',
        errAlertClass: 'form__incorrect-email-alert',
        errText: 'Incorrect Email',
    },

    textProps: {
        errStyleClass: 'form--text-alert',
        errAlertClass: 'form__enter-text-alert',
        errText: 'Enter your question',
    },
});