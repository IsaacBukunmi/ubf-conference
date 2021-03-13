import React from 'react';
import styles from './index.module.scss';
import { FaDownload } from "react-icons/fa";
import SectionHeader from '../SectionHeader';
const ResourcesSection = () => {
    return(
        <div className={styles._} id="resources">
            <div className={styles.container}>
                <SectionHeader heading="Resources" subheading="Access and download the conference resources and materials"/>
                <div className={styles.resources_section}>
                    <div className={styles.resources_item}>
                        <div className={styles.resources_image}>
                            <img src="https://cdn.pixabay.com/photo/2017/09/03/16/38/priest-2711054__340.jpg" alt=""/>
                        </div>
                        <div className={styles.resources_name}>
                            <p>Message <FaDownload className={styles.download_icon} /></p>
                        </div>
                    </div>
                    <div className={styles.resources_item}>
                        <div className={styles.resources_image}>
                            <img src="https://cdn.pixabay.com/photo/2016/02/22/17/10/bible-1216063__480.jpg" alt=""/>
                        </div>
                        <div className={styles.resources_name}>
                            <p>Group Bible Study <FaDownload className={styles.download_icon} /></p>
                        </div>
                    </div>
                    <div className={styles.resources_item}>
                        <div className={styles.resources_image}>
                            <img src="https://cdn.pixabay.com/photo/2016/09/17/21/47/audience-1677028__480.jpg" alt=""/>
                        </div>
                        <div className={styles.resources_name}>
                            <p>Symposium <FaDownload className={styles.download_icon} /></p>
                        </div>
                    </div>
                    <div className={styles.resources_item}>
                        <div className={styles.resources_image}>
                            <img src="https://images.unsplash.com/photo-1552587154-0291006dedbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvaXIlMjBtaW5pc3RyYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                        </div>
                        <div className={styles.resources_name}>
                            <p>Choir Ministration <FaDownload className={styles.download_icon} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesSection