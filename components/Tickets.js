

const Tickets = () => {

    return(
        <section className="b-tickets c-section c-section--tint" id="tickets">
            <div className="o-wrapper">
                <header className="c-section__header c-section__header--center">
                    <h2 className="c-section__heading">Tickets</h2>
                </header>
                <div className="b-tickets__scroller">
                    <div className="b-tickets__list o-grid o-grid--gap-l">
                        
                            <div className="o-grid__col l:o-grid__col--span-4">
                                <div className="b-ticket">
                                    <header className="b-ticket__header">
                                        <h3 className="b-ticket__name">ticket.ticketName</h3>
                                    </header>
                                    <ul className="b-ticket__perks">
                                      
                                        <li className="b-ticket__perk {{ p.isApplied ? 'is-applies' : ''}}">
                                            
                                            <svg className="b-ticket__perkIcon" viewBox="0 0 24 24"></svg>
                                        </li>
                                       
                                    </ul>
                                    <footer className="b-ticket__footer">
                                        <div className="b-ticket__price">
                                          
                                        </div>
                                        <p className="b-ticket__vat">ticketVat</p>
                                        <a className="c-button c-button--primary " href="{{ ticket.ticketLink }}">ticketLinktext</a>
                                    </footer>
                                </div>
                            </div>

                            <div className="o-grid__col l:o-grid__col--span-4">
                                <div className="b-ticket">
                                    <header className="b-ticket__header">
                                        <h3 className="b-ticket__name">ticket.ticketName</h3>
                                    </header>
                                    <ul className="b-ticket__perks">
                                      
                                        <li className="b-ticket__perk {{ p.isApplied ? 'is-applies' : ''}}">
                                            
                                            <svg className="b-ticket__perkIcon" viewBox="0 0 24 24"></svg>
                                        </li>
                                       
                                    </ul>
                                    <footer className="b-ticket__footer">
                                        <div className="b-ticket__price">
                                          
                                        </div>
                                        <p className="b-ticket__vat">ticketVat</p>
                                        <a className="c-button c-button--primary " href="{{ ticket.ticketLink }}">ticketLinktext</a>
                                    </footer>
                                </div>
                            </div>

                            <div className="o-grid__col l:o-grid__col--span-4">
                                <div className="b-ticket">
                                    <header className="b-ticket__header">
                                        <h3 className="b-ticket__name">ticket.ticketName</h3>
                                    </header>
                                    <ul className="b-ticket__perks">
                                      
                                        <li className="b-ticket__perk {{ p.isApplied ? 'is-applies' : ''}}">
                                            
                                            <svg className="b-ticket__perkIcon" viewBox="0 0 24 24"></svg>
                                        </li>
                                       
                                    </ul>
                                    <footer className="b-ticket__footer">
                                        <div className="b-ticket__price">
                                          
                                        </div>
                                        <p className="b-ticket__vat">ticketVat</p>
                                        <a className="c-button c-button--primary " href="{{ ticket.ticketLink }}">ticketLinktext</a>
                                    </footer>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tickets