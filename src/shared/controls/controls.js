
import React, { Component } from 'react'
import './controls.scss';

export class Input extends Component {


    render() {

        let { name, label, type, color } = this.props;
        console.log(this.props)
        color = color ? color : 'primary';
        return (
            <div className={'input__control ' + color}>
                <label>{label}</label>
                <input name={name} type={type} ></input>
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
    'number': 'number'
}
