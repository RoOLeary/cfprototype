import React, {useEffect, useContext} from 'react'; 
import { ShowsContext } from './../contexts/showsContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createPublicKey } from 'crypto';
import styled from "styled-components";



const FlexList = styled.ul`
    display: flex;  
`;

const FlexListItem = styled.li`
    padding: 2em;
`;

const Temp = () => { 
    const router = useRouter();
    const ctx = useContext(ShowsContext);
    const shows = ctx[0].state.shows;
    const isActive = ctx[0].state.isActive;

    
    
    const clicky = (e) => {
        console.log(isActive);
        ctx[0].handlers.setIsActive(e.target.id);
        console.log(isActive);
        router.push(`/shows/?id=${e.target.id}`, undefined, { shallow: true })
    };

    useEffect(() => {
        console.log(isActive);
    },[]);

    return(
        <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-12">
                            <FlexList>
                                {shows ? shows.map((show, i) => {
                                    return <FlexListItem key={show.id}><Link scroll={false} href={`?id=${show.id}`}><a id={`${show.id}`} onClick={(e) => clicky(e)}>{i + 1}</a></Link></FlexListItem>
                                }): 'Loading'}
                            </FlexList>

                            <section>
                                
                                {shows ? shows.filter(show => show.id == ctx[0].state.isActive).map((show, i) => {
                                    return( 
                                        <div key={show.id}>
                                           <h2>{show.title.rendered}</h2>
                                            <p>{show.excerpt.rendered}</p>
                                        </div>
                                    )
                                }): 'Loading'}
                                
                            </section>
                    
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Temp;