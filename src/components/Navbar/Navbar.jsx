

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { nextColorOne } from '../../store/ui/colorSliceOne';
import { Footer } from '../Footer';
import { Logo } from '../Logo';
import './Navbar.css'

export const Navbar = () => {
    const [ open, setOpen ] = useState( "" );
    const dispatch = useDispatch();
    const colorIndex = useSelector( state => state.colorOne.colorIndex );
    const colors = useSelector( state => state.colorOne.colors );
    const currentColor = colors[ colorIndex ];

    useEffect( () => {
        const interval = setInterval( () => {
            dispatch( nextColorOne() );
        }, 5000 ); // Change color every 5 seconds

        return () => clearInterval( interval ); // Clean up on unmount
    }, [ dispatch ] );

    useEffect( () => {
        document.querySelectorAll( '.navbar__link' ).forEach( stop => {
            stop.style.color = currentColor;
            stop.style.transition = 'color 5s';
        } );
    }, [ currentColor ] );

    const logo = 'https://res.cloudinary.com/ferjen/image/upload/v1685848510/portfolio/logo/fj-logo_red_24x24_pixxr4.svg';

    const openClose = () => {
        open === "navbar__is-active" ? setOpen( "" ) : setOpen( "navbar__is-active" );
    };

    const closeMenu = () => {
        setOpen( "" );
    };

    return (
        <>
            <nav className="navbar__container">

                <NavLink className={`navbar__logo ${open}`} to="/home">
                    <Logo />
                </NavLink>

                <div className="navbar__link__container">

                    {/* <NavLink className="navbar__link logo__nav" to="/home">Home</NavLink> */}

                    <NavLink className="navbar__link" to="/about">About Me</NavLink>

                    <NavLink className="navbar__link" to="/portfolio">Portfolio</NavLink>

                    <NavLink className="navbar__link" to="/contact">Contact</NavLink>

                </div>
                <button
                    className={`navbar__hamburger ${open}`}
                    onClick={() => {
                        openClose();
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <nav className="navbar__mobile">
                <div className={`navbar__mobile__container ${open}`}>
                    <div className="mobile__link">

                        <NavLink className="navbar-mobile__link" to="/home" onClick={closeMenu}>Home</NavLink>

                        <NavLink className="navbar-mobile__link" to="/about" onClick={closeMenu}>About Me</NavLink>

                        <NavLink className="navbar-mobile__link" to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>

                        <NavLink className="navbar-mobile__link" to="/contact" onClick={closeMenu}>Contact</NavLink>

                    </div>
                    <div className="footer-nav">
                        <Footer />
                    </div>
                </div>
            </nav>
        </>
    );
};
