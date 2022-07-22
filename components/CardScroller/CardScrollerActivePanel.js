import React from 'react';
import { useContext, useState } from 'react';
import { DataContext } from './../../contexts/dataContext';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.25em;
`;

const Episodes = styled.p`
    font-size: .75em;
    font-family: 'Space Grotesk', sans-serif;
    text-transform: uppercase;
    letter-spacing: .75px;
    color: darkgray;
`;

const MainStage = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    transition: all .5s ease;
    @media screen and (max-width: 980px){
        margin-top: 2em;
    }
   
`;

const Image = styled.img`
    width: 250px;
    @media screen and (max-width: 980px){
        margin-top: 2em;
    }
    margin: 0 auto; 
`;

const CardScrollerActivePanel = () => {

    const dataContext = useContext(DataContext);
    let isActive = dataContext.state.isActive;
    
    const [shows, setShows] = useState({
        shows: [
            {
                "id": "a1",
                "title": "Molly",
                "episodes": 24,
                "product_image_url": "/assets/img/molly.jpg"
            },
            {
                "id": "b2",
                "title": "Huang's World",
                "episodes": 12,
                "product_image_url": "/assets/img/molly.jpg"
            },
            {
                "id": "c3",
                "title": "King of The Road",
                "episodes": 8,
                "product_image_url": "/assets/img/molly.jpg"
            },
            {
                "id": "d5",
                "title": "Last Chance High",
                "episodes": 15,
                "product_image_url": "/assets/img/molly1.jpg"
            },
            {
                "id": "e6",
                "title": "Love Industries",
                "episodes": 21,
                "product_image_url": "/assets/img/molly2.jpg"
            },
            {
                "id": "f7",
                "title": "pilotweek",
                "episodes": 3,
                "product_image_url": "/assets/img/molly3.jpg"
            },
            {
                "id": "a8",
                "title": "States of Undress",
                "episodes": 7,
                "product_image_url": "/assets/img/molly.jpg"
            },
            {
                "id": "b7",
                "title": "VICE",
                "episodes": 32,
                "product_image_url": "/assets/img/molly1.jpg"
            },
            {
                "id": "c8",
                "title": "Woman",
                "episodes": 9,
                "product_image_url": "/assets/img/molly2.jpg"
            },
            {
                "id": "d9",
                "title": "VICE World of Sports",
                "episodes": 18,
                "product_image_url": "/assets/img/molly3.jpg"
            }
        ]
    });

    const show = shows ? shows.shows.filter(show => show.id === isActive) : '';
        // console.log(show);
        const { title, episodes, product_image_url } = show[0];
        return ( 
            <MainStage className={`shows-main`}  key={title}>
                <Image src={`${product_image_url}`} alt={title} />
                <br />
                <Episodes>{episodes} episodes</Episodes>
                <Title>{title}</Title> 
            </MainStage>
        )

}

export default CardScrollerActivePanel;