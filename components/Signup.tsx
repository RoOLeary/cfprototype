import React from 'react';

interface Signup {   
    content: any
   
}

const Signup = ({ content }: Signup): JSX.Element => {
   
    const { signupHeading, signupText, hubspotEmbed } = content;
   
    return(
        <section className="b-textImage b-textImage--tint b-signUp js-equinoxNode t-dark">
            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{signupHeading}</h2>
                    <p>{signupText.replace(/<[^>]+>/g, '')}</p>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: hubspotEmbed }} />
                </div>
            </div>
        </section>
    )
}

export default Signup;
