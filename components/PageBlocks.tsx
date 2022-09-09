import React, { Children, PropsWithChildren } from 'react';
import Header from './Header';
import Hero from './Hero';
import Text from './Text';
import TextVisual from './TextVisual';
import Slider from './Slider';
import Faq from './Faq/Faq';
import Video from './Video';
import Signup from './Signup';
import Speakers from './Speakers';
import Blocks from './Blocks';
import IBlocks from './../interfaces/IBlocks'

interface IProps {
    content: IBlocks[];
}

function renderContent(content: IBlocks[]){
    const pageBlocksList = Object.entries(content).map((block: any, id: number) => {
    const blockContent = block[1];

        switch(blockContent['blockType']) {
            case 'header':
                return <Header key={block[1]['uid']} headline={blockContent['header']}  />
            case 'hero':
                return (
                    <Hero 
                        key={block[1]['uid']} 
                        eyebrow={blockContent['eyebrow']} 
                        heading={blockContent['heading']}
                        subHeading={blockContent['subHeading']} 
                    />);
            case 'text':
                return <Text key={block[1]['uid']} content={blockContent} />
            case 'textVisual':
                return (
                    <TextVisual 
                        key={block[1]['uid']}
                        textVisualHeading={blockContent['textVisualHeading']}
                        textVisualContent={blockContent['textVisualContent']}
                        textVisualImage={blockContent['textVisualImage']} 
                    />);
            case 'imageSlider':
                return <Slider key={block[1]['uid']} content={blockContent} />
            case 'faq':
                return <Faq key={block[1]['uid']} content={blockContent} />
            case 'video':
                return (
                    <Video 
                        key={block[1]['uid']} 
                        heading={blockContent['heading']}
                        text={blockContent['text']}
                        hasCta={blockContent['hasCta']}
                        ctaLabel={blockContent['ctaLabel']}
                        ctaLink={blockContent['ctaLink']}
                        videoEmbedCode={blockContent['videoEmbedCode']} 
                    />
                    );
            case 'speakers':
                return (
                    <Speakers 
                        key={block[1]['uid']} 
                        heading={blockContent['heading']} 
                        speakersIntro={blockContent['speakersIntro']} 
                        speakers={blockContent['speakers']} 
                    />
                )
            case 'signup':
                return (
                    <Signup 
                        key={block[1]['uid']} 
                        signupHeading={blockContent['signupHeading']} 
                        signupText={blockContent['signupText']} 
                        hubspotEmbed={blockContent['hubspotEmbed']}
                    />
                ); 
            case 'blocks':
                return (
                    <Blocks key={block[1]['uid']}/>
                ); 
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

const PageBlocks = ({ content }: IProps) => {
    console.log('content', content)
    return(
        <>
            {renderContent(content)}
        </>
    )
} 

export default PageBlocks;