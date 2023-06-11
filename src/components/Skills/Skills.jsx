

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Skills.css';


export const Skills = ( { homeIcons } ) => {
    AOS.init();

    return (

        <div className="skills__rack">

            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={250}
                totalSlides={Object.keys( homeIcons ).length}
                orientation='horizontal'
                visibleSlides={6}
                isIntrinsicHeight='true'
                infinite='true'
                isPlaying='true'
                className='carousel__container'
            >
                <Slider className="icon__container">
                    {
                        Object.keys( homeIcons ).map( ( key, index ) => (

                            // <Slide index={index} key={key} className={`'slide__container' animate__animated ${index % 2 === 0 ? 'animate__fadeInDown' : 'animate__fadeInUp'}`}>
                            <Slide
                                index={index}
                                key={key}
                                className={`slide__container 
                                ${index % 2 === 0
                                        ? 'slide__container--bottom'
                                        : 'slide__container--top'}`}
                            >
                                <img
                                    className={`icon animate__animated 
                                    ${index % 2 === 0
                                            ? 'animate__fadeInDown'
                                            : 'animate__fadeInUp'}`
                                    }
                                    src={homeIcons[ key ].url}
                                    alt={homeIcons[ key ].description}
                                />
                                <span
                                    className={`icon__name
                                    ${index % 2 === 0
                                            ? 'icon__name--bottom'
                                            : 'icon__name--top'}`}
                                >
                                    {homeIcons[ key ].title}
                                </span>
                            </Slide>

                        ) )
                    }

                </Slider>
            </CarouselProvider>

            {/* <div className='"carousel__dot-group'>
                    <button className='carousel__dot carousel__dot--[slide] [carousel__dot--selected] [props.className]'></button>
                </div> */}
            {/* <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext> */}
            {/* <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {Object.keys( homeIcons ).map( ( key, index ) => (
                        <li className="glide__slide" key={key}>
                            <img
                                className={`icon animate__animated ${index % 2 === 0 ? 'animate__fadeInDown' : 'animate__fadeInUp'}`}
                                src={homeIcons[ key ].url}
                                alt={homeIcons[ key ].description}
                            />
                        </li>
                    ) )}
                </ul>
            </div> */}
        </div>


        // <article className='stack__rack'>

        //     {Object.keys( homeIcons ).map( ( key, index ) => (
        //         <img
        //             className={`icon animate__animated ${index % 2 === 0 ? 'animate__fadeInDown' : 'animate__fadeInUp'}`}
        //             src={homeIcons[ key ].url}
        //             alt={homeIcons[ key ].description}
        //             key={key}
        //         />
        //     ) )}

        // </article>

    )
}
