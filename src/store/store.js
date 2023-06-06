

import { configureStore } from '@reduxjs/toolkit';
import { colorSliceOne } from './';
import { colorSliceTwo } from './';


export const store = configureStore( {

    reducer: {
        colorOne: colorSliceOne.reducer,
        colorTwo: colorSliceTwo.reducer
    },

} );