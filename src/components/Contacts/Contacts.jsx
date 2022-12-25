import React, { useState } from "react";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";

import "./Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Paul",
      surname: "Anderson",
      phoneNumber: "+380991231212",
    },
    {
      id: 2,
      name: "Marshal",
      surname: "Maters",
      phoneNumber: "+380991472525",
    },
    { id: 3, name: "Fred", surname: "Durst", phoneNumber: "+380974562323" },
  ]);

  const [active, setActiv] = useState(false);

  const addContact = (contact) => {
    contact = { ...contact, id: Math.random() };
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const onChangeActvivity = () => {
    setActiv(!active);
  };

  return (
    <>
      <div className="app-title">Contacts Book</div>

      <div className="app-header">
        <div>Name</div>
        <div>Surname</div>
        <div>Phone number</div>
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
