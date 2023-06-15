import { createContext , useReducer } from "react";

const INITIAL_STATE ={
    opens: false
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

    return(
        <SearchLocationContext.Provider
            value={{ opens: state.opens , dispatchs }}
        >
            {children}
        </SearchLocationContext.Provider>
    )
}

