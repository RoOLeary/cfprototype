import styles from '../styles/Footer.module.css'

const Footer = () => {
    return(
        <footer className={"c-footer"}>
            <div className="o-wrapper">
                <div className="c-footer__bio">
                    <div className="o-grid o-grid--gap-xxl">
                       
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h3 className="u-m-m">Lorem ipsum dolor</h3>
                            <p className="c-footer__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus in ante semper dictum. In eu sapien blandit, tincidunt nibh nec, pharetra nisi. Suspendisse ac ante rhoncus, tristique nibh ac, faucibus quam.
                            </p>
                        </div>
                    

                        
                    
                        <div className="o-grid__col l:o-grid__col--span-5">
                            <h3 className="u-m-m">Contact</h3>
                            <p className="c-footer__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus in ante semper dictum. In eu sapien blandit, tincidunt nibh nec, pharetra nisi. Suspendisse ac ante rhoncus, tristique nibh ac, faucibus quam.
                            </p>
                        </div>
                    

                        <div className="o-grid__col l:o-grid__col--span-3">
                            <h3 className="u-m-m">Quick Links</h3>
                            <ul>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="c-footer__client">
                    
                    <ul className="c-footer__social">
                        <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.youtube.com/" target="_blank"><img alt="YouTube" className="c-footer__socialIcon" src="/assets/img/youtube.svg" /></a></li>
                        <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.facebook.com/" target="_blank"><img alt="Facebook" className="c-footer__socialIcon" src="/assets/img/facebook.svg" /></a></li>
                        <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://twitter.com/" target="_blank"><img alt="Twitter" className="c-footer__socialIcon" src="/assets/img/twitter.svg" /></a></li>
                        <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.instagram.com/" target="_blank"><img alt="Instagram" className="c-footer__socialIcon" src="/assets/img/instagram.svg" /></a></li>
                    </ul>

                    <p className="c-footer__copyright">Copyright &copy; {new Date().getFullYear()} </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;