import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { globalRoutes } from './../../shared/constants/global.constants'
import './navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            active: 'home',
            isMobileMode: this.isMobileMode(window.innerWidth),
            showMobileMenu: false
        };
    }

    isMobileMode(width) {
        return width <= 950;
    }

    handleHeaderWidthChange($event) {
        const { innerWidth } = $event.currentTarget;
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
        this.setState({ ...this.state, showMobileMenu: !this.state.showMobileMenu })
    }

    getMobileMenu() {
        const { showMobileMenu, active, isMobileMode } = this.state;
        const menu = 'menu__container '.concat((showMobileMenu && isMobileMode)
            ? '' : 'menu__container--hide');

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
                    <div className="navigation__menu navigation__menu--mobile">
                        <svg className="icon__burger" id="icon-burger" viewBox="0 0 24 24" fill="white"
                            onClick={() => this.handleMobileMenu()}>
                            <rect y="2" width="30" height="2" rx="1"></rect>
                            <rect y="20" width="30" height="2" rx="1"></rect>
                            <rect y="8" width="30" height="2" rx="1"></rect>
                            <rect y="14" width="30" height="2" rx="1"></rect>
                        </svg>
                    </div>
                );
            } else {
                return <div className="icon--close" onClick={() => this.handleMobileMenu()}> X </div>
            }

        } else {
            return (
                <nav className="navigation__menu">
                    <ul>
                        {this.getMenuItems(active)}
                    </ul>
                </nav>
            );
        }
    }


    getMenuItems(active) {
        const { pathname } = this.props.location;
        const paths = globalRoutes;
        const list = paths.map((path, index) =>
            <li className={pathname === path.route ? 'active' : ''} key={index}>
                <Link to={path.route}>{path.label}</Link >
            </li>);

        return (
            <>
                {list}
            </>
        );
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

export default withRouter(Navbar);