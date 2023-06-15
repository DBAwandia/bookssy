import { createContext , useReducer } from "react";

const INITIAL_STATE ={
    open: false
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

    return(
        <SearchProductContext.Provider
            value={{ open:state.open , dispatch }}
        >
            {children}
        </SearchProductContext.Provider>
    )
}

