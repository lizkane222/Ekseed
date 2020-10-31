import React from "react";


import ContactDetail from "./ContactDetail";

function ContactContainer() {
    return (
        <section className="contact-container">
            <h2 className="contact-container__title">Connect's Contact Details</h2>
            {/* for every contactDetail with user._id == user, .append to section */}
            <ul className="contact-container__list">
                <li className="contact-container__item">< ContactDetail /></li>
            </ul>



        </section>
    )
}

export default ContactContainer;