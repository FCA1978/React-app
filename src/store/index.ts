import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/modules/counter";
import recommendReducer from '@/views/discover/c-views/recommand/store/recommend'
import playerReducer from '@/views/player/store/player'
import { useSelector , TypedUseSelectorHook  ,useDispatch,shallowEqual } from 'react-redux'


const store = configureStore({
    reducer:{
        counter:counterReducer,
        recommend:recommendReducer,
        player:playerReducer
    }
})



type GetStateInType = typeof store.getState;
export type IRootState = ReturnType<GetStateInType>
type DispatchType = typeof store.dispatch;

// useAppSelector的hook
export const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
