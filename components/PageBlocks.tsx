import React, { Children, PropsWithChildren } from 'react';
import Header from './Header';
import Hero from './Hero';
import Text from './Text';
import TextVisual from './TextVisual';
import Slider from './Slider';
import Faq from './Faq';
import Video from './Video';
import Signup from './Signup';
import Speakers from './Speakers';
import { any } from 'prop-types';
// import Projects from './Projects';

interface IProps {
    content: PropsWithChildren
  }


const renderContent = ( content: PropsWithChildren ) => {
   
    const pageBlocksList = Object.entries(content).map((block: any, id: number) => {
    const blockContent = block[1];
        
        switch(block[1]['blockType']) {
            
            case 'header':
                return <Header key={block[1]['uid']} content={blockContent} />
            case 'hero':
                return <Hero key={block[1]['uid']} content={blockContent} />
            case 'text':
                return <Text key={block[1]['uid']} content={blockContent} />
            case 'textVisual':
                return <TextVisual key={block[1]['uid']} content={blockContent} />
            case 'imageSlider':
                return <Slider key={block[1]['uid']} content={blockContent} />
            case 'faq':
                return <Faq key={block[1]['uid']} content={blockContent} />
            case 'video':
                return <Video key={block[1]['uid']} content={blockContent} />
            case 'speakers':
                return <Speakers key={block[1]['uid']} content={blockContent} />
            case 'signup':
                return <Signup key={block[1]['uid']} content={blockContent} />
            // case 'tickets':
            //     return <Tickets key={block[1]['uid']} content={blockContent} />
            default:
                return(
                    <>
                        <div key={id}>
                            <h3>{block[1]['blockType']}</h3>
                            <pre>{JSON.stringify(block, null, 2)}</pre>
                        </div>
                    </>
                )
        }
        
    })

    return pageBlocksList;
}




const PageBlocks = ({ content }) => {
    return(
        <>
            {renderContent(content)}
        </>
    )
} 

export default PageBlocks;