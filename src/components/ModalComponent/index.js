import React, {useState} from 'react'
import close_btn from '../../assets/close_btn.svg'
import styles from './index.module.scss'

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
                        <p>Find and download {props.title} materials here.</p>
                        <p>Click on the links below to download the materials</p>
                    </div>
                    <div className={styles.item_container}>
                        <ul>
                            {
                                props.file_download.length === 0 ? "No File available for download, Check back later." :
                                props.file_download.map((link) => (
                                    <li key={link.id}><a href={link.file_link} download={link.file_title}>{link.file_title}</a></li>
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
