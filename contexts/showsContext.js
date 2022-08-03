import React, { createContext, useState, useEffect } from 'react'; 
export const ShowsContext = createContext({}); 

let initialState = {
    isActive: 4273
}


export const ShowsContextProvider = (props) => {
    const [ shows, setShows ] = useState([]);
    const [ isActive, setIsActive ] = useState(initialState.isActive);
   
    useEffect(() => {
        fetch("https://ronan-oleary.com/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(data => setShows(data))
    },[])


    let state = {
        shows,
        isActive
    };

    let handlers = {
        setShows,
        setIsActive
    }; 

    const provider = [{state, handlers}]
    return(
        <ShowsContext.Provider value={provider}>
            {props.children}
        </ShowsContext.Provider>
    )
}
