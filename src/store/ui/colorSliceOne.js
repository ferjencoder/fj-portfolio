

import { createSlice } from '@reduxjs/toolkit';

export const colorSliceOne = createSlice( {
    name: 'colorChangerOne',
    initialState: {
        colors: [ '#70bd40', '#47eaff', '#8e57e7', '#c652e3', '#f84e69', '#ff6347', '#fead56' ],
        colorIndex: 0
    },
    reducers: {
        nextColorOne: ( state ) => {
            state.colorIndex = ( state.colorIndex + 1 ) % state.colors.length;
        },
    },
} );

export const { nextColorOne } = colorSliceOne.actions;

export const selectColorOne = state => state.colorChangerOne.colors[ state.colorChangerOne.colorIndex ];

