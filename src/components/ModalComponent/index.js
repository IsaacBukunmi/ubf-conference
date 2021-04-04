import React, {useState} from 'react'
import close_btn from '../../assets/close_btn.svg'
import styles from './index.module.scss'
import { FaFileAudio, FaFileAlt, FaFileVideo } from "react-icons/fa"


function ModalComponent(props) {

    const[closeModal, setCloseModal] = useState(true);

    return (
        closeModal ?
        (<div className={styles.modal_fluid}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.close_btn}>
                        <img src={close_btn} alt="close"  onClick={() =>{ setCloseModal(false);
                        props.setOpenModal(false)}}/>
                    </div>
                    <div className={styles.header}>
                        <h2>{props.title}</h2>
                        <p>Click on the links below to download {props.title} materials</p>
                    </div>
                    <div className={styles.item_container}>
                        {/* <h3>Text Files</h3> */}
                        {/* {
                            props.text_files.length === 0 ? "No File available for download. Check back later." : props.text_files.map((file) => (
                                // <p>{ file.file_title }</p>
                                <p>{file.file_title}</p>
                            ))
                        } */}
                        <ul>
                            {
                                props.file_download.length === 0 ? "No File available for download, Check back later." :
                                props.file_download.map((link) => (
                                    <li key={link.id}>{link.file_type === "text" ? <FaFileAlt className={styles.type_icon}/> : link.file_type === "audio" ? <FaFileAudio className={styles.type_icon} /> : <FaFileVideo className={styles.type_icon} />} <a href={link.file_link} download={link.file_title}>{link.file_title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>) : null
    )
}

export default ModalComponent
