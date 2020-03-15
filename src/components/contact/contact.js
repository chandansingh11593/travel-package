import './contact.scss'
import React from 'react';
import { Input, InputType, Button } from '../../shared/controls/controls';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                email: {
                    name: 'email',
                    value: '',
                    type: InputType.text,
                    label: 'email Id',
                    status: '',
                    placeholder: 'email@gmail.com',
                    hasChanged: false,
                    regex: /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                },
                phoneNumber: {
                    name: 'phoneNumber',
                    value: '',
                    type: InputType.text,
                    label: 'Contact Number',
                    status: '',
                    placeholder: '+91-9045-681-706',
                    hasChanged: false,
                    regex: ''
                },
                query: {
                    name: 'query',
                    type: InputType.textarea,
                    label: 'Query',
                    status: '',
                    placeholder: 'Please provide description here...',
                    hasChanged: false
                }
            }
        }
    }

    setControlsState(controlName, value) {
        const { controls } = this.state;
        const control = controls[controlName];
        console.log(controls, control, controlName);
        control.hasChanged = true;
        control.value = value;
        this.setState({ controls: { ...this.state.controls, [controlName]: control } });
    }

    validateControlOnFocusOut(controlName) {
        const { controls } = this.state;
        const control = controls[controlName];
       
        if (control.hasChanged) {
            if (control.regex &&
                !control.regex.test(control.value)) {
                control.status = 'danger';
            } else {
                control.status = 'primary';
            }
        }


        this.setState({ controls: { ...this.state.controls, [controlName]: control } });
    }

    getFormControls() {
        const controls = Object.values(this.state.controls);
        console.log(controls);
        return controls.map((control, index) => {
            let { name, label, type, status, placeholder, value } = control;
            return (
                <Input name={name}
                    value={value}
                    type={type}
                    label={label}
                    key={index}
                    color={status}
                    placeholder={placeholder}
                    onInput={(controlName, value) => this.setControlsState(controlName, value)}
                    onFocusOut={(controlName) => this.validateControlOnFocusOut(controlName)}></Input>
            )
        });
    }

    onSubmitForm($event) {
        // console.log($event);
    }

    render() {
        return (
            <div className="contact__wrapper">

                <form className="contact__form" onSubmit={($event) => this.onSubmitForm($event)} action="">
                    <h2>Let us Know</h2>
                    <div className="contact__form__controls">
                        {this.getFormControls()}
                    </div>
                    <Button className={'primary'} type={'submit'} name={'submit button'} label={'Send Query'}></Button>
                </form>
            </div>
        )
    }
}