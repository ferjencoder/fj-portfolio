

import { useEffect } from 'react';

import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";


import './Particles.css';

export const Particles = () => {

    useEffect( () => {

        const loadParticles = async () => {
            await loadFull( tsParticles );

            await tsParticles.load( 'tsparticles', {
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 1200,
                        },
                    },
                    color: {
                        value: '#e45b5d',
                        animation: {
                            enable: true,
                            speed: 5,
                            sync: true,
                        },
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 1,
                    },
                    size: {
                        value: 6,
                        random: {
                            enable: true,
                            minimumValue: 3,
                        },
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 3,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        warp: true,
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        // onclick: { enable: true, mode: "pause" },
                        onclick: { enable: true, mode: "push" },
                        onhover: {
                            enable: true,
                            mode: "repulse",
                            parallax: { enable: false, force: 60, smooth: 10 }
                        },
                        resize: true
                    },
                    modes: {
                        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        push: { particles_nb: 24 },
                        remove: { particles_nb: 2 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                retina_detect: true,
                background: {
                    color: '#0d0b14',
                },
                fullScreen: {
                    enable: false
                },
            } );
        };

        loadParticles();
    }, [] );

    return <div id="tsparticles" />;
};


// import { useEffect } from 'react';

// import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
// import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

// import './Particles.css';

// export const Particles = () => {

//     useEffect( () => {

//         const loadParticles = async () => {
//             await loadFull( tsParticles );

//             await tsParticles.load( "tsparticles", {

//                 fpsLimit: 60,
//                 particles: {
//                     number: {
//                         value: 80,
//                         density: {
//                             enable: true,
//                             value_area: 800
//                         }
//                     },
//                     color: {
//                         value: "#f00",
//                         animation: {
//                             enable: true,
//                             speed: 20,
//                             sync: true
//                         }
//                     },
//                     shape: {
//                         type: "circle"
//                     },
//                     opacity: {
//                         value: 1
//                     },
//                     size: {
//                         value: 6,
//                         random: {
//                             enable: true,
//                             minimumValue: 3
//                         },
//                         animation: {
//                             enable: true,
//                             speed: 5,
//                             minimumValue: 3,
//                             sync: false
//                         }
//                     },
//                     move: {
//                         enable: true,
//                         speed: 6,
//                         direction: "none",
//                         random: false,
//                         straight: false,
//                         out_mode: "out",
//                         warp: true
//                     }
//                 },
//                 interactivity: {
//                     detect_on: "canvas",
//                     events: {
//                         resize: true
//                     }
//                 },
//                 retina_detect: true,
//                 background: {
//                     color: "#0d0b14"
//                 }




//             } );
//         };

//         loadParticles();
//     }, [] );

//     return <div id="tsparticles" />;
// };
