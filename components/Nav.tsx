import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const Nav = (): JSX.Element => {
    // const { data: session } = useSession();
    const menuRef = useRef(null);
    const unitRef = useRef(null);
    const mobTogglRef = useRef(null); 

    const toggleMobileMenu = (e) => {
        mobTogglRef.current.classList.toggle('mobile-menu-active');
        menuRef.current.classList.toggle('show');
    }

    const closeOnChange = (e) => {
        // e.preventDefault();
        setTimeout(() => {
            mobTogglRef.current.classList.toggle('mobile-menu-active');
            menuRef.current.classList.toggle("show");
        }, 500)
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e); 
    } 


    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        unitRef.current.style.setProperty('--multiplier', 1)
    }

    useEffect(() => {
        let height = unitRef.current.offsetHeight;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <label className={'c-nav__mobileMenuToggle'} htmlFor="navMobileMenuToggle" ref={mobTogglRef} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="c-nav__mobileMenu c-nav__right" ref={menuRef}>
                <ul className="c-nav__menu">
                    <li className="c-nav__menuItem"><Link href={"/"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Home</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/all-components"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>All Comps</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/about"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>About</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/conference"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Conference</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/spaces"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Spaces</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/programs"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Programs</a></Link></li>
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