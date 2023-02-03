import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import { deleteContact } from "../../store/actions/contactsActions";

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

function mapStateToProps ({contacts, search}) {
  let items = contacts.contacts
  if (search.length !== 0) {
    let searchText = search.toLowerCase();
    items = items.filter((el) => ~el.name.toLowerCase().indexOf(searchText));
  }
 
  return {
    contacts: items
  };
}

const mapDispatchToProps = {
  onDeleteItem: deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
