import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-header">
                <div className="contact-icon"></div>
                <h1 className="contact-title">Get in Touch</h1>
            </div>
            <form className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name *</label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name *</label>
                        <input type="text" id="last-name" name="last-name" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit" className="send-button">Send</button>
            </form>

        </section>
    );
}

export default Contact;
