

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextColorOne } from '../../store/ui/colorSliceOne';
import './Scrollbar.css';

export const Scrollbar = () => {
  const dispatch = useDispatch();
  const colorIndex = useSelector((state) => state.colorOne.colorIndex);
  const colors = useSelector((state) => state.colorOne.colors);
  const currentColor = colors[colorIndex];
  const scrollbarRef = useRef(null);

  useEffect(() => {

    const interval = setInterval(() => {
      dispatch(nextColorOne());
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount

  }, [dispatch]);

  useEffect(() => {
    
    const scrollbarThumb = scrollbarRef.current;
    if (scrollbarThumb) {
      scrollbarThumb.style.background = currentColor;
    }
  }, [currentColor]);

  return (
    <style>
      {`
        ::-webkit-scrollbar {
          width: 0.8em;
        }

        ::-webkit-scrollbar-track {
          background: var(--clr-black);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${currentColor};
        }
      `}
    </style>
  );
};


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { nextColorOne } from '../../store/ui/colorSliceOne';


// export const Scrollbar = () => {
//     const dispatch = useDispatch();
//     const colorIndex = useSelector( state => state.colorOne.colorIndex );
//     const colors = useSelector( state => state.colorOne.colors );
//     const currentColor = colors[ colorIndex ];

//     useEffect( () => {
//         const interval = setInterval( () => {
//             dispatch( nextColorOne() );
//         }, 5000 ); // Change color every 5 seconds

//         return () => clearInterval( interval ); // Clean up on unmount
//     }, [ dispatch ] );

//     useEffect( () => {
//         document.querySelectorAll( '.gradientStop' ).forEach( stop => {
//             stop.setAttribute( 'stop-color', currentColor );
//             stop.style.transition = 'stop-color 5s';
//         } );
//     }, [ currentColor ] );


//     return (
//         <style>
//             {`
//             ::-webkit-scrollbar {
//                 width: 0.5em;
//               }
              
//             ::-webkit-scrollbar-track {
//               background: var(--clr-black);
//             }
              
//             ::-webkit-scrollbar-thumb {
//             background: ${currentColor};
//             transition: background 0.3s;
//             }

//             ::-webkit-scrollbar-thumb:hover {
//                 background: ${currentColor};
//             }
//       `}
//         </style>
//     );
// };
