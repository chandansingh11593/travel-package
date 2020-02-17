import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            active: 'home'
        }
        this.handleNavigationClick.bind(this);
    }

    handleNavigationClick(route) {
        this.setState({ ...this.state, ...{ active: route } })
    }

    render() {
        const {active} = this.state;
        return (
            <header>
                <div className="menu">
                    Travel Packer
                </div>
                <ul>
                    <li className={active === 'home' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('home')} to="/home">Home</Link>
                    </li>
                    <li className={active === 'about' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('about')} to="/about">About us</Link>
                    </li>
                    <li className={active === 'international' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('international')} to="/international">International</Link >
                    </li>
                    <li className={active === 'domestic' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('domestic')} to="/domestic">Domestic</Link >  
                        </li>
                    <li className={active === 'contact-us' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('contact-us')} to="/contact-us">Contact us</Link > 
                         </li>
                    <li className={active === 'inquiry' ? 'active' :''}>
                        <Link onClick={() => this.handleNavigationClick('inquiry')} to="/inquiry">Inquiry</Link > 
                        </li>
                </ul>
            </header >
        );
    }
}