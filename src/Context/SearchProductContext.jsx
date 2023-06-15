import { createContext , useEffect, useReducer } from "react";

const INITIAL_STATE ={
    open: JSON.parse(localStorage.getItem("falseState")) || false
}

export const SearchProductContext = createContext(INITIAL_STATE)

const SearchProductReducer = ( state , action ) =>{
    switch(action.type){
        case "OPEN":
            return{
                open: true
            }
        case "CLOSE":
            return{
                open: false
            }
        default:{
            return state
        }
    }
}

export const SearchProductContextProvider = ( { children }) =>{
    const [ state , dispatch ] = useReducer(SearchProductReducer , INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("falseState" , state.open)
        
    } ,[state.open])

    return(
        <SearchProductContext.Provider
            value={{ open:state.open , dispatch }}
        >
            {children}
        </SearchProductContext.Provider>
    )
}

