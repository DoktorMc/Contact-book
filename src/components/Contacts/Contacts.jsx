import React, { useState } from "react";
import useContacts from "../../hooks/useContacts";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";

import "./Contacts.css";

function Contacts() {
  const [active, setActiv] = useState(false);

  const onChangeActvivity = () => {
    setActiv(!active);
  };

  const { contacts, addContact, deleteContact } = useContacts();

  return (
    <>
      <div className="app-title">Contacts Book</div>

      <div className="app-header">
        <div>Name</div>
        <div>User Name</div>
        <div>Phone number</div>
        <div>E-mail</div>
      </div>

      <ContactList contacts={contacts} onDeleteItem={deleteContact} />
      {active ? (
        <Form onAddElement={addContact} changeActivity={onChangeActvivity} />
      ) : (
        <span className="app-add_button" onClick={onChangeActvivity}>
          add contact
        </span>
      )}
    </>
  );
}

export default Contacts;
