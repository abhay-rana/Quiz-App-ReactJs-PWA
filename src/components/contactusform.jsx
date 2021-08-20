import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../css/contactFrom.css";



const FormUI = () => {
    const [err, setErr] = useState('');
    let email, name, subject, message = '';

    function sendEmail(e) {
        e.preventDefault();



        if (email !== "" && name !== "" && subject !== "" && message !== "") {
            emailjs.sendForm('service_n4iqpeh', 'template_wisq8yh', e.target, 'user_DUtbeGXqCQTijH8JSHFzX')
                .then((result) => {
                    setErr("send Successfully")
                    console.log(result.text);
                }).catch((error) => {
                    console.log(error.text);
                })
        } else {
            console.log("try to input some thing");
            setErr("All fields are required");
        }

    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="desktop">
                    <label style={{ fontFamily: "'Style Script', cursive", fontSize: "4vh" }}>Contact Me</label>
                    <br></br>
                    <p className="err">{err}</p>
                    <div className="contact_form">
                        <input type="text" name="reply_to" placeholder="Enter Your Email" onChange={(event) => { email = event.target.value }} />

                        <input type="text" name="from_name" placeholder="Enter Your Name" onChange={(event) => { name = event.target.value }} />

                        <input type="text" name="from_name" placeholder="Subject" onChange={(event) => { subject = event.target.value }} />

                        <textarea type="text" name="message" placeholder="Enter Message Here" onChange={(event) => { message = event.target.value }} />

                        <button type="submit" className="btn_send">Send</button>

                    </div>

                </div>

            </form>

        </div>

    )
}



export default FormUI;