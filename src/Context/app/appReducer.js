import {
    SET_LOADING,
    SET_ISLOGED,
    SET_USER
}from '../types'


const AppReducer= (state,action)=>{
    switch(action.type){
        case SET_LOADING:
            let prevLoad=state.loading
            return {
                ...state,
                loading:!prevLoad
            }
            case SET_ISLOGED:
                let prevLogged=state.isLogged
                return {
                    ...state,
                    isLogged:!prevLogged
                }
            case SET_USER:
                    return {
                        ...state,
                        user:action.payload
                    }
        default:
        return state;
    }
    
    }
    export default AppReducer;