import React from 'react';
import { useEffect, useState } from 'react'; 

interface Signup {     
   content: any
}


const defaultForm = `<!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
	region: "na1",
	portalId: "7066311",
	formId: "1e199d02-9afe-411a-b290-4220c234d587"
});
</script>`;

const Signup = ({ content }: Signup): JSX.Element => {
    const { signupHeading, signupText, hubspotEmbed } = content;
    const [hbsptEmbed, setHbsptEmbed] = useState( defaultForm );
   
    useEffect(() => {
        if(!hbsptEmbed){
            setHbsptEmbed(defaultForm);
        };
    },[hbsptEmbed])


    return(
        <section className="b-textImage b-textImage--tint b-signUp js-equinoxNode t-dark">
            <div className="o-wrapper">
                <div className="b-textImage__text">
                    <h2 className="b-textImage__heading">{signupHeading}</h2>
                    <p>{signupText.replace(/<[^>]+>/g, '')}</p>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: (hubspotEmbed) ? hubspotEmbed : defaultForm }} />
                </div>
            </div>
        </section>
    )
}

export default Signup;
