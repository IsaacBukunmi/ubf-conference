import React, { useEffect, useState } from 'react';
import ubf_logo from '../../assets/ubf-logo-rbg.png'
import styles from './index.module.scss'
import './nav.css';

const Nav = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const showMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleLinkClick = () => {
        setMenuOpen(false)
    }
    const handleScroll = () => {
        if(window.scrollY > 100){
            document.querySelector('.nav').className ='nav scroll';
        }else{
            document.querySelector('.nav').className = 'nav'
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
        <div className={styles._}>
            <nav className="nav">
                <div className={styles.nav_container}>
                    <div className={styles.logo}>
                        <img src={ubf_logo} alt="ubf logo"/>
                    </div>
                    <div className={`${menuOpen ? styles.hamburger_menu+ ' ' + styles.toggle : styles.hamburger_menu}`} onClick={showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <div className={`${menuOpen ? styles.menu_container+ ' ' + styles.active : styles.menu_container}`}>
                <ul onClick={handleLinkClick}>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#register">Registration</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav