import React from 'react';
import { MdLocationOn, MdDateRange } from "react-icons/md"
import { RiGlobalFill } from "react-icons/ri"
import { IoTime } from "react-icons/io5"
import styles from './index.module.scss'

const ExtraInfo = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.info_item}>
                    <MdLocationOn className={styles.info_icon} />
                    <p>RCCG Camp, KM46 Lagos/Ibadan Express way.</p>
                </div>
                <div className={styles.info_item}>
                    <MdDateRange className={styles.info_icon} />
                    <p>2nd - 4th April 2021</p>
                </div>
                <div className={styles.info_item}>
                    <IoTime className={styles.info_icon} />
                    <p>9:00am - 6:00pm daily</p>
                </div>
                <div className={styles.info_item}>
                    <RiGlobalFill className={styles.info_icon} />
                    <p>Physical and virtual attendance</p>
                </div>
            </div>
        </div>
    )
}

export default ExtraInfo