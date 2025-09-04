import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstAnimation: false
}

export const firstAnimationSlice = createSlice({
    name: 'firstAnimation',
    initialState,
    reducers: {
        setFirstAnimation: (state, action) => {
            state.firstAnimation = action.payload;
        }
    }
})

export const { setFirstAnimation } = firstAnimationSlice.actions
export default firstAnimationSlice.reducer