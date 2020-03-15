
import React, { Component } from 'react'
import './controls.scss';

export class Input extends Component {
    handleControlChange($event, name) {
        this.props.onInput(name, $event.currentTarget.value);
    }

    render() {

        let { name, label, type, color, placeholder, value } = this.props;
        color = color ? color : 'default';
        let control = null;
        switch (type) {
            case InputType.text:
                control =
                    <input name={name}
                        value={value}
                        type={type}
                        placeholder={placeholder}
                        onBlur={() => this.props.onFocusOut(name)}
                        onChange={($event) => this.props.onInput(name, $event.currentTarget.value)} ></input>
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
        let { name, label, type, color = 'default' } = this.props;

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
