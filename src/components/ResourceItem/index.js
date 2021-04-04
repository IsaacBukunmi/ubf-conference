import React, { useState }  from 'react';
import { FaDownload } from "react-icons/fa";
import styles from './index.module.scss'
import ModalComponent from '../ModalComponent';

const ResourceItem = ({title, image, file_download, text_files, audio_files}) => {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
        <div className={styles.resources_item}  onClick={() => setOpenModal(true)}>
            <div className={styles.resources_image}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.resources_name}>
                <p>{title} <FaDownload className={styles.download_icon} /></p>
            </div>
        </div>
            {openModal ? <ModalComponent setOpenModal={setOpenModal} title={title} file_download={file_download} text_files={text_files} audio_files={audio_files}/> : null}
        </>
    )
}

export default ResourceItem