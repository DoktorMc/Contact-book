import React from "react";
import ContactItem from "../ContactItem/ContactItem";

import "./ContactList.css";

function ContactList({ contacts, onDeleteItem }) {
  return (
    <div className="list-items">
      {contacts.map((item) => (
        <ContactItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

export default ContactList;
