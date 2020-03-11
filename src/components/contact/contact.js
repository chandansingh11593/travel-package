import './contact.scss'
import React from 'react';
import { Input, InputType, Button } from '../../shared/controls/controls';

export class Contact extends React.Component {
    controls = [{
        name: 'email',
        type: InputType.text,
        label: 'email Id',
        color: '',
        placeholder: 'email@gmail.com'
    },
    {
        name: 'number',
        type: InputType.text,
        label: 'Contact Number',
        color: '',
        placeholder: '+91-9045-681-706'
    },
    {
        name: 'number',
        type: InputType.textarea,
        label: 'Query',
        color: '',
        placeholder: 'Please provide description here...'
    }]

    getFormControls() {
        const controls = this.controls.map((control, index) => {
            let { name, label, type, color, placeholder } = control;
            return (
                <Input name={name} type={type} label={label} key={index} color={color} placeholder={placeholder} ></Input>
            )
        });
        return (
            <>
                {controls}

            </>
        );
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