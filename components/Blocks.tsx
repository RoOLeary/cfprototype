import Image from 'next/image'
import { IImageBlocks } from '../interfaces/IImageBlocks'
import imageLoader from '../imageLoader'

/* reason for destructuring here for the moment is to ensure only relevant block variables are 
   being passed. There's a further refactor in here, but is also for consistencies sake as the 
   latter method was already being implemented. 
*/
const Blocks = ({ ctas1, ctas2, heading1, heading2, image1, image2, text1, text2 }: IImageBlocks) => {
 
  return(
    <section className="b-blocks t-dark">
      <div className="o-grid">
        <div className="b-blocks__block b-blocks__block--1 o-grid__col l:o-grid__col--span-6">
          <div className="o-grid">
            {image1 &&
              <div className="o-grid__col m:o-grid__col--span-6">
                <figure className="b-blocks__image">
                  <Image 
                    alt={heading1}
                    loading="lazy"
                    src={image1}
                    layout="fill"
                    loader={imageLoader}
                  />
                </figure>
              </div>
            }
            <div className={`o-grid__col ${image1 ? 'm:o-grid__col--span-6' : '' }`}>
              <div className="b-blocks__content">
                <h3 className="b-blocks__heading">{heading1}</h3>
                <div className="b-blocks__text c-formatted">
                  {text1}
                </div>
                {ctas1 && ctas1?.length &&
                  <div className="b-blocks__ctas">
                    {ctas1.map((cta, i) => (
                      <a
                        className="c-button c-button--inverted"
                        href={cta.link}
                        key={i}
                        target={cta.isBlank && '_blank'}
                      >
                        {cta.label}
                      </a>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="b-blocks__block b-blocks__block--2 o-grid__col l:o-grid__col--span-6">
          <div className="o-grid">
            {image2 &&
              <div className="o-grid__col m:o-grid__col--span-6">
                <figure className="b-blocks__image">
                <Image 
                    alt={heading2}
                    loading="lazy"
                    src={image2}
                    layout="fill"
                    loader={imageLoader}
                  />
                </figure>
              </div>
            }
            <div className={`o-grid__col ${image2 ? 'm:o-grid__col--span-6' : '' }`}>
              <div className="b-blocks__content">
                <h3 className="b-blocks__heading">{heading2}</h3>
                <div className="b-blocks__text c-formatted">
                  {text2}
                </div>
                {ctas2 && ctas2?.length &&
                  <div className="b-blocks__ctas">
                    {ctas2.map((cta, i) => (
                      <a
                        key={i}
                        className="c-button c-button--inverted"
                        href={ cta.link}
                        target={cta.isBlank && '_blank'}
                        >
                          {cta.label}
                        </a>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blocks;