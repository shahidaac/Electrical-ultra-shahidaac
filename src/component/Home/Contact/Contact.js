import React from 'react';
import './Contact.css'
import "react-mailchimp-email-signup-form/dist/esm/index.css";
import { ReactMailchimpEmailSignupForm } from "react-mailchimp-email-signup-form";

const Contact = () => {

    return (
      <div className="newsletter">
        <h2 >Subscribe to our monthly newsletter</h2>
        <ReactMailchimpEmailSignupForm></ReactMailchimpEmailSignupForm>
      </div>
    );
};

export default Contact;