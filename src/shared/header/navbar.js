import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            active: 'home',
            isMobileMode: this.isMobileMode(window.innerWidth),
            showMobileMenu: false
        }
        this.handleNavigationClick.bind(this);
    }

    handleNavigationClick(route) {
        this.setState({ ...this.state, ...{ active: route, showMobileMenu: false } });

    }

    isMobileMode(width) {
        return width <= 950;
    }

    handleHeaderWidthChange($event) {
        const { innerWidth } = $event.currentTarget;
        // const { } = this.isMobileMode(innerWidth);
        this.setState({ ...this.state, isMobileMode: this.isMobileMode(innerWidth) });
    }

    componentDidMount() {
        const handleResize = this.handleHeaderWidthChange.bind(this);
        window.addEventListener('resize', handleResize);
    }
    componentWillUnmount() {
        const handleResize = this.handleHeaderWidthChange.bind(this);
        window.removeEventListener('resize', handleResize);
    }

    handleMobileMenu() {
        // console.log(this.s.showMobileMenu);
        this.setState({ ...this.state, showMobileMenu: !this.state.showMobileMenu })
    }

    getMobileMenu() {
        const { showMobileMenu, active, isMobileMode } = this.state;
        
        const menu = 'menu__container '.concat((showMobileMenu && isMobileMode) ? '' : 'menu__container--hide');
        // console.log(menu, showMobileMenu);
        return (
            <div className={menu}>
                <aside>
                    {this.getMenuItems(active)}
                </aside>
            </div>
        );

    }

    getNavigation() {
        const { active, isMobileMode, showMobileMenu } = this.state;
        if (isMobileMode) {
            if (!showMobileMenu) {
                return (
                    <>
                        <div className="navigation__menu navigation__menu--mobile">
                            <svg className="icon__burger" id="icon-burger" viewBox="0 0 24 24" fill="white"
                                onClick={() => this.handleMobileMenu()}>
                                <rect y="2" width="30" height="2" rx="1"></rect>
                                <rect y="20" width="30" height="2" rx="1"></rect>
                                <rect y="8" width="30" height="2" rx="1"></rect>
                                <rect y="14" width="30" height="2" rx="1"></rect>
                            </svg>

                        </div>

                    </>
                );
            } else {
                return <div className="icon--close" onClick={() => this.handleMobileMenu()}> X </div>
            }

        } else {
            return (
                <nav className="navigation__menu">
                    {this.getMenuItems(active)}
                </nav>
            );
        }
    }


    getMenuItems(active) {
        return (
            <ul>
                <li className={active === 'home' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('home')} to="/home">Home</Link>
                </li>
                <li className={active === 'about' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('about')} to="/about">About us</Link>
                </li>
                <li className={active === 'international' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('international')} to="/international">International</Link >
                </li>
                <li className={active === 'domestic' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('domestic')} to="/domestic">Domestic</Link >
                </li>
                <li className={active === 'contact-us' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('contact-us')} to="/contact-us">Contact us</Link >
                </li>
                <li className={active === 'inquiry' ? 'active' : ''}>
                    <Link onClick={() => this.handleNavigationClick('inquiry')} to="/inquiry">Inquiry</Link >
                </li>
            </ul>

        )
    }

    render() {
        return (
            <>
                <header>
                    <div className="brand__logo">
                        Travel Packer
                </div>
                    {this.getNavigation()}
                </header >
                {this.getMobileMenu()}
            </>
        );
    }
}