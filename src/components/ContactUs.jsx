import React from 'react';
import ContactUI from '../components/contactusform';
import '../css/contactus.css';

const ContactUs = () => {

    return (
        <div>
            {/*About Me*/}
            <div className="root">
                <div className="aboutMe_Section">
                    <h2 style={{ fontFamily: "'Style Script', cursive", fontSize: "6vh" }}>About Me</h2>
                    <p style={{ fontFamily: "'Style Script', cursive", fontSize: "3.5vh" }}>My Name Is Abhay Rana. I'm an Android and Web App Developer. I work on various projects in Android and Web Applications.
                        I'm also a good UI/UX Designer. I worked on many new technologies like firebase, Digital Ocean, and many types of Database such as
                        Relational, Tree, Collection and Documented Database (Tree Structure) and RealTime Database.

                        I am also interested in Blockchain and Web3 
                    </p>
                </div>

                <div className="contact_form_outter">
                    <div className="contact_form">
                        <ContactUI />
                    </div>

                </div>

            </div>

        </div>
    )

}

export default ContactUs;