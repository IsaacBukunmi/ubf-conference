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
                    <p>No 7, Zansi Close, Onike-Iwaya Road</p>
                </div>
                <div className={styles.mid_content}>
                    <div className={styles.social}>
                        <FaFacebook className={styles.social_icon} />
                        <FaInstagram className={styles.social_icon} />
                        <FaTwitter className={styles.social_icon} />
                    </div>
                    <a href="#">ubfnigeria@gmail.com</a>
                    <p>08123934232, 09042429012</p>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; Copyright University Bible Fellowship 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer