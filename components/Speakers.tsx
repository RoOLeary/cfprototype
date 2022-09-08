import Speaker from './Speaker';
import { ISpeakers } from '../interfaces/ISpeaker'

const Speakers = ({ heading, speakersIntro, speakers }: ISpeakers) => { 
    let introText = speakersIntro ? speakersIntro : 'Holding text';
    return(
        <section className="b-faq c-section speakers">
            <div className="o-wrapper">
                <h1>{heading ? heading : 'Speakers' }</h1>
                <br />
                {introText.replace(/<\/?p[^>]*>/g, '')}
                <br />
                <div>
                <br />
                <ul className={'b-speakers__list o-grid o-grid--gap-m'}>
                    {speakers.length >= 0 && speakers.map((speaker, i) => {
                        return <Speaker key={i} speaker={speaker} />
                    })}
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Speakers;