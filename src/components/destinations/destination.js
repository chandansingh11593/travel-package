import './destination.scss';
import React, { Component } from 'react';
import { Card } from '../../shared/card/card';

export class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    status: '',
                    title: 'Placeholder card',
                    subtitle: 'sub heading to the title',
                    content: 'here we are goun gto load the content of the packages'
                }
            ]
        }
    }

    getCards() {
        return this.state.cards.map((card, index) => {
            return <Card
                key={index}
                classes={card.status}
                title={card.title}
                subtitle={card.subtitle}
                content={card.content} ></Card>
        })
    }

    render() {
        return (<div >
            <h2>Hi you have you reached your destination finder</h2>
            <section>
                {this.getCards()}
            </section>
        </div>
        );
    }
}