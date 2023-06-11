

import { useTranslation } from 'react-i18next'
import './Projects.css'

export const Projects = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='perojects__container'>
            <h1>Projects</h1>
            <p>{t( "about.intro" )}</p>
        </div>
    )
}