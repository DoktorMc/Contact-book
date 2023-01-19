import React, { useState, useEffect } from "react";

import "./Form.css";

function Form({ onAddElement, changeActivity }) {
  const [contact, setContact] = useState({
    name: "",
    username: "",
    phone: "",
    email:''
  });

  const [nameError, setNameError] = useState(" ");
  const [userNameError, setUserNameError] = useState(" ");
  const [phoneNumberError, setPhoneNumberError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || userNameError || phoneNumberError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, userNameError, phoneNumberError,emailError, formValid]);

  const errorText = (name, empty) => {
    const errors = {
      name: (empty) =>
        !empty ? setNameError("the name is not written!") : setNameError(""),
      username: (empty) =>
        !empty
          ? setUserNameError("the surname is not written!")
          : setUserNameError(""),
      phone: (empty) =>
        !empty
          ? setPhoneNumberError("the phone number is not written!")
          : setPhoneNumberError(""),
      email: (empty) =>
        !empty
          ? setEmailError("the E-mail is not written!")
          : setEmailError(""),
    };

    return errors[name]?.(empty);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
    errorText(name, value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onAddElement(contact);
    changeActivity();
  };

  const onCancel = (e) => {
    e.preventDefault();
    changeActivity();
  };

  return (
    <form className="form">
      <div className="form-input">
        {nameError && <div className="form-error">{nameError}</div>}
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={onInputChange}
          name="name"
        />
        {userNameError && <div className="form-error">{userNameError}</div>}
        <input
          type="text"
          placeholder="Surname"
          value={contact.username}
          onChange={onInputChange}
          name="username"
        />
        {phoneNumberError && (
          <div className="form-error">{phoneNumberError}</div>
        )}
        <input
          type="text"
          placeholder="Phone number"
          value={contact.phone}
          onChange={onInputChange}
          name="phone"
        />
        {emailError && (
          <div className="form-error">{emailError}</div>
        )}
        <input
          type="text"
          placeholder="E-mail"
          value={contact.email}
          onChange={onInputChange}
          name="email"
        />
      </div>
      <div className="form-button">
        <button
          className="form-button_save"
          onClick={onClick}
          disabled={!formValid}
        >
          Save
        </button>
        <button className="form-button_cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
