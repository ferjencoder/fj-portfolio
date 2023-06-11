

import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextColorOne } from '../../store/ui/colorSliceOne';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './Fishes.css';


export const Fishes = () => {
    // const dispatch = useDispatch();
    // const colorIndex = useSelector( ( state ) => state.colorOne.colorIndex );
    // const colors = useSelector( ( state ) => state.colorOne.colors );
    // const currentColor = colors[ colorIndex ];

    // useEffect( () => {
    //     const tsparticles = document.querySelector( '.particles-canvas' );
    //     const tsparticlesStops = tsparticles.querySelectorAll( 'stop' );
    //     tsparticlesStops.forEach( ( stop ) => {
    //         stop.style.animation = 'colorAnimation 5s infinite linear';
    //     } );
    // }, [ currentColor ] );

    const particlesInit = useCallback( async ( engine ) => {
        await loadFull( engine );
    }, [] );

    const particlesLoaded = useCallback( async ( container ) => {
        // console.log( container );
    }, [] );

    const handleColorChange = () => {
        dispatch( nextColorOne() );
    };

    return (
        <div className="particles-wrapper">
            <Particles
                className="particles-canvas"
                width="100%"
                height="100%"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#26203c',
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};