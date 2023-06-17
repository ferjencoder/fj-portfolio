

import { useState } from 'react';
import './Projects.css'

export const Devices = () => {
    const [ currentProject, setCurrentProject ] = useState( 0 );
    const [ rotationDegreeTop, setRotationDegreeTop ] = useState( 0 );
    const [ rotationDegreeLow, setRotationDegreeLow ] = useState( 0 );

    const projects = [
        { name: 'Project 1', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif' },
        { name: 'Project 2', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1686533830/portfolio/video/static-low_sanazm.gif' },
        { name: 'Project 2', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1686533830/portfolio/video/static-low_sanazm.gif' },
        // { name: 'Project 3', gif: 'https://res.cloudinary.com/ferjen/video/upload/v1682158301/portfolio/video/ferJen_iyvdi3.mp4' },
        // Add more projects here...
    ];

    const nextProject = () => {
        setCurrentProject( ( currentProject + 1 ) % projects.length );
        setRotationDegreeTop( rotationDegreeTop + 30 );
    };

    const prevProject = () => {
        setCurrentProject( ( currentProject - 1 + projects.length ) % projects.length );
        setRotationDegreeLow( rotationDegreeLow - 30 );
    };

    return (
        <div>
            <div className='project__container'>
                <div className='laptop__container'>
                    <img
                        className='laptop__image'
                        src="https://res.cloudinary.com/ferjen/image/upload/v1687033742/portfolio/projects/devices/tv-violet-space_oqdm63.png"
                        alt="" />
                    <img
                        className='veggieBox__video'
                        src={projects[ currentProject ].gif}
                        alt="" />
                    {/* <video className='veggieBox__video' src="https://res.cloudinary.com/ferjen/video/upload/v1686544154/portfolio/video/FJ-Intro_vk7pt1.mp4" autoPlay></video> */}
                    <div className='video-overlay'></div>
                    <div className='tv-btn__container'>
                        <button
                            className='tv-btn'
                            onClick={nextProject}
                            style={{ transform: `rotate(${rotationDegreeTop}deg)` }}
                        >
                            <div className='btn-dot__container'>
                                <div>
                                    <img
                                        className='tv-btn__image'
                                        src="https://res.cloudinary.com/ferjen/image/upload/v1687042392/portfolio/projects/devices/tv-knob_oyd2wf.png" alt="" />
                                </div>
                                {/* <div className='dot dot-1'></div>
                                <div className='dot dot-2'></div>
                                <div className='dot dot-3'></div>
                                <div className='dot dot-4'></div> */}
                            </div>
                        </button>

                        <button
                            className='btn-project'
                            onClick={prevProject}
                            style={{ transform: `rotate(${rotationDegreeLow}deg)` }}
                        >
                            MORE INFO
                            {/* <img
                            className='btn-next--btn'
                            src="https://res.cloudinary.com/ferjen/image/upload/v1686529555/portfolio/projects/devices/TV-btn_rb1rww.png"
                            alt="" /> */}
                        </button>

                        {/* <button
                        className='btn-next btn-next--low'
                        onClick={prevProject}
                        style={{ transform: `rotate(${rotationDegreeLow}deg)` }}
                    >
                        <img
                            className='btn-next--btn'
                            src="https://res.cloudinary.com/ferjen/image/upload/v1686529555/portfolio/projects/devices/TV-btn_rb1rww.png"
                            alt="" />
                    </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


// import { useState } from 'react';
// import './Projects.css'

// export const Devices = () => {
//     const [ currentProject, setCurrentProject ] = useState( 0 );
//     const [ rotationDegree, setRotationDegree ] = useState( 0 );

//     const projects = [
//         { name: 'Project 1', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif' },
//         { name: 'Project 2', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1686533830/portfolio/video/static-low_sanazm.gif' },
//         // Add more projects here...
//     ];

//     const nextProject = () => {
//         setCurrentProject( ( currentProject + 1 ) % projects.length );
//         setRotationDegree( rotationDegree + 30 );
//     };

//     const prevProject = () => {
//         setCurrentProject( ( currentProject - 1 + projects.length ) % projects.length );
//         setRotationDegree( rotationDegree - 30 );
//     };

//     return (

//         <div>
//             <div className='project__container'>

//                 <div className='laptop__container'>
//                     {/* <img
//                         className='laptop__image'
//                         src="https://res.cloudinary.com/ferjen/image/upload/v1686538133/portfolio/projects/devices/tv-violet-cl_k4pc6f.png"
//                         alt="" /> */}
//                     <img
//                         className='laptop__image'
//                         src="https://res.cloudinary.com/ferjen/image/upload/v1686527224/portfolio/projects/devices/iStock-1271796936-tv_adbiqg.png"
//                         alt="" />
//                     <img
//                         className='veggieBox__video'
//                         src="https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif"
//                         alt="" />
//                     <img
//                         className='veggieBox__video'
//                         src="https://res.cloudinary.com/ferjen/image/upload/v1686533830/portfolio/video/static-low_sanazm.gif"
//                         alt="" />
//                     <div className='video-overlay'></div>
//                     <button
//                         className='btn-next btn-next--top'
//                         onClick={nextProject}
//                         style={{ transform: `rotate(${rotationDegree}deg)` }}
//                     >
//                         <img
//                             className='btn-next--btn'
//                             src="https://res.cloudinary.com/ferjen/image/upload/v1686529555/portfolio/projects/devices/TV-btn_rb1rww.png"
//                             alt="" />
//                     </button>
//                     <button
//                         className='btn-next btn-next--low'
//                         onClick={prevProject}
//                         style={{ transform: `rotate(${rotationDegree}deg)` }}
//                     >
//                         <img
//                             className='btn-next--btn'
//                             src="https://res.cloudinary.com/ferjen/image/upload/v1686529555/portfolio/projects/devices/TV-btn_rb1rww.png"
//                             alt="" />
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }
