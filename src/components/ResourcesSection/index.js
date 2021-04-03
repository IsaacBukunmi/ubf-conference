import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './index.module.scss';
import SectionHeader from '../SectionHeader';
import resources from './resourcesData';
import ResourceItem from '../ResourceItem';
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
                               <ResourceItem key={resource.id} title={resource.text} image={resource.img} file_download={resource.file_download}/>
                            )
                        })
                    }
                </div>
            </div>      
        </div>
    )
}

export default ResourcesSection