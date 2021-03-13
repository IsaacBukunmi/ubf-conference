import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import PrimaryButton from '../ButtonElement'
import styles from './index.module.scss'

const NumberSection = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false); 
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.attendants}>
                    <div className={styles.num}>
                        <CountUp  start={viewPortEntered ? null : 0} end={50} duration={3} suffix="+">
                            {({ countUpRef }) => {
                                return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                    if (isVisible){
                                        setViewPortEntered(true);
                                    }
                                    }}
                                    delayedCall
                                >   
                                    <div>
                                        <h2 ref={countUpRef} />
                                        <p>Physical Attendees</p>
                                    </div>
                                </VisibilitySensor>
                                );
                            }}
                        </CountUp>
                    </div>
                    <div className={styles.num}>
                        <CountUp  start={viewPortEntered ? null : 0} end={100} duration={3} suffix="+">
                            {({ countUpRef }) => {
                                return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={isVisible => {
                                    if (isVisible){
                                        setViewPortEntered(true);
                                    }
                                    }}
                                    delayedCall
                                >   
                                    <div>
                                        <h2 ref={countUpRef} />
                                        <p>Online Attendees</p>
                                    </div>
                                </VisibilitySensor>
                                );
                            }}
                        </CountUp>
                    </div>
                </div>
                <div className={styles.question}>
                    <h3>Are you registered yet?</h3>
                    <a href="#register"><PrimaryButton className={styles.register}>Register Now</PrimaryButton></a> 
                </div>
            </div>
        </div>
    )
}

export default NumberSection;
