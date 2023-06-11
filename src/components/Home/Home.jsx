

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { About } from '../About';
import { WaveBottom, WaveTop, WaveTopTwo } from '../Waves';
import './Home.css'
import { AnimatedLetter } from '../AnimatedLetter';
import { Navbar } from '../Navbar/Navbar';
import { Projects } from '../Projects';
import { Skills } from '../Skills/Skills';
import { Fishes } from '../Particles';
import AOS from 'aos';


export const Home = () => {

    // Initialize animations, translations and state variables
    AOS.init();
    const [ t ] = useTranslation( "global" );
    const [ isWobbly, setIsWobbly ] = useState( false );

    // Get greetings and icons
    const greeting1 = t( "home.greeting1" );
    const greeting2 = t( "home.greeting2" );
    const greeting3 = t( "home.greeting3" );
    const homeIcons = t( 'homeIcons', { returnObjects: true } );


    // Get environment and color information
    const numberP = import.meta.env.PHONE;
    const colorIndex = useSelector( state => state.colorTwo.colorIndex );
    const colors = useSelector( state => state.colorTwo.colors );
    const currentColor = colors[ colorIndex ];

    // Functions to start and stop wobbly animation
    const startWobblyAnimation = () => setIsWobbly( true );
    const stopWobblyAnimation = () => setIsWobbly( false );


    return (

        <section className='home__main-container'>
            <Navbar />
            <section className='home__wave'><WaveTop /></section>

            <section className='home__container'>

                {/* Use map function to render each letter individually */}
                <article className="hero__text">
                    {
                        greeting1.split( '' ).map( ( letter, index ) => (
                            <AnimatedLetter
                                key={index}
                                letter={letter}
                                isWobbly={isWobbly}
                                startWobblyAnimation={startWobblyAnimation}
                            />
                        ) )
                    }
                </article>
                <article className="hero__text">
                    {
                        greeting2.split( '' ).map( ( letter, index ) => (
                            <AnimatedLetter
                                key={index}
                                letter={letter}
                                isWobbly={isWobbly}
                                startWobblyAnimation={startWobblyAnimation}
                            />
                        ) )
                    }
                </article>

                <h2 className='animate__animated animate__lightSpeedInRight'>{greeting3}</h2>

            </section>

            <section className='stack__container'>
                <div className='stack__rack'>
                    <div className=''>
                        <div className="link__container">
                            <a
                                className="home__link"
                                to="https://www.linkedin.com/in/ferjen/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />

                            </a>

                            <a
                                className="home__link"
                                to="https://github.com/ferjencoder"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                className="home__link"
                                to={`https://api.whatsapp.com/send?phone=${numberP}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='home__wave'>
                    <WaveBottom currentColor={currentColor} />
                    <WaveTopTwo currentColor={currentColor} />
                </div>
            </section>

            <About />

            <section className='stack__container'>

                <Skills homeIcons={homeIcons} />

                {/* <div className='stack__rack'>
                    {Object.keys( homeIcons ).map( ( key, index ) => (
                        <img
                            className={`icon animate__animated ${index % 2 === 0 ? 'animate__fadeInDown' : 'animate__fadeInUp'}`}
                            src={homeIcons[ key ].url}
                            alt={homeIcons[ key ].description}
                            key={key}
                        />
                    ) )}
                </div> */}

                <div className='home__wave'>
                    <WaveBottom currentColor={currentColor} />
                    <WaveTopTwo currentColor={currentColor} />

                </div>
            </section>

            <Projects />

            <section className='stack__container'>
                <div className='stack__rack'>
                    <div className=''>
                        <div className="link__container">
                            <a
                                className="home__link"
                                to="https://www.linkedin.com/in/ferjen/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />

                            </a>

                            <a
                                className="home__link"
                                to="https://github.com/ferjencoder"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                className="home__link"
                                to={`https://api.whatsapp.com/send?phone=${numberP}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='home__wave'>
                    <WaveBottom currentColor={currentColor} />
                    <WaveTopTwo currentColor={currentColor} />
                </div>
            </section>

            <section className='fishes__container'>
                <Fishes />
            </section>

        </section>
    )
};
