
import Header from './Header';
import Hero from './Hero';
import Text from './Text';
import TextVisual from './TextVisual';
import Slider from './Slider';
// import Faq from './Faq';
import Video from './Video';
import Speakers from './Speakers';
// import Projects from './Projects';

const PageBlocks = ({ content }) => {   

    const pageBlocks = Array.from(content);
  
    const pageBlocksList = pageBlocks.map((block, id) => {
        // console.log(block);    
        switch(block.blockType) {
            case 'header':
                return <Header key={block.uid} content={block} />
            case 'hero':
                return <Hero key={block.uid} content={block} />
            case 'text':
                return <Text key={block.uid} content={block} />
            case 'textVisual':
                    return <TextVisual key={block.uid} content={block} />
            case 'imageSlider':
                return <Slider key={block.uid} content={block} />
            // case 'faq':
            //     return <Faq key={block.uid} content={block} />
            case 'video':
                return <Video key={block.uid} content={block} />
            case 'speakers':
                return <Speakers key={block.uid} content={block} />
            case 'tickets':
                return <Tickets key={block.uid} content={block} />
            default:
                return(
                    <div key={id}>
                        <h3>{block.blockType}</h3>
                        <pre>{JSON.stringify(block, null, 2)}</pre>
                    </div>
                )
        }
    })

    return pageBlocksList;
} 

export default PageBlocks; 