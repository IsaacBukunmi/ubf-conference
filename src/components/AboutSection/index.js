import React from 'react'
import bible_study from '../../assets/bible-study.jpg'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'

const AboutSection = () => {
    return(
        <div className={styles._} id="overview">
            <div className={styles.container}>
               <SectionHeader heading="Overview" subheading="Know more about UBF and our upcoming easter conference"/>
                <div className={styles.content}>
                    <div className={styles.text_section}>
                        <h3>About our ministry</h3> <br/>
                        <div className={styles.mobile_image_section}>
                            <img src={bible_study} alt="bible study"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet. Aliquam ducimus in tenetur quas! Odit assumenda consequuntur praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet. Aliquam ducimus in tenetur quas! Odit assumenda consequuntur praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.  <a href="#">Learn more</a></p>
                    </div>
                    <div className={styles.image_section}>
                        <img src={bible_study} alt="bible study"/>
                    </div>
                </div>
                <div className={`${styles.content} ${styles.part_two}`}>
                    <div className={styles.text_section}>
                        <h3>Easter Conference 2021</h3> <br/>
                        <div className={styles.mobile_image_section}>
                            <img src="https://images.unsplash.com/photo-1484914440268-8d352fe4db95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="bible study"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet. Aliquam ducimus in tenetur quas! Odit assumenda consequuntur praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet. Aliquam ducimus in tenetur quas! Odit assumenda consequuntur praesentium alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#register">Register Now</a></p>
                    </div>
                    <div className={styles.image_section}>
                        <img src="https://images.unsplash.com/photo-1484914440268-8d352fe4db95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="bible study"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection