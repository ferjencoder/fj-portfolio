

import './AnimatedLetter.css';

export const AnimatedLetter = ( { letter, isWobbly, startWobblyAnimation } ) => (
    <span
        onMouseEnter={startWobblyAnimation}
        // className={`ripple blend--difference ${isWobbly ? 'animate__animated animate__swing animate__repeat-3' : ''}`}
        className={`text__wobbly--outline blend--difference ${isWobbly ? 'animate__animated animate__swing animate__repeat-3' : ''}`}
    >
        {letter}
    </span>
);

