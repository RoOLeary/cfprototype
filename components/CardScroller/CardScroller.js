import React from 'react';
import { useEffect, useContext, useState, useCallback } from 'react';
import CardScrollerItem from './CardScrollerItem';
import CardScrollerActivePanel from './CardScrollerActivePanel';
import styled from 'styled-components';

/* Styled components */

const Container = styled.div`
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh; 
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(167,170,178,.5);
   
    @media screen and (max-width: 980px){
        flex-direction: column-reverse;
        justify-content: center;

    }
`;


const CardScrollerMenu = styled.ul`
    @media screen and (max-width: 980px){
        width: 280px;
        margin: 0 auto;
    }
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 500px;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    position: relative;
    
`;


const Loading = styled.h1`
    text-align: center;
    font-family: 'Montserrat',sans-serif;
    font-size: 16px;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

const Settings = styled.div`
       
`;

const HR = styled.hr`
    width: 80%;
    margin: 2em auto;
    border-top: 1px solid rgba(167,170,178,.5);
    @media screen and (max-width: 980px){   
        width: 100%;
    }
   
`;



const CardSelector = () => {
    
    // Using DataContext to hydrate the ShowSlide Component. The ShowActivePanel renders the relevant
    // content based on the active show as set by the shared context. 
    
    // By updating the context, am able to manipulate active states etc...without something like Redux. 
    // There are definitely some processing gotcha's here, but in this case seems like it will do the trick.
    const [shows, setShows] = useState({
        shows: [
            {
                "id": "a1",
                "title": "Tech",
                "episodes": 24,
                "product_image_url": "https://source.unsplash.com/450x750/?ai,tech"
            },
            {
                "id": "b2",
                "title": "Huang's World",
                "episodes": 12,
                "product_image_url": "https://source.unsplash.com/450x750/?code"
            },
            {
                "id": "c3",
                "title": "King of The Road",
                "episodes": 8,
                "product_image_url": "https://source.unsplash.com/450x750/?blockchain"
            },
            {
                "id": "d5",
                "title": "Last Chance High",
                "episodes": 15,
                "product_image_url": "https://source.unsplash.com/450x750/?javascript"
            },
            {
                "id": "e6",
                "title": "Love Industries",
                "episodes": 21,
                "product_image_url": "/images/loveindustries.jpg"
            },
            {
                "id": "f7",
                "title": "pilotweek",
                "episodes": 3,
                "product_image_url": "/images/pilotweek.jpg"
            },
            {
                "id": "a8",
                "title": "States of Undress",
                "episodes": 7,
                "product_image_url": "/images/statesofundress.jpg"
            },
            {
                "id": "b7",
                "title": "VICE",
                "episodes": 32,
                "product_image_url": "/images/vicehbo.jpg"
            },
            {
                "id": "c8",
                "title": "Woman",
                "episodes": 9,
                "product_image_url": "/images/woman.jpg"
            },
            {
                "id": "d9",
                "title": "VICE World of Sports",
                "episodes": 18,
                "product_image_url": "/images/worldofsports.jpg"
            }
        ]
    });

    const [loading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState('a1');

    const index = [{
        index: 0,
        next: 1,
        previous: -1,
        show: false
    }]

    // so this callback runs on load to check if the active menu element is offscreen, and if so, 
    // to slide on over to the active element. Have duplicated similar elsewhere, which makes me think a further
    // itereation could use this as a custom hook or other helper.  
   
    const checkForValue = useCallback(async(isActive) => {
        let slideToActive = document.querySelector(`#${isActive}`);
        if(slideToActive){
            slideToActive.scrollIntoView({ block: "center", behavior: "smooth"  });
        } 
    }, []); 
    
    // ahem...yeah, so 3/4 second delay to make sure the context has a chance to hydrate. Isn't ideal, but for
    // argument's sake, we can take this as spoofing a server repsonse.  

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            checkForValue(isActive);
        }, 750);

        return () => {
            clearTimeout(timeoutId);
        }
    },[isActive]);
        
    return(
        
            <Container>
               
                <CardScrollerMenu>  
                    {loading ? <Loading>Loading Shows...</Loading> : shows.shows.map((show, i) => {
                        return <CardScrollerItem key={i} content={show.id} index={i} />;
                    })}
                </CardScrollerMenu>
                <HR />
                {/* Uncomment the next line and the ToggleArrows component. */}
                {/* {index.show ? <ShowsArrows /> : null} */}
                <CardScrollerActivePanel />
            </Container>
        
    
    );
};

export default CardSelector;