import React from 'react';
import { useEffect, useState } from 'react'; 
import Script from 'next/script'

interface ISignup {     
    signupHeading?: string, 
    signupText?: string, 
    hubspotEmbed?: any
}


const Signup = ({ signupHeading, signupText, hubspotEmbed }: ISignup): JSX.Element => {
    
    const defaultForm = () => {
        return(
            `<!--[if lte IE 8]>
                <Script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></Script>
                <![endif]-->
                <Script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></Script>
                <Script>
                hbspt.forms.create({
                    region: "na1",
                    portalId: "7066311",
                    formId: "1e199d02-9afe-411a-b290-4220c234d587"
                });
            </Script>`
        )
    };


    return (
        <section className="b-textImage b-textImage--tint b-signUp js-equinoxNode t-dark">
            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{signupHeading}</h2>
                    <p>{signupText.replace(/<[^>]+>/g, '')}</p>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: hubspotEmbed ? hubspotEmbed : defaultForm() }} />
                </div>
            </div>
        </section>
    );
}

export default Signup;
