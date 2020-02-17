import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import './navbar.css';

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="menu">
                </div>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><Link to="">About us</Link> </li>
                    <li><Link  to="international">International</Link >  </li>
                    <li><Link  to="domestic">Domestic</Link >  </li>
                    <li><Link  to="contact-us">Contact us</Link >  </li>
                    <li><Link  to="inquiry">Inquiry</Link > </li>
                </ul>
            </header>
        );
    }
}