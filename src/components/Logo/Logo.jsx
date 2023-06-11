

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextColorOne } from '../../store/ui/colorSliceOne';

export const Logo = () => {
    const dispatch = useDispatch();
    const colorIndex = useSelector( state => state.colorOne.colorIndex );
    const colors = useSelector( state => state.colorOne.colors );
    const currentColor = colors[ colorIndex ];

    // useEffect( () => {
    //     const interval = setInterval( () => {
    //         dispatch( nextColorOne() );
    //     }, 5000 ); // Change color every 5 seconds

    //     return () => clearInterval( interval ); // Clean up on unmount
    // }, [ dispatch ] );

    // useEffect( () => {
    //     document.querySelectorAll( '.gradientStop' ).forEach( stop => {
    //         stop.setAttribute( 'stop-color', currentColor );
    //         stop.style.transition = 'stop-color 5s';
    //     } );
    // }, [ currentColor ] );

    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 23.8 23.8"
            style={{ enableBackground: "new 0 0 23.8 23.8", transition: 'fill 5s' }}
            xmlSpace="preserve"
        >
            <path
                style={{ fill: '#0d0b14', transition: 'fill 5s' }}
                d="M18.1,0.4H5.6c-2.9,0-5.2,2.3-5.3,5.2v12.5c0,2.9,2.4,5.3,5.3,5.3h17.7V5.6C23.4,2.7,21,0.4,18.1,0.4z
                M10.9,7.1H7.8v2.5h2.9v3H7.8v7H4.7V4.1h6.2V7.1z M19.1,15.7c0,0.8-0.2,1.5-0.5,2.1s-0.8,1.1-1.3,1.4s-1.2,0.5-2,0.5
                c-0.7,0-1.3-0.1-1.9-0.4s-1-0.7-1.4-1.2s-0.5-1.2-0.5-2v-3.9h3.1v3.7c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.2,0.5,0.2
                c0.5,0,0.7-0.3,0.7-0.9V4.1h3.1V15.7z"
            />
        </svg>
    );
};
