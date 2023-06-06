

//store de info sobre el ui, ej. si el modal está abierto

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice( {
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {

        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
    }
} );

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;