import React, { ReactNode } from 'react';
import Link from 'next/link'
// import styles from '../styles/TextVisual.module.css';

type Props = {
    content: any;
}

const TextVisual = ({ content }: Props): JSX.Element => {
    console.log(content);

    const { textVisualHeading, textVisualContent, textVisualImage } = content;

    return(
    <section className="b-textImage b-textImage--tint b-textVisual js-equinoxNode t-dark is-visible">
        <div className="b-textImage__imageContainer">
            <figure className="b-textImage__image">
                <img alt={textVisualHeading} className="b-textImage__imageImg b-textImage__imageImg--background" src={textVisualImage} />
            </figure>
        </div>

        <div className="o-wrapper">
            <div className="b-textImage__text">
                <h2 className="b-textImage__heading">{textVisualHeading}</h2>
                <p>{textVisualContent}</p>
                <div className="b-blocks__ctas">
                {/* {buttons && buttons.length > 0 ?
                    Object.entries(buttons).map((btn, i) => {
                        const { linkText, linkUrl } = btn[1];
                        return(
                            <Link key={i} href={`${linkUrl}`}><a className="c-button c-button--inverted">{linkText}</a></Link>
                        )
                    })
                : ''} */}
                    </div> 
            </div>
        </div>
    </section>
    )
}


export default TextVisual