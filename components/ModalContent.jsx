const ModalContent = ({ modalInfo }) => {


    let speakerBioString;
    let companyDescriptionString;
    let projectDescriptionString;
    if (modalInfo.speakerBio) {
      if (modalInfo.speakerBio?.includes('<p>')) {
        speakerBioString = modalInfo.speakerBio.replace(/<\/?p[^>]*>/g, '');
      } else speakerBioString = modalInfo.speakerBio;
    }
    if (modalInfo.projectDescription) {
      if (modalInfo.projectDescription?.includes('<p>')) {
        projectDescriptionString = modalInfo.projectDescription.replace(/<\/?p[^>]*>/g, '');
      } else companyDescriptionString = modalInfo.description;
    }
    return (
      <div className="c-modal-scroller scroller-next-fix" id="speaker-modal" style={{ color: 'rgb(80, 86, 102)' }}>
        <div className="c-modal-headliner">
          {modalInfo.speakerPosition
            ? <h3 className="c-modal-header-title" style={{ marginBottom: '8px', fontFamily: 'TNW Avalon' }}>{modalInfo.title}</h3>
            : <h1>{modalInfo.title}</h1>}
          {modalInfo.speakerPosition
            ? (
              <h5 className="subtitle" style={{ marginBottom: '1em', fontWeight: '400' }}>
                {modalInfo.speakerPosition}
                ,
                {' '}
                {modalInfo.speakerCompany}
              </h5>
            )
            : (
              <span>
                <a className="subtitle" href={modalInfo.companyUrl} style={{ marginBottom: '1em', fontWeight: '400' }}>
                  {modalInfo.title}
                </a>
                {modalInfo.boothNumber && ` - Booth number ${modalInfo.boothNumber}`}
              </span>
            ) }
        </div>
        <div className="c-modal-body-container">
          <header className="c-modal-header">
            <div className="c-modal-header-image" style={{ background: `${modalInfo.companyLogoColor && 'transparent'}` }}>
              {modalInfo.speakerTwitterUsername
                && (
                  <a
                    className="c-modal-header-iconLink"
                    href={`https://twitter.com/${modalInfo.speakerTwitterUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    name={`${modalInfo.title} Twitter`}
                  >
                    <div className="twitter-icon-container">
                      <svg className="c-modal-header-icon" viewBox="0 0 1 1">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/assets/next/img/icons.svg#twitter" />
                      </svg>
                    </div>
                  </a>
                )}
              {modalInfo.image
                && (
                  <>
                    <img alt={modalInfo.title} className="" src={modalInfo.image} />
                    <noscript>
                      <img
                        alt={modalInfo.title}
                        src={modalInfo.image}
                        data-src={modalInfo.image}
                      />
                    </noscript>
                  </>
                )}
              {modalInfo.companyLogoColor
                && (
                  <>
                    <img
                      alt={modalInfo.title}
                      // style={{ objectFit: 'fill' }}
                      data-src={modalInfo.companyLogoColor}
                      src={modalInfo.companyLogoColor}
                    />
                    <noscript>
                      <img alt={modalInfo.title} src={modalInfo.companyLogoColor} />
                    </noscript>
                  </>
                )}
            </div>
          </header>
          <div className="c-modal-body">
            {modalInfo.companyLogoColor
              ? (
                <p
                  className="modal-bio"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html:
                  companyDescriptionString,
                  }}
                />
              )
              : (
              <>
                <h3>{modalInfo.speakerName}</h3>
                <br />  
                <p
                  className="modal-bio"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html:
                    modalInfo.speakerBio
                          ? (modalInfo.speakerBio.length > 700 ? `${modalInfo.speakerBio.slice(0, 700)}...` : modalInfo.speakerBio)
                          : 'Speaker biography to follow...stay tuned',
                  }}
                />
                </>
              )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalContent;
  