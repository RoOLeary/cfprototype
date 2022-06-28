import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

export default function Nav(){
    // const { data: session } = useSession();

    // console.log(session);
    let menuRef = useRef();
    let unitRef = useRef();

    const toggleMobileMenu = (e) => {
        e.currentTarget.classList.toggle('mobile-menu-active');
        menuRef.current.classList.toggle('show');
    }

    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        unitRef.current.style.setProperty('--multiplier', multiplier)
    }

    useEffect(() => {
        let height = unitRef.current.offsetHeight;
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
                    <li className="c-nav__menuItem"><Link href={"/about"}><a className="c-nav__menuLink">About</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/tech"}><a className="c-nav__menuLink">Tech</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/test"}><a className="c-nav__menuLink">Test</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/retest"}><a className="c-nav__menuLink">Retest</a></Link></li>
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
