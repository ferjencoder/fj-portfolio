

import { useTranslation } from 'react-i18next'
import './Projects.css'
import { Devices } from './Devices';

export const Projects = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='projects__container'>

            <section>
                <h1>Projects</h1>
            </section>

            <section className='tv__container'>
                <Devices className='devices__container' />
            </section>
        </div>
    )
}

{/* <p>{t( "about.intro" )}</p> */ }
{/*
            <ul>
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
*/}