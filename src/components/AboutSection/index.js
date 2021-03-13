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
                        <p>University Bible Fellowship (UBF) is an international evangelical church (non-denominational) dedicated to Christ and his kingdom. </p> <br/>
                        <p>Our main focus is to study the Bible, grow in the grace and knowledge of our Lord and Savior Jesus Christ, and live according to his teachings as his disciples.</p> <br/>
                        <p>We especially pray to reach University and College students and help them grow as Christ's lifelong disciples. Our goal is to obey our Lord’s commands to love one another and to go and make disciples of all nations (Jn 13:34; Mt 28:18-20). <a href="https://en.wikipedia.org/wiki/University_Bible_Fellowship">Learn more</a></p>
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
                        <p>Easter is generally symbolic of Jesus Christ's victory over death. His resurrection symbolises the eternal life that is granted to all who believe in Him.</p> <br/>
                        <p>This is what we remind ourselves every year at the University Bible Fellowship Easter Conference. This is called the Gospel of Jesus Christ and it rightly captures our theme for this year's conference. <a href="#register">Register Now</a></p>
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