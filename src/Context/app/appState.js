import React,{Children, useReducer,useEffect} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {
SET_LOADING
} from '../types'


export default function AppState(props){
    const initState={
        user:{},
        loading:false,
        records:[],
        isLogged:false
     
        
    }
const [state,dispatch]=useReducer(appReducer,initState)

const setLoading=()=>dispatch({type:SET_LOADING})

return <AppContext.Provider
value={{
    user:state.user,
    loading:state.loading,
    records:state.records,
    isLogged:state.isLogged,
    setLoading
}}
>

    {props.children}
</AppContext.Provider>

}
