import useModal from '../hooks/useModal';
import SpeakerModal from './SpeakerModal';
  
const Speaker = ({ speaker }) => {
    const { speakerName, speakerBio, speakerCompany } = speaker;
    const { show, toggleVisibility } = useModal();
  
    return(
        <li className="o-grid__col xs:o-grid__col--span-6 m:o-grid__col--span-3 l:o-grid__col--span-2">
            <article className="b-speaker" itemType="http://schema.org/Person" itemProp="performer" itemScope="">
                <a className="b-speaker__trigger js-xhrModal" onClick={toggleVisibility}></a>
                <div className="b-speaker__photo">
                    <img alt="Edward Snowden" className="b-speaker__photoImg" itemProp="image" loading="lazy" src="https://placedog.net/184/230" />
                </div>
                <div className="b-speaker__details">
                    <h3 className="b-speaker__name" itemProp="name">{speakerName}</h3>
                    <div className="b-speaker__role" itemProp="jobTitle">{speakerCompany}</div>
                    <a className="b-speaker__company" href="#" itemProp="worksFor" target="_blank"></a>
                </div>
                {speakerBio
                    && (
                    <SpeakerModal
                        speaker={speaker}
                        show={show}
                        toggleVisibility={toggleVisibility}
                    />
                    )}
            </article>
        </li>
    )
}

export default Speaker;