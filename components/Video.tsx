

interface IVideo {
    content?: string
}

const Video = ({ content }: IVideo ) => {

    const videoEmbedCode = content;
    return(
        <section className="b-video">
            <div className="o-wrapper">
                <div className="o-grid o-grid--center">
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <div className="b-video__video">
                            <div className="o-media o-media--16:9"  dangerouslySetInnerHTML={{__html: videoEmbedCode}} />        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video;