import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import './swal.css';
import SectionHeader from '../SectionHeader';
import {FaQuoteLeft } from "react-icons/fa";
import {FaQuoteRight } from "react-icons/fa";
import styles from './index.module.scss';
import PrimaryButton from '../ButtonElement';


const RegisterSection = () => {

    const [attendee, setAttendee] =  useState({firstname: "", lastname: "", phonenumber: "", email: "", gender: "", maritalstatus: "", membershipstatus: "", chapter: "", attendancemode: "", invitedby: ""})
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAttendee({...attendee, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(attendee)
        setLoading(true)
        axios.post('https://sheet.best/api/sheets/bb7fad12-e242-46ce-88a0-513ec3da3af3', attendee)
            .then(function (response) {
                console.log(response);
                setLoading(false)
                swal({
                    title: "Thank you for registering!",
                    text: "We hope to see you join us for an awesome experience",
                    icon: "success",
                });
                setAttendee({firstname: "", lastname: "", phonenumber: "", email: "", gender: "", maritalstatus: "", membershipstatus: "", chapter: "", attendancemode: "", invitedby: ""})
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
                swal({
                    title: "Something went wrong",
                    text: "Check your details and try again",
                    icon: "error",
                });
            });
    }

    return(
        <div className={styles._} id="register">
            <div className={styles.container}>
                <SectionHeader heading="Register Now" subheading="Register for a life changing experience"/>
                <div className={styles.register_form}>
                    <div className={styles.conference_verse}>
                        <div className={styles.content}>
                            <div className={styles.left_icon}>
                                <FaQuoteLeft className={styles.quote_icon} />
                            </div>
                            <div className={styles.key_verse}>
                                <h2>If there is no resurrection of the dead, then not even Christ has been raised. And if Christ has not been raised, our preaching is useless and so is your faith. <br /> <span>- 1 Corintians 15:13-14</span></h2>
                            </div>
                            <div className={styles.right_icon}>
                                <FaQuoteRight className={styles.quote_icon} />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_name}>
                            <div className={styles.input_item}>
                                <label>First Name</label> <br />
                                <input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder="John"  
                                    className={styles.input}
                                    value={attendee.firstname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.input_item}>
                                <label>Last Name</label> <br />
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder="Doe" 
                                    className={styles.input}
                                    value={attendee.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.form_input}>
                            <label>Phone Number</label> <br />
                            <input 
                                type="number" 
                                name="phonenumber" 
                                placeholder="080XXX" 
                                className={styles.input}
                                value={attendee.phonenumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form_input}>
                            <label>Email Address</label> <br />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="example@email.com" 
                                className={styles.input}
                                value={attendee.email}
                                onChange={handleChange}
                                required
                            />                            
                        </div>
                        <div className={styles.option_item}>
                            <label>Gender</label> <br />
                            <select name="gender"  id="gender" className={styles.select} value={attendee.gender} onChange={handleChange} required>
                                <option value="">--Select your gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>        
                        </div>
                        <div className={styles.option_item}>
                            <label>Marital Status</label> <br />
                            <select name="maritalstatus"  id="marital" className={styles.select} value={attendee.maritalstatus} onChange={handleChange} required>
                                <option value="">--Select your marital status--</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Engaged">Engaged</option>
                            </select>        
                        </div>
                        <div className={styles.option_item}>
                            <label>Membership Status</label> <br />
                            <select name="membershipstatus"  id="membership" className={styles.select} value={attendee.membershipstatus} onChange={handleChange} required>
                                <option value="">--Select your membership status--</option>
                                <option value="Member">Member</option>
                                <option value="Guest">Guest</option>
                            </select>        
                        </div>
                        {
                            attendee.membershipstatus === 'Member' && 
                            <div className={styles.option_item}>
                                <label>Chapter</label> <br />
                                <select name="chapter"  id="chapter" className={styles.select} value={attendee.chapter} onChange={handleChange} required>
                                    <option value="">--Select your chapter--</option>
                                    <option value="Unilag Chapter One">Unilag Chapter One</option>
                                    <option value="Unilag Chapter Two">Unilag Chapter Two</option>
                                    <option value="Medilag Chapter">Medilag Chapter</option>
                                    <option value="Yabatech Chapter">Yabatech Chapter</option>
                                    <option value="Other">Other</option>
                                </select>  
                            </div>
                        }

                        <div className={styles.option_item}>
                            <label>Mode of Attendance</label> <br />
                            <select name="attendancemode"  id="attendance" className={styles.select} value={attendee.attendancemode} onChange={handleChange} required>
                                <option value="">--Select your attendance mode--</option>
                                <option value="Physical" disabled>Physical</option>
                                <option value="Online">Online</option>
                            </select>        
                        </div>
                        
                        <div className={styles.form_input}>
                            <label>Who invited you for the easter conference? (input name if there's any)</label> <br />
                            <input 
                                type="text" 
                                name="invitedby" 
                                placeholder=""
                                className={styles.input}
                                value={attendee.invitedby}
                                onChange={handleChange}
                            />
                        </div>
                       <div className={styles.register_button}>
                            <PrimaryButton className={styles.submit} type="submit">{loading ? 'Loading...' : 'Submit'}</PrimaryButton>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterSection