

import { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

// Styles
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
    const [ darkMode, setDarkMode ] = useState( localStorage.getItem( 'darkMode' ) === 'true' );

    // This hook runs once on component mount to set the initial theme.
    useEffect( () => {
        const isDarkMode = localStorage.getItem( 'darkMode' ) === 'true';
        setDarkMode( isDarkMode );
    }, [] );

    useEffect( () => {

        localStorage.setItem( 'darkMode', darkMode.toString() );
        document.body.className = darkMode ? styles[ 'dark-mode' ] : styles[ 'light-mode' ];

    }, [ darkMode ] );

    return (
        <button
            onClick={() => setDarkMode( !darkMode )}
            className={`${styles[ 'toggle-btn' ]} ${darkMode ? styles[ 'dark-mode' ] : styles[ 'light-mode' ]}`}
        >
            {darkMode ? <BsMoonFill /> : <BsSunFill />}
        </button>
    );
};
