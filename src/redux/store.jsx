import { configureStore } from '@reduxjs/toolkit'
import firstAnimationReducer from './slices/firstAnimationSlice'
import animationControllerReducer from './slices/animationControllerSlice'

export const store = configureStore({
    reducer: {
        firstAnimation: firstAnimationReducer,
        animationController: animationControllerReducer
    },
})