

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Footer } from '../Footer';
import { WaveBottom, WaveTop, WaveTopTwo } from '../Waves';
import './Home.css'
import { About } from '../About';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


export const Home = () => {
    AOS.init();
    const [ t ] = useTranslation( "global" );

    const numberP = import.meta.env.PHONE;

    const colorIndex = useSelector( state => state.colorTwo.colorIndex );
    const colors = useSelector( state => state.colorTwo.colors );
    const currentColor = colors[ colorIndex ];

    const [ isWobbly, setIsWobbly ] = useState( false );

    const startWobblyAnimation = () => {
        setIsWobbly( true );
    };

    const stopWobblyAnimation = () => {
        setIsWobbly( false );
    };

    return (
        <div className='home__main-container'>
            <div className='home__wave'><WaveTop /></div>

            <section className='home__container'>
                <article className="hero__text">
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">H</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">E</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">L</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">L</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">O!</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className={`text__wobbly--outline blend-difference ${isWobbly ? 'animate__animated animate__swing animate__repeat-3' : ''}`}>,&nbsp;</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">I</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className={`text__wobbly--outline blend-difference ${isWobbly ? 'animate__animated animate__swing animate__repeat-3' : ''}`}>'</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">M</span>
                </article>
                <article className="hero__text">
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">F</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">E</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">R</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">N</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">A</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">N</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">D</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">A&nbsp;</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">J</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">E</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">N</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">S</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">E</span>
                    <span
                        onMouseEnter={startWobblyAnimation}
                        className="text__wobbly--outline blend--difference">N</span>
                    {/* <span
                        onMouseEnter={startWobblyAnimation}
                        className={`text__wobbly--outline ${isWobbly ? 'animate__animated animate__bounce animate__repeat-3' : ''}`}> ☺ </span> */}
                </article>
                <h2 className='animate__animated animate__lightSpeedInRight'>full stack developer</h2>
            </section>

            <div className='stack__container'>
                <div className='stack__rack'>
                    <div className=''>
                        <div className="link__container">
                            <Link
                                className="home__link"
                                to="https://www.linkedin.com/in/ferjen/"
                                target="_blank"
                            >
                                <FaLinkedinIn />

                            </Link>

                            <Link
                                className="home__link"
                                to="https://github.com/ferjencoder"
                                target="_blank"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className="home__link"
                                to={`https://api.whatsapp.com/send?phone=${numberP}`}
                                target="_blank"
                            >
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='home__wave'>
                    <WaveBottom currentColor={currentColor} />
                    <WaveTopTwo currentColor={currentColor} />
                </div>
            </div>
            <About />
            <div className='stack__container'>

                <div className='stack__rack'>
                    <img className='icon animate__animated animate__fadeInDown' src="https://res.cloudinary.com/ferjen/image/upload/v1685936192/portfolio/logo/javascript_daoqxb.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInUp' src="https://res.cloudinary.com/ferjen/image/upload/v1685936192/portfolio/logo/i18n_fhbz1b.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInDown' src="https://res.cloudinary.com/ferjen/image/upload/v1685936820/portfolio/logo/sass_clluqy.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInUp' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/redux-action_wzzon0.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInDown' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/css_hfquvx.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInUp' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/git_ghblra.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInDown' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/react_bncfb8.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInUp' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/firebase_pv3eph.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInDown' src="https://res.cloudinary.com/ferjen/image/upload/v1685936191/portfolio/logo/html_lnw9zc.svg" alt="" />
                    <img className='icon animate__animated animate__fadeInUp' src="https://res.cloudinary.com/ferjen/image/upload/v1685936820/portfolio/logo/nodejs_y0el5r.svg" alt="" />
                </div>

                <div className='home__wave'>
                    <WaveBottom currentColor={currentColor} />
                    <WaveTopTwo currentColor={currentColor} />

                </div>
            </div>
        </div>
    )
}
