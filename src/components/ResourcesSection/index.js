import React from 'react';
import swal from 'sweetalert';
import styles from './index.module.scss';
import { FaDownload } from "react-icons/fa";
import SectionHeader from '../SectionHeader';
import resources from './resourcesData';
const ResourcesSection = () => {

    const handleResourceDownload = (title) => {
        swal({
            title: `Download ${title}`,
            text: `${title} resources would be available, during and after the conference`,
            icon: "info",
        });
    }

    return(
        <div className={styles._} id="resources">
            <div className={styles.container}>
                <SectionHeader heading="Resources" subheading="Access and download the conference resources and materials"/>
                <div className={styles.resources_section}>
                    {
                        resources.map((resource) => {
                            return(
                                <div className={styles.resources_item} key={resource.id} onClick={() => handleResourceDownload(resource.text)}>
                                    <div className={styles.resources_image}>
                                        <img src={resource.img} alt={resource.text}/>
                                    </div>
                                    <div className={styles.resources_name}>
                                        <p>{resource.text} <FaDownload className={styles.download_icon} /></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ResourcesSection