import React from 'react';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from './../../contexts/dataContext';

const Box = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.activeSlide ? 'black' : 'lightgray' };
    margin-bottom: 10px;
    transition: all .5s ease;
    &:hover{
        background-color: ${props => props.activeSlide ? 'black' : 'darkgray' };
    }
`;

const Indicator = styled.span`
    display: ${props => props.activeSlide ? 'block' : 'none' };
    font-family: 'Space Grotesk', sans-serif;
`
const CardScrollerItem = styled.li`
    list-style: none;
    padding: 1em;
    margin-right: 2em;
    text-align: center;
    scroll-snap-align: start;  
    display: inline-block;
    overscroll-behavior: contain;

    @media screen and (max-width: 980px){
        margin-right: 0;
    }
`

const ShowPanel = ( props ) => {
    const dataContext = useContext(DataContext);
    const { setIndex, setIsActive } = dataContext.handlers; 
    const { isActive } = dataContext.state;

    // let isActive = props.isActive;
    let id = props.content;
    let activeSlide = (id === isActive) ? 'active' : '';
    console.log(activeSlide)
    var idx = props.index;
    const triggers = (e, id, idx) => {
        
        setIndex({type: "setIndex", payload: idx }); 
        setIndex({type: "nextIndex", payload: ++idx  }); 
        setIndex({type: "prevtIndex", payload: --idx }); 
        setIsActive(id);
    }

    return(
        <CardScrollerItem id={id} index={idx} className={activeSlide}>
            <>
                <Box activeSlide={activeSlide} onClick={(e) => triggers(e, id, idx)} />
                <Indicator activeSlide={activeSlide}>{idx ? ++idx : 1}</Indicator>
            </>
        </CardScrollerItem>
    )
}

export default ShowPanel;