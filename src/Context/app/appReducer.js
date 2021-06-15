import {
    SET_LOADING
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        case SET_LOADING:
            let prevLoad=state.loading
            return {
                ...state,
                loading:!prevLoad
            }
        default:
        return state;
    }
    
    }
    export default AppReducer;