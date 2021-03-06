import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Contact(props) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [msgAlert, setMsgAlert] = useState("message sent successfully!");
    const showAlert = () => {
        setMsgAlert("message sent successfully!");
        console.log("message sent");
    }
    const handleName = (e) => {
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b667ujv', 'template_igli6ee', e.target, '9BNVOVsjqrJWYGVUv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setUserName("");
        setUserEmail("");
        setUserMessage('');
        showAlert();
        let alertTrigger = document.getElementById("alertTrigger");
        function alert() {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = `<div class="alert alert-success" role="alert" style={{height:"50px"}}>${msgAlert}</div>`
            console.log("div created");
            alertTrigger.append(wrapper);
            setTimeout(() => {
                wrapper.innerHTML="";
            }, 2000);
        }
        alert();
       

    }
    return (
        <div><section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <div className="icons">
                            <div className="row">
                                <div className="info">
                                    <div><PersonOutlineIcon className="Icon" /></div>
                                    <div>
                                        <div className="head">Name</div>
                                        <div className="sub-title">Noorfsha</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div> <HomeIcon className="Icon" /></div>
                                    <div>
                                        <div className="head">Address</div>
                                        <div className="sub-title">Bareilly, Uttar Pradesh</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div> <MailOutlineIcon className="Icon" /></div>
                                    <div>
                                        <div className="head">Email</div>
                                        <div className="sub-title">saifinoor2580@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <div> <PhoneIcon className="Icon" /></div>
                                    <div>
                                        <div className="head">Contact</div>
                                        <div className="sub-title">7818837071</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                        <form onSubmit={sendEmail}>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" name="name" placeholder='Enter your name' required value={userName} onChange={handleName} />
                                </div>
                                <div className="field email">
                                    <input type="email" name="email" placeholder='Enter your email' required value={userEmail} onChange={handleEmail} />
                                </div>
                                <div className="field message">
                                    <textarea name="message" cols="30" row="4" placeholder='Enter message here' required value={userMessage} onChange={handleMessage}></textarea>
                                </div>
                            </div>
                            <div className="button">
                                <button type="submit" value="send">Send message</button>
                            </div>
                            <div id="alertTrigger" className='my-3'></div>
                        </form>
                    </div>
                </div>
            </div>
        </section></div>
    )
}
