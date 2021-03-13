import React from 'react';
import PrimaryButton from '../ButtonElement';
import ConferenceTimer from '../ConferenceTimer';
import Nav from '../Nav';
import styles from './index.module.scss'

const HeroSection = () => {
    return(
        <div className={styles._}>
            {/* <Nav /> */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.conf_topic}>
                        <small>UBF Easter Conference 2021</small>
                        <h1>THE GOSPEL OF CHRIST</h1>
                        <p>1 Corintians 15:1-14</p>
                    </div>
                    <div className={styles.division_line}></div>
                    <div className={styles.countdown}>
                        <ConferenceTimer date="04/02/2021"/>
                    </div>
                    <div className={styles.register_button}>
                    <a href="#register"><PrimaryButton className={styles.register}>Register Now</PrimaryButton></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection