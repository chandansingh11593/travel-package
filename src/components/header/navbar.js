import React from 'react';
import './navbar.css';

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="menu">
                </div>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">About us</a> </li>
                    <li><a href="/">International</a>  </li>
                    <li><a href="/">Domestic</a>  </li>
                    <li><a href="/">Contact us</a>  </li>
                    <li><a href="/">Inquiry</a> </li>
                </ul>
            </header>
        );
    }
}