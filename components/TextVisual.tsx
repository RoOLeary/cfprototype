import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import imageLoader from './../imageLoader'
// import styles from '../styles/TextVisual.module.css';

type ITextVisual = {
    textVisualHeading: string
    textVisualContent: string
    textVisualImage: string
    link?: string
    linkText?: string
}

const TextVisual = ({ textVisualHeading, textVisualContent, textVisualImage, link, linkText }: ITextVisual): JSX.Element => {

    return (
        <section className="b-textImage b-textImage--tint b-textVisual js-equinoxNode t-dark is-visible">
            <div className="b-textImage__imageContainer">
                <figure className="b-textImage__image">
                    <Image alt={textVisualHeading} className="b-textImage__imageImg b-textImage__imageImg--background" src={textVisualImage} loader={imageLoader} layout="fill" />
                </figure>
            </div>

            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{textVisualHeading}</h2>
                    <p>{textVisualContent}</p>
                    <div className="b-blocks__ctas">
                        {link ? 
                        <Link href={`${link}`} className="c-button c-button--inverted">{linkText}</Link>
                        : ''}
                    </div>  
                </div>
            </div>
        </section>
    );
}


export default TextVisual