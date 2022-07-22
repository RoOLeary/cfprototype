import React, { createContext, useState, useEffect, useCallback, useReducer } from 'react';
export const DataContext = createContext();
import useSessionStorage from '../hooks/useSessionStorage'

// sets up local reducer - am really only using this to determine when the list indexes is updated. 
// in real world, would be better off on a global state/reducer

const switchData = (state, action) => {
    
    switch (action.type) {
        case "setIndex":
            return {...state, index: action.payload};
        case "nextIndex":
            return {...state, next: action.payload};
        case "prevIndex":
            return {...state, previous: action.payload};
        case "toggleArrows":
            return {...state, show: action.payload};
        default:
            return state;
    }
}


const DataContextProvider = (props) => {
    // setting up the initial state for required variables

    

    const [index, setIndex] = useReducer(switchData, {
        index: 0,
        next: 1,
        previous: -1,
        show: false
    })
    const [shows, setShows] = useState(null);
    const [loading, setIsLoading] = useState(true);

    // bit mucky, but for simple UI demo, we check if there's an active value stored in session storage, otherwise set the default. 
    // irl, we'd probably want to use a reducer to handle this, but for simplicity, I'll use session storage.
    let saveCurrentActive = useSessionStorage('saveCurrentActive')
    const [isActive, setIsActive] = useState(saveCurrentActive ? saveCurrentActive : 'a1');
    
    // grab the data from shows.json
    // const getData = useCallback(async() => {
    //     try{
    //         const res = await fetch('http://localhost:3000/shows', {
    //             method: "GET",        
    //             headers : { 
    //                 'Accept': 'application/json',
    //             },
    //         });
    //         if (res.ok){
    //             const response = await res.json();
    //             setShows(response);
    //             setIsLoading(false);
    //         }
    //     } catch(err){
    //         console.log(err);
    //     };
    // }, []); 

    // this is the callback which updates the sliderList position when the active class is changed
    // by a user clicking back/forward buttons on browser. 

    const handleBackScroll = (id) => {
        let slideToActive = document.querySelector(`#${id}`);
        slideToActive.scrollIntoView({block: "center", behaviour: "smooth"});  
    }

    // actions to take on the popstate (back/forward)
    // finds current location based off urlSearchParans, then updates the value in locat storage
    // so's that it still works when a user refreshes.
    // if we've got the new active ID then we set that, and immediately after, trigger the cb
    // to update the sliderList position in the UI

    const onPopState = e => {
        
        let queryString, urlParams, browserButtons    
        queryString = window.location.search;
        urlParams = new URLSearchParams(queryString);
        browserButtons = urlParams.get('id');
        sessionStorage.setItem('saveCurrentActive', browserButtons);
    
        if(browserButtons){
            setIsActive(browserButtons); 
            handleBackScroll(browserButtons);  
        }
    }

    useEffect(() => {

        // right, so this fires when the index of the show changes - we check if there's anything in session storage
        // and if not, update it with the current Active ID
        if(window){
            if((!sessionStorage.getItem('saveCurrentActive'))){
                sessionStorage.setItem('saveCurrentActive', isActive);
            } else {

            // otherwise - do update id, but also trigger pushState to update the url with the correct id param
                sessionStorage.setItem('saveCurrentActive', isActive);
                history.pushState({page: ''},'','/all-components/?id=' + isActive);
                
            }
        }

        // Attachs listener for the popstate event. Basically if the user clicks the back/forward button,
        // it should trigger the update of Active id in local storage, and apply the apporpiate param (/?id=a1 etc) to 
        // the url.

        window.addEventListener('popstate', onPopState);

        return () => {
            window.removeEventListener('popstate', onPopState);
        };
        
    }, [index]);

    // fetches the data and kicks off the show!

    // useEffect(()=>{
    //     const timeoutId = setTimeout(() => {
    //         getData();
    //     }, 10);

    //     return () => {
    //       clearTimeout(timeoutId);
    //     }
        
    // },[]);


    // Cool so we set up the state and handlers which we'll pass into the context provider value
    // and then we'll be able to use the context consumesr to access all of the sweet, sweet data.

    let state = {
        index,
        loading,
        isActive,
    }
    let handlers = {
        setIndex,
        setIsLoading,
        setIsActive
    }

    return (
        <DataContext.Provider value={{ state, handlers }} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;