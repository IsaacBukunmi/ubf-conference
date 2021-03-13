import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';


const ConferenceTimer = (props) => {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [timeUp, setTimeUp] = useState(false)

    const day_string = days > 1 ? 'days' : 'day'

    useEffect(() => {
        setInterval(() => {
            let eventDate = +new Date(props.date);
            let difference = eventDate - +new Date();
            if (difference < 1) {
               setTimeUp(true)
            } else {
                let days = Math.floor(difference / (1000 * 60 * 60 * 24));
                let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                let minutes = Math.floor((difference / (1000 * 60)) % 60);
                let seconds = Math.floor((difference / (1000)) % 60);
                setHours(hours > 9 ? hours : `0${hours}`)
                setMinutes(minutes > 9 ? minutes : `0${minutes}`)
                setSeconds(seconds > 9 ? seconds : `0${seconds}`)
                setDays(days)
            }
        }, 1000)
    })

    return(
        <div className={styles._}>
            {
                timeUp ?  <h2 className={styles.in_session}>Event currently in session</h2> : 
                <div className={styles.timer_container}>
                    <div className={styles.time_item}>
                        <h2>{days}</h2>
                        <p>{day_string}</p>
                    </div>
                    <div className={styles.time_item}>
                        <h2>{hours}</h2>
                        <p>Hours</p>
                    </div>
                    <div className={styles.time_item}>
                        <h2>{minutes}</h2>
                        <p>Minutes</p>
                    </div>
                    <div className={styles.time_item}>
                        <h2>{seconds}</h2>
                        <p>Seconds</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ConferenceTimer;