import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { BsPerson } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import styles from './index.module.scss';
import PrimaryButton from '../ButtonElement';
import schedule_data from './scheduleData';

const ScheduleSection = () => {

    const [value, setValue] = useState(0)

    const{ programs } = schedule_data[value]
    
    return(
        <div className={styles._} id="schedule">
            <div className={styles.container}>
                <SectionHeader heading="Conference Schedule" subheading="Planned schedules for each day" />
                <div className={styles.content}>
                    <div className={styles.tab_container}>
                        {
                            schedule_data.map((schedule, index) => {
                                return(
                                    <div 
                                    className={`${styles.tab_button} ${index === value && styles.active_tab}`}
                                    onClick={() => setValue(index)} key={schedule.id}>
                                        <p>{schedule.day}</p> 
                                        <p>{schedule.date}</p> 
                                    </div> 
                                )
                            })
                        }
                    </div>
                    <div className={styles.schedule_container}>
                        {
                            programs.map((program) => {
                                return(
                                    <div className={styles.schedule_item} key={program?.id}>
                                        <div className={styles.circle_line}>
                                            <div className={styles.circle}></div>
                                            <div className={styles.line}></div>
                                        </div>
                                        <div className={styles.schedule_content}>
                                            <h3>{program?.heading}</h3>
                                            <p>{program?.subheading}</p>
                                            <div className={styles.schedule_detail}>
                                                <p><BsPerson className={styles.schedule_icon} /> <span>{program?.vessel}</span></p>
                                                <p><IoTimeOutline className={styles.schedule_icon} /> <span>{program?.time}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.schedule_button}>
                        <PrimaryButton>Download Schedule <FaDownload className={styles.download_icon} /></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection