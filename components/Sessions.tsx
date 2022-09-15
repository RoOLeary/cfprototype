import { format } from 'date-fns'

const Sessions = ({ content, sessions }) => {
  console.log('content', content)
  const {
    blockType,
    ctaLabel,
    ctaLink,
    hasCta,
    heading,
    isComingSoon,
    selectedSession,
    text,
    uid
  } = content
  const { data } = sessions
  const sortedData = data.sort(
    (a, b) => {
      const aDate = new Date(a.sessionDayDate.date);
      const bDate = new Date (b.sessionDayDate.date);
      return (Number(aDate) - Number(bDate))
    },
  );
  console.log('data', sortedData)
  let selected = 0;
  return(
    <section className="b-sessions c-section">
      <div className="o-wrapper">
        {isComingSoon ?
          (<div className="c-comingSoon">
              <h3 className="c-comingSoon__heading">Coming soon</h3>
              <div className="c-formatted">
                <p>
                  The agenda is still under construction.
                  Please check back soon!
                </p>
              </div>
          </div>)
          :
          (<div className="o-grid l:o-grid--reverse o-grid--gap-xxl">
            <div className="o-grid__col l:o-grid__col--span-4">
              <div className="c-section__sticky">
                {heading &&
                  <h2 className="c-section__heading">{heading}</h2>
                }
                <div className="c-formatted c-section__text"> 
                  {text ? text : ''}
                  <ul className="b-sessions__legend">
                    {sortedData.length && sortedData.map((d, i) => (
                      <li key={i} className={`b-sessions__legendItem b-sessions__legendItem--${d.slug}`}>{d.title}</li>
                    ))}
                  </ul>
                </div>
                {hasCta &&
                  <div className="c-section__cta">
                    <a className="c-button c-button--primary" href={ctaLink}>{ctaLabel}</a>
                  </div>
                }    
              </div>
            </div>
          <div className="o-grid__col l:o-grid__col--span-8">
            <div className="c-tabs js-tabs">
              {sortedData.length && sortedData.map((d, i) => {
                const startDate = new Date(d.sessionTimeStart.date).toDateString()
                console.log('LIBRARY', format(new Date(startDate), "'Today is a' MMMM"));
                const now = new Date().toDateString();
                if(startDate === now){
                  selected = i
                }
              })}
              <div className="b-sessions__tabList" role="tablist" aria-label="Schedule">
                {sortedData.length && sortedData.map((d, i) => {
                const startDate = new Date(d.sessionTimeStart.date).toDateString()
                return (
                  <button key={i} className="b-sessions__tab" id={`tab-${d.sessionTimeStart.date}`} role="tab">
                  <span className="b-sessions__tabDay">{d.sessionDayTitle}</span>
                  <span className="b-sessions__tabDate">
                    <span className="m:u-show">
                      {format(new Date(startDate), 'eeee')},{' '}
                    </span>
                    <span className="m:u-show">
                      {format(new Date(startDate), 'MMMM')} {' '}
                    </span>
                    <span className="m:u-show">
                      {format(new Date(startDate), 'dd')}
                    </span>
                  </span>
                  </button>
                )})}
              </div>
              {sortedData.length && sortedData.map((d, i) => {
              const typeClassName = d.sessionType ? ('c-session--'+`${d.slug}`) : ''
              return (
                <div key={i} className={`b-sessions__tabPanel ${selected === i ? '' : 'hidden' }`} id={`tabpanel-${new Date(d.sessionTimeStart.date).toDateString()}`} role="tabpanel">
                <h3 className="b-sessions__heading">{d.sessionType}</h3>
                  <ol className="b-sessions__list">
                      <li className={`c-session ${typeClassName}`}>
                          <div className="c-session__time">{new Date(d?.sessionTimeStart?.date).toTimeString()} &ndash; {new Date(d.sessionTimeEnd.date).toTimeString()}</div>
                          <div className="c-session__text">
                              {/* <div className="c-session__title">{d.title}</div> */}
                              <div className="c-session__speaker">{d.sessionSpeakers}</div>
                          </div>
                      </li>
                  </ol>
                </div>
              )})}
                      {/* {% set visible = useDate ? (day.sessionDate|date('Y-m-d') == now|date('Y-m-d')) : (loop.index == 1) %} */}
                          {/* {% set sessions = craft.entries.section('sessions').relatedTo(day).orderBy('sessionTimeStart ASC').all() %}
                          {% for session in sessions %}
                              {% set type = session.sessionType.one() %}
                              {% set typeClassName = type ? 'c-session--' ~ type.slug : '' %}
                              <ol className="b-sessions__list">
                                  <li className="c-session {{ typeClassName }}">
                                      <div className="c-session__time">{{ session.sessionTimeStart|date('H:i') }} &ndash; {{ session.sessionTimeEnd|date('H:i') }}</div>
                                      <div className="c-session__text">
                                          <div className="c-session__title">{{ session.title }}</div>
                                          <div className="c-session__speaker">{{ session.sessionSpeakers }}</div>
                                      </div>
                                  </li>
                              </ol>
                          {% endfor %}
                      </div> */}
              </div>
            </div>
          </div>
        )
        }
    </div>
  </section>
  )
}

export default Sessions;

