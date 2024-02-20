import Link from 'next/link'
import Image from 'next/image'
import imageLoader from './../imageLoader'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRef, useEffect } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import styles from '../styles/Nav.module.css'
import { isActiveLink } from '../lib/utils';
import styled from 'styled-components';

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const UserImage = styled.img`
    border-radius: 50%;
`;

const links: { name: string; href: string }[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'All Comps',
        href: '/all-components',
    },
    {
        name: 'Posts (SSR)',
        href: '/posts',
    },
    {
        name: 'About',
        href: '/about',
    },
    // {
    //     name: 'Conference',
    //     href: '/conference',
    // },
    // {
    //     name: 'Programs',
    //     href: '/programs',
    // },
    // {
    //     name: 'Spaces',
    //     href: '/spaces',
    // },
]


const Nav = (): JSX.Element => {
    const { data: session } = useSession();
    const router = useRouter()
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

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(e); 
    // } 


    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        unitRef.current.style.setProperty('--multiplier', 1)
    }

    useEffect(() => {
        let height = unitRef.current.offsetHeight;
        unitRef.current.style.setProperty('--multiplier', 1)
        window.addEventListener('scroll', () => update(height)); 
    }, []);


   

    return (
        <nav className={'c-nav js-nav t-dark'} ref={unitRef}>
            <div className={'c-nav__left'}>
                <Link href={`/`} className={"c-nav__logoLink"}>

                    <Image alt={'Ro Ro Lo Go'} src={'/assets/img/logo.png'} width={50} height={50} loader={imageLoader} />

                </Link>
            </div>
            <label className={'c-nav__mobileMenuToggle'} htmlFor="navMobileMenuToggle" ref={mobTogglRef} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="c-nav__mobileMenu c-nav__right" ref={menuRef}>
                <ul className="c-nav__menu">
                    {links.map(({ name, href }) => (
                        <li key={name} className="c-nav__menuItem">
                            <Link
                                href={href}
                                className={'c-nav__menuLink'}
                                onClick={(e) => closeOnChange(e)}>

                                {name}
                                {isActiveLink(href, router.pathname) && (
                                    <motion.div
                                        layoutId="navigation-underline"
                                        className="navigation-underline"
                                        animate
                                    />
                                )}

                            </Link>
                        </li>
                    ))}
                    {session ? <li className="c-nav__menuItem"><Link href={"/members"} className="c-nav__menuLink">Members</Link></li> : ''}
                    <li className="c-nav__menuItem">
                        {!session ? <>
                        <a className="c-button c-button--primary" onClick={() => signIn()}>Sign In</a></>
                        :
                        <>
                        <a className="c-button c-button--primary" onClick={() => signOut()}>Sign Out</a>
                        </>}
                    </li> 
                </ul>
            </div>
            {session && 
                <UserInfo>
                    <UserImage loader={imageLoader} src={session.user.image} width="44px" height="44px" className={''} />
                    <p>Signed in as {session.user.name}</p>
                </UserInfo>
            }
        </nav>
    );
}

export default Nav;