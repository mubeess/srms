import React,{Children, useReducer,useEffect} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {
SET_LOADING,
SET_ISLOGED,
SET_USER,
SET_STUDENT_RESULT
} from '../types'


export default function AppState(props){
    const initState={
        user:{},
        loading:false,
        records:[],
        isLogged:false,
        reciept:{},
        studentsResult:[]
     
        
    }
const [state,dispatch]=useReducer(appReducer,initState)

const setLoading=()=>dispatch({type:SET_LOADING})
const setIslogged=()=>dispatch({type:SET_ISLOGED})
const setUser=(user)=>dispatch({type:SET_USER,payload:user})
const setStudentsResults=(results)=>dispatch({type:SET_STUDENT_RESULT,payload:results})

return <AppContext.Provider
value={{
    user:state.user,
    loading:state.loading,
    records:state.records,
    isLogged:state.isLogged,
    setLoading,
    setIslogged,
    setUser,
    reciept:state.reciept,
    setStudentsResults,
    studentsResult:state.studentsResult
}}
>

    {props.children}
</AppContext.Provider>

}
