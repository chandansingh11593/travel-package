import React, { Component } from 'react';
import './card.scss';

export class Card extends Component {
    render() {
        const { status = 'default', title, subtitle } = this.props;
        return (
            <div className={status +  ' card'}>
                <div className='card__header'>
                    <div className="card__header--title">
                        {title}
                    </div>
                    <div className="card__header--subtitle">
                        {subtitle}
                    </div>
                </div>
                <div className='card__content'>

                </div>
            </div>
        );
    }
}