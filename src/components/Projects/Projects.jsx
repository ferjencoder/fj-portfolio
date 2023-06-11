

import { useTranslation } from 'react-i18next'
import './Projects.css'

export const Projects = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='perojects__container'>

            <h1>Projects</h1>
            {/* <p>{t( "about.intro" )}</p> */}
            <ul>
                {/* <img
                        className='project__video'
                        src="https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif"
                        alt="" /> */}
                <li>
                    <h2>Veggie Box</h2>
                </li>
                <li>
                    <h2>Entre Cortinas</h2>
                </li>
                <li>
                    <h2>Yeah Stretching</h2>
                </li>
                <li>
                    <h2>Veggie Box</h2>
                </li>
            </ul>
        </div>
    )
}