const Sessions = () => {
  return(
    <h1>Sessions Sessions!!!</h1>
  )
}

export default Sessions;

// {% set days = craft.categories().group('sessionDays').all() %}
// {% set types = craft.categories().group('sessionTypes').all() %}
// <section class="b-sessions c-section">
//     <div class="o-wrapper">
//         {% if block.isComingSoon %}
//             <div class="c-comingSoon">
//                 <h3 class="c-comingSoon__heading">Coming soon</h3>
//                 <div class="c-formatted">
//                     <p>
//                         The agenda for 2022 is still under construction.
//                         Please check back soon!
//                     </p>
//                 </div>
//             </div>
//         {% else %}
//             <div class="o-grid l:o-grid--reverse o-grid--gap-xxl">
//                 <div class="o-grid__col l:o-grid__col--span-4">
//                     <div class="c-section__sticky">
//                         {% if block.heading %}
//                             <h2 class="c-section__heading">{{ block.heading }}</h2>
//                         {% endif %}
//                         <div class="c-formatted c-section__text">
//                             {% if block.text %}
//                                 {{ block.text }}
//                             {% endif %}
//                             <ul class="b-sessions__legend">
//                                 {% for type in types %}
//                                     <li class="b-sessions__legendItem b-sessions__legendItem--{{ type.slug }}">{{ type.title }}</li>
//                                 {% endfor %}
//                             </ul>
//                         </div>
//                         {% if block.hasCta %}
//                             <div class="c-section__cta">
//                                 <a class="c-button c-button--primary" href="{{ block.ctaLink }}">{{ block.ctaLabel }}</a>
//                             </div>
//                         {% endif %}
//                     </div>
//                 </div>
//                 <div class="o-grid__col l:o-grid__col--span-8">
//                     <div class="c-tabs js-tabs">
//                         {% set useDate = false %}
//                         {% for day in days %}
//                             {% if day.sessionDate|date('Y-m-d') == now|date('Y-m-d') %}
//                                 {% set useDate = true %}
//                             {% endif %}
//                         {% endfor %}
//                         <div class="b-sessions__tabList" role="tablist" aria-label="Schedule">
//                             {% for day in days %}
//                                 {% if useDate %}
//                                     {% set selected = (day.sessionDate|date('Y-m-d') == now|date('Y-m-d')) %}
//                                 {% else %}
//                                     {% set selected = (loop.index == 1) %}
//                                 {% endif %}
//                                 <button aria-controls="tabpanel-{{ day.sessionDate|date('Y-m-d') }}" aria-selected="{{ selected ? 'true' : 'false' }}" class="b-sessions__tab" id="tab-{{ day.sessionDate|date('Y-m-d') }}" role="tab">
//                                     <span class="b-sessions__tabDay">{{ day.title }}</span>
//                                     <span class="b-sessions__tabDate">
//                                         <span class="m:u-show">{{ day.sessionDate|date('l') }},</span>
//                                         <span>{{ day.sessionDate|date('F j') }}</span>
//                                     </span>
//                                 </button>
//                             {% endfor %}
//                         </div>
//                         {% for day in days %}
//                             {% set visible = useDate ? (day.sessionDate|date('Y-m-d') == now|date('Y-m-d')) : (loop.index == 1) %}
//                             <div aria-labelledby="tab-{{ day.sessionDate|date('Y-m-d') }}" class="b-sessions__tabPanel" {{ visible ? '' : 'hidden' }} id="tabpanel-{{ day.sessionDate|date('Y-m-d') }}" role="tabpanel" tabindex="0">
//                                 <h3 class="b-sessions__heading">{{ day.sessionTheme }}</h3>
//                                 {% set sessions = craft.entries.section('sessions').relatedTo(day).orderBy('sessionTimeStart ASC').all() %}
//                                 {% for session in sessions %}
//                                     {% set type = session.sessionType.one() %}
//                                     {% set typeClassName = type ? 'c-session--' ~ type.slug : '' %}
//                                     <ol class="b-sessions__list">
//                                         <li class="c-session {{ typeClassName }}">
//                                             <div class="c-session__time">{{ session.sessionTimeStart|date('H:i') }} &ndash; {{ session.sessionTimeEnd|date('H:i') }}</div>
//                                             <div class="c-session__text">
//                                                 <div class="c-session__title">{{ session.title }}</div>
//                                                 <div class="c-session__speaker">{{ session.sessionSpeakers }}</div>
//                                             </div>
//                                         </li>
//                                     </ol>
//                                 {% endfor %}
//                             </div>
//                         {% endfor %}
//                     </div>
//                 </div>
//             </div>
//         {% endif %}
//     </div>
// </section>
