
import React, { Component } from 'react'
import './controls.scss';

export class Input extends Component {


    render() {

        let { name, label, type, color, placeholder } = this.props;
        color = color ? color : 'primary';
        let control = null;
        switch (type) {
            case InputType.text:
                control = <input name={name} type={type} placeholder={placeholder} ></input>
                break;
            case InputType.textarea:
                control = <textarea rows="4" name={name} type={type} placeholder={placeholder}></textarea>
                break;
            default:
                break;
        }
        return (
            <div className={'input__control ' + color}>
                <label>{label}</label>
                {control}
            </div>
        )
    }
}

export class Button extends Component {
    render() {
        let { name, label, type, color = 'primary' } = this.props;

        return (
            <button name={name} className={color} type={type}>{label}</button>
        );
    }
}

export const InputType = {
    'text': 'text',
    'checkbox': 'checkbox',
    'number': 'number',
    'textarea': 'textarea'
}
