import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    heroSectionAnimation: false
}

export const animationControllerSlice = createSlice({
    name: 'animationController',
    initialState,
    reducers: {
        setHeroSectionAnimation: (state, action) => {
            state.heroSectionAnimation = action.payload;
        }
    }
})

export const { setHeroSectionAnimation } = animationControllerSlice.actions
export default animationControllerSlice.reducer