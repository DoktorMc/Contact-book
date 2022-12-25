import React, { useState, useEffect } from "react";

import "./Form.css";

function Form({ onAddElement, changeActivity }) {
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
  });

  const [nameError, setNameError] = useState(" ");
  const [surNameError, setSurNameError] = useState(" ");
  const [phoneNumberError, setPhoneNumber] = useState(" ");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || surNameError || phoneNumberError) {
      setFormValid(false);
      console.log(formValid);
    } else {
      setFormValid(true);
      console.log(formValid);
    }
  }, [nameError, surNameError, phoneNumberError, formValid]);

  const onInputChange = (e) => {
    const { value, name } = e.target;

    setContact({ ...contact, [name]: value });
    if (!value) {
      switch (name) {
        case "name":
          setNameError("the name is not written!");
          break;
        case "surname":
          setSurNameError("the surname is not written!");
          break;
        case "phoneNumber":
          setPhoneNumber("the phone nimber is not written!");
          break;
        default:
          break;
      }
    } else {
      switch (name) {
        case "name":
          setNameError("");
          break;
        case "surname":
          setSurNameError("");
          break;
        case "phoneNumber":
          setPhoneNumber("");
          break;
        default:
          break;
      }
    }
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
        {surNameError && <div className="form-error">{surNameError}</div>}
        <input
          type="text"
          placeholder="Surname"
          value={contact.surname}
          onChange={onInputChange}
          name="surname"
        />
        {phoneNumberError && (
          <div className="form-error">{phoneNumberError}</div>
        )}
        <input
          type="text"
          placeholder="Phone number"
          value={contact.phoneNumber}
          onChange={onInputChange}
          name="phoneNumber"
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
