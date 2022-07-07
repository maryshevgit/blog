import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        inputName: ''
    },
    reducers: {
        addName(state, action) {
            state.inputName = action.payload
        }
    }
})

export const {addName} = nameSlice.actions

export default nameSlice.reducer;