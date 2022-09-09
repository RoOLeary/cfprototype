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
   
   console.log(heading1);
   
    return(
        <section className="b-blocks t-dark">
            <div className="o-grid">
                <div className="b-blocks__block b-blocks__block--1 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                       
                            <div className="o-grid__col m:o-grid__col--span-6">
                                <figure className="b-blocks__image">
                                    {/* <img alt="{{ block.heading1 }}" loading="lazy" src="{{ image1.url }}"> */}
                                </figure>
                            </div>
                        
                        <div className="o-grid__col {{ image1 ? 'm:o-grid__col--span-6' : '' }}">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">{heading1}</h3>
                                <div className="b-blocks__text c-formatted">
                                    {/* {{ block.text1 }} */}
                                </div>
                                {/* {% if block.ctas1|length %}
                                    <div className="b-blocks__ctas">
                                        {% for cta in block.ctas1 %}
                                            <a className="c-button c-button--inverted" href="{{ cta.link }}" {{ cta.isBlank ? 'target="_blank"' : '' }}>{{ cta.label }}</a>
                                        {% endfor %}
                                    </div>
                                {% endif %} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-blocks__block b-blocks__block--2 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                        
                            <div className="o-grid__col m:o-grid__col--span-6">
                                <figure className="b-blocks__image">
                                    {/* <img alt="{{ block.heading2 }}" loading="lazy" src="{{ image2.url }}"> */}
                                </figure>
                            </div>
                       
                        <div className="o-grid__col {{ image2 ? 'm:o-grid__col--span-6' : '' }}">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">{ heading2 }</h3>
                                <div className="b-blocks__text c-formatted">
                                    { text2 }
                                </div>
                                {/* {% if block.ctas2|length %}
                                    <div className="b-blocks__ctas">
                                        {% for cta in block.ctas2 %}
                                            <a className="c-button c-button--inverted" href="{{ cta.link }}" {{ cta.isBlank ? 'target="_blank"' : '' }}>{{ cta.label }}</a>
                                        {% endfor %}
                                    </div>
                                {% endif %} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blocks; 