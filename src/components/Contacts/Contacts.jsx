import React, { useState } from "react";
import { connect } from "react-redux";
import useContacts from "../../hooks/useContacts";
import { changeActivity } from "../../store/actions/activityActions";
import { searchContact } from "../../store/actions/searchAction";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";

import "./Contacts.css";

function Contacts({ active, onChangeActvivity, onSearchContact }) {
  return (
    <>
      <div className="app-title">Contacts Book</div>
      <div>
        <input
          type="text"
          className="app-searcher"
          placeholder="Searcher"
          onChange={(e) => onSearchContact(e.target.value)}
        />
      </div>
      <div className="app-header">
        <div>Name</div>
        <div>User Name</div>
        <div>Phone number</div>
        <div>E-mail</div>
      </div>

      <ContactList />
      {active ? (
        <Form />
      ) : (
        <span className="app-add_button" onClick={onChangeActvivity}>
          add contact
        </span>
      )}
    </>
  );
}

function mapStateToProps ({activity}) {
  const item = activity.activity
  
  return {
    active: item
  }
}

const mapDispatchToProps = {
  onChangeActvivity: changeActivity,
  onSearchContact: searchContact
};

export default connect(mapStateToProps, mapDispatchToProps) (Contacts);
