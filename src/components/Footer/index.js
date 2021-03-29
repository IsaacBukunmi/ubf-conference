import React from 'react';
import ubf_logo from '../../assets/ubf-logo-rbg.png'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import styles from './index.module.scss';

const Footer = () => {
    return(
        <div className={styles._} id="footer">
            <div className={styles.container}>
                <div className={styles.address}>
                    <div className={styles.logo}>
                        <img src={ubf_logo} alt="ubf logo"/>
                    </div>
                    <p>UBF Nigeria HQ</p>
                    <p>No 6, Zansi Close, Onike-Iwaya Road</p>
                </div>
                <div className={styles.mid_content}>
                    <div className={styles.social}>
                        <a href="https://www.facebook.com/UBFUnilag/?ref=page_internal"><FaFacebook className={styles.social_icon} /></a> 
                        <a href=""><FaInstagram className={styles.social_icon} /></a>
                        <a href="https://twitter.com/ubfworldmission"><FaTwitter className={styles.social_icon} /></a>
                    </div>
                    <a href="mailto: nigeriaubf@gmail.com">nigeriaubf@gmail.com</a>
                    <p>0807 060 2299</p>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; All rights reservred. University Bible Fellowship 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer