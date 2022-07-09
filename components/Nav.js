import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    // const { data: session } = useSession();

    // console.log(session);
    let menuRef = useRef(null);
    let unitRef = useRef(null);
 
    
    const toggleMobileMenu = (e) => {
        e.currentTarget.classList.toggle('mobile-menu-active');
        menuRef.current.classList.toggle('show');
    }

    
    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        unitRef.current.style.setProperty('--multiplier', 1)
    }

    useEffect(() => {
        let height = unitRef.current.offsetHeight;
        unitRef.current.style.setProperty('--multiplier', 1)
        window.addEventListener('scroll', () => update(height)); 
    }, []);

    return(
        <nav className={'c-nav js-nav t-dark'} ref={unitRef}>
            <div className={'c-nav__left'}>
                <Link href={`/`}>
                    <a className={"c-nav__logoLink"}>
                        LOGO
                    </a>
                </Link>
            </div>
            <label className={'c-nav__mobileMenuToggle'} htmlFor="navMobileMenuToggle" onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="c-nav__mobileMenu c-nav__right" ref={menuRef}>
                <ul className="c-nav__menu">
                    <li className="c-nav__menuItem"><Link href={"/"}><a className="c-nav__menuLink">Home</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/about"} scroll={false}><a className="c-nav__menuLink">About</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/conference"} scroll={false}><a className="c-nav__menuLink">Conference</a></Link></li>
                    {/* {session ? <li className="c-nav__menuItem"><Link href={"/members"}><a className="c-nav__menuLink">Members</a></Link></li> : ''}
                    <li className="c-nav__menuItem">
                        {!session ? <>
                        <a className="c-button c-button--primary" onClick={signIn}>Sign In</a></>
                        :
                        <>
                        <a className="c-button c-button--primary" onClick={signOut}>Sign Out</a>
                        </>}
                    </li> */}
                    {/* <li className="c-nav__menuItem"><a className="c-button c-button--primary">Login</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;