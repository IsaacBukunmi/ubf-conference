import React from 'react'
import ImagesGallery from '../ImageGallery'
import SectionHeader from '../SectionHeader'
import styles from './index.module.scss'

const ConferenceGallery = () => {
    
    return(
        <div className={styles._}>
            <div className={styles.container}>
               <SectionHeader heading="Photo Gallery" subheading="Moments captured during the conference"/>
                <div className={styles.content}>
                    <ImagesGallery />
                </div>
            </div>
        </div>
    )
}

export default ConferenceGallery