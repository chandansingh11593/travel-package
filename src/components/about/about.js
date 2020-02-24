import React from 'react';
import './about.scss';

export class About extends React.Component {
    render() {
        return (
            <div className="about__container">
                <div className="about__header">
                    <h2 className="about__header--title">- Our Mission -</h2>
                    <div className="about__header--title">Help you plan your travel</div>
                </div>
                <div className="about__description">
                    At Traven inn, Being a data-driven professional, Aja knows her own clients as a freelance writer and strategist don't just want to see what she's written -- they want to see how her content has performed. With that in mind, her "About Me" page tells a story of her career growth, which peaks -- no pun intended -- at an impressive line graph showing the result of an SEO strategy she implemented for the HubSpot Blog. (The graph's sharp decline at September simply indicates when she stopped collecting data.)
                </div>
            </div>
        )
    }
}