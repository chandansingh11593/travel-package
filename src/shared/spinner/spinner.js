import React from 'react';
import './spinner.css'

export class Spinner extends React.PureComponent {
    render() {
        return (
            <section>
                <div className="spinner__container">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        );
    }
}