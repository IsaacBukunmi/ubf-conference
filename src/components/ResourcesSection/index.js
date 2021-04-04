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
                            const text_files = resource.file_download?.map((file) => (
                                file?.text_files
                            ))
                            const audio_files = resource.file_download?.map((file) => (
                                file?.audio_files
                            ))
                            return(
                               <ResourceItem key={resource.id} title={resource.text} image={resource.img} file_download={resource.file_download} text_files={text_files} audio_files={audio_files}/>
                            )
                        })
                    }
                </div>
            </div>      
        </div>
    )
}

export default ResourcesSection