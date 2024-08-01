import React from "react";

const ContactForm = () => {
  return (
    <div className="form__wrapper">
      <div className="form__field">
        <div className="form__field--username">
          <div className="form__input">
            <img
              className="form__input--icon"
              src="/placeholder.svg"
              alt="name"
            />
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form__input">
            <img
              className="form__input--icon"
              src="/placeholder.svg"
              alt="name"
            />
            <input
              type="text"
              className="form__input"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form__input">
          <img
            className="form__input--icon"
            src="/placeholder.svg"
            alt="call"
          />
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
          />
        </div>
        <div className="form__input">
          <img
            className="form__input--icon"
            src="/placeholder.svg"
            alt="email"
          />
          <input
            type="text"
            className="form__input"
            placeholder="Email Address"
          />
        </div>
        <div className="form__input">
          <input
            type="text"
            className="form__input"
            placeholder="How can we help you?"
          />
        </div>
        <button className="btn btn--primary">Send Messages</button>
      </div>
    </div>
  );
};

export default ContactForm;
