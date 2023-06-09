

import { useTranslation } from 'react-i18next'
import './About.css'

export const About = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container'>
            <h1>{t( "about.title" )}</h1>
            <p>{t( "about.intro" )}</p>
        </div>
    )
}
