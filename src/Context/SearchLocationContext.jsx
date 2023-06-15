import { createContext , useEffect, useReducer } from "react";

const INITIAL_STATE ={
    opens: JSON.parse(localStorage.getItem("falseStates")) || false

}

export const SearchLocationContext = createContext(INITIAL_STATE)

const SearchLocationReducer = ( state , action ) =>{
    switch(action.type){
        case "OPEN":
            return{
                opens: true
            }
        case "CLOSE":
            return{
                opens: false
            }
        default:{
            return state
        }
    }
}

export const SearchLocationContextProvider = ( { children }) =>{
    const [ state , dispatchs ] = useReducer(SearchLocationReducer , INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("falseStates" , state.opens)
        
    } ,[state.opens])

    return(
        <SearchLocationContext.Provider
            value={{ opens: state.opens , dispatchs }}
        >
            {children}
        </SearchLocationContext.Provider>
    )
}

