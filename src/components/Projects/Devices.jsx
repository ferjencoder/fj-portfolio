

import { useState } from 'react';
import './Projects.css'

export const Devices = () => {
    const [ currentProject, setCurrentProject ] = useState( 0 );
    const [ rotationDegreeTop, setRotationDegreeTop ] = useState( 0 );
    const [ rotationDegreeLow, setRotationDegreeLow ] = useState( 0 );

    const projects = [
        { name: 'Project 1', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1686533830/portfolio/video/static-low_sanazm.gif' },
        { name: 'Project 2', gif: 'https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif' },
        { name: 'Project 3', gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDU3b3FpNGM5ZHB0cDQ3aDFhamoxMDZwMG95b2ZkeDkwOGc2eHMxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/470MxBwLQsgwRFO6bx/giphy.gif' },
        { name: 'Project 4', gif: 'https://media.giphy.com/media/hVrYqWSpU8GPHreQX0/giphy.gif' },
        { name: 'Project 5', gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnVlM3BkMWQzd2p4Y2o5c3hiNXE0a3l0ZGFzNjN0M2hwc3BxdzZ3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vWTs1YICbpa97bEbyp/giphy.gif' }

        // <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/vWTs1YICbpa97bEbyp" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/vWTs1YICbpa97bEbyp">via GIPHY</a></p>
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
                        src="https://res.cloudinary.com/ferjen/image/upload/v1687048724/portfolio/projects/devices/DreamShaper-TV-Space-removebg_cyehfy.png"
                        alt="" />
                    <img
                        className='veggieBox__video'
                        src={projects[ currentProject ].gif}
                        alt="" />
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
                            </div>
                        </button>

                        <button
                            className='btn-project'
                            onClick={prevProject}
                            style={{ transform: `rotate(${rotationDegreeLow}deg)` }}
                        >
                            MORE INFO
                        </button>

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
