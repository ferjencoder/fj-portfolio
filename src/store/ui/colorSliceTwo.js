

import { createSlice } from '@reduxjs/toolkit';

export const colorSliceTwo = createSlice( {
    name: 'colorChangerTwo',
    initialState: {
        colors: [ '#fead56', '#70bd40', '#47eaff', '#8e57e7', '#c652e3', '#f84e69', '#ff6347' ],
        colorIndex: 0
    },
    reducers: {
        nextColorTwo: ( state ) => {
            state.colorIndex = ( state.colorIndex + 1 ) % state.colors.length;
        },
    },
} );

export const { nextColorTwo } = colorSliceTwo.actions;

export const selectColorTwo = state => state.colorChangerTwo.colors[ state.colorChangerTwo.colorIndex ];

