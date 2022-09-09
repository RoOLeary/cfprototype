import Image from 'next/image';
import imageLoader from './../imageLoader'

interface IBlocks{
    image1?: string,
    heading1?: string,
    text1?: string,
    ctas1?: ctas,
    image2?: string,
    heading2?: string,
    text2?: string,
    ctas2?: ctas
}

interface ctas{
    col1?: string,
    col2?: string, 
    col3?: string,
    label?: string,
    link?: string,
    isBlank?: boolean
}

const Blocks = ({ image1, heading1, text1, ctas1, image2, heading2, text2, ctas2 }: IBlocks ): JSX.Element => {
   
   console.log(ctas1[0].col1);
   
    return(
        <section className="b-blocks t-dark">
            <div className="o-grid">
                <div className="b-blocks__block b-blocks__block--1 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                       
                            <div className="o-grid__col m:o-grid__col--span-6">
                                <figure className="b-blocks__image">
                                    <Image loader={imageLoader} alt={heading1} layout="responsive" src={image1} width={650} height={450}/> 
                                </figure>
                            </div>
                        
                        <div className={`o-grid__col ${image1 ? 'm:o-grid__col--span-6' : '' }`}>
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">{heading1}</h3>
                                <div className="b-blocks__text c-formatted">
                                    {text1}
                                </div>
                                {ctas1 ?
                                <div className="b-blocks__ctas">
                                    <a className="c-button c-button--inverted" href={ctas1[0].link}  target="_blank" >{ctas1[0].label}</a>
                                </div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-blocks__block b-blocks__block--2 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                        
                            <div className="o-grid__col m:o-grid__col--span-6">
                                <figure className="b-blocks__image">
                                    <Image loader={imageLoader} alt={heading2} layout="responsive" src={image2} width={650} height={450}/>
                                </figure>
                            </div>
                       
                        <div className={`o-grid__col ${image2 ? 'm:o-grid__col--span-6' : '' }`}>
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">{ heading2 }</h3>
                                <div className="b-blocks__text c-formatted">
                                    { text2 }
                                </div>
                                {ctas2 ?
                                <div className="b-blocks__ctas">
                                    <a className="c-button c-button--inverted" href={ctas2[0].link}  target="_blank" >{ctas2[0].label}</a>
                                </div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blocks; 