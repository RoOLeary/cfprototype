
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';

let initialState = {
    activeSlide: 1,
    isAutoPlay: true,
    defaultActive: 1,
}

interface ISlider {
    content: {
        sliderMatrix: Array<{
            sliderColor: string
            textSub: string
            textHeading: string
            textBackground: string
            slideImage: string
        }>
    }
}

const Slider = ({ content }: ISlider ) => {    
    const length = content.sliderMatrix.length;

    const elementRef = useRef();
    const divElement: any = elementRef.current;

    const [activeSlide, setActiveSlide] = useState(initialState.activeSlide);
    const [isAutoPlay, setAutoPlay] = useState(initialState.isAutoPlay);

    const transitionSlide = (e) => {
        e.preventDefault(); 
        let wrapper,
            current, 
            currentSlide, 
            clickToSlide, 
            fadeSl, 
            assignActive,
            oldActive;

            wrapper = divElement;
            
            currentSlide = document.querySelector('.flex--active');
            current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : initialState.defaultActive;  
            clickToSlide = e.currentTarget.getAttribute('data-slide');

            assignActive = clickToSlide ? clickToSlide : current;
           
            fadeSl = document.querySelector('.flex__container[data-slide="' + assignActive + '"]');
            oldActive = document.querySelector('.flex__container[data-slide="' + current + '"]');
            if(!fadeSl.classList.contains('flex--preStart')){
                fadeSl.classList.add('flex--preStart')
            }
           

        if (current === assignActive) {
            return false
        } else {
            oldActive.classList.add('flex--active', 'animate--end');
            fadeSl.classList.remove('flex--active', 'animate--end');
            fadeSl.classList.add('animate--start');
            setTimeout(() => {
                setActiveSlide(assignActive);
            }, 900)
        }   
    }

    useEffect(() => {
        const divElement: any = elementRef.current;
        const current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : initialState.defaultActive;    
        const autoFadeSl = divElement.querySelector('.flex__container[data-slide="' + activeSlide + '"]'); 
        const oldActive = divElement.querySelector('.flex__container[data-slide="' + current + '"]');
        let nextSlide = activeSlide;
            
        if(isAutoPlay){
            
            const interval = setInterval(() => {
                autoFadeSl.classList.add('flex--preStart');
                oldActive.classList.add('flex--active', 'animate--end');
                autoFadeSl.classList.remove('flex--active', 'animate--end');
                autoFadeSl.classList.add('animate--start');
            
                if (activeSlide == length) {
                        setActiveSlide(initialState.defaultActive)                
                    } else {
                        let nxtSld = ++nextSlide;
                        setTimeout(() => {
                            setActiveSlide(nxtSld);
                        }, 900)
                    }       
                }, 7000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [activeSlide, isAutoPlay, transitionSlide, length]);

    return(
        <>
            <div className="slider__wrapper" ref={elementRef}>
                    {content.sliderMatrix.map((sl, i) => {
                        const current = ++i;
                        return(
                            <div key={++i} className={`flex__container flex--${sl.sliderColor.replace(/\s/g, '')} ${activeSlide == current ? `flex--active` : 'animate--start' }`} data-slide={current}>
                                <div className="flex__item flex__item--left">
                                <div className="flex__content">
                                    <p className="text--sub">{sl.textSub}</p>
                                    <h1 className="text--big font-serif">{sl.textHeading}</h1>
                                </div>
                                <p className="text__background font-serif">{sl.textBackground}</p>
                                </div>
                                <div className="flex__item flex__item--right"></div>
                                <img className="isabel_img hidden md:block" src={sl.slideImage} />
                            </div>
                        )
                    })}
                    
                    <div className="slider__navi">
                        {content.sliderMatrix.map((sl, i) => {
                            const current = ++i;
                            return(
                                <a key={++i} href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == current ? `active` : '' }`} data-slide={current}>{sl.sliderColor}</a>
                            ) 
                        })} 
                    </div>
                    
                </div>

                
            </>
        ); 
}; 

export default Slider;