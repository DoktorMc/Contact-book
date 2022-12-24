import React, { Component } from "react";
import ContactList from "./components/contact-list";
import Form from "./components/form/form";

import "./app.css";

export default class App extends Component {
  state = {
    contacts: [
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
    ],
    active: false,
  };

  addContact = (newContact) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: Math.random(),
          ...newContact,
        },
      ],
    });
  };

  deleteContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== id) });
  };

  onChangeAtvivity = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    const isActive = this.state.active;
    return (
      <>
        <div className="app-title">Contacts Book</div>

        <div className="app-header">
          <div>Name</div>
          <div>Surname</div>
          <div>Phone number</div>
        </div>

        <ContactList
          contacts={this.state.contacts}
          onDeleteItem={this.deleteContact}
        />
        {isActive ? (
          <Form
            onAddElemnt={this.addContact}
            changeActivity={this.onChangeAtvivity}
          />
        ) : (
          <span className="app-add_button" onClick={this.onChangeAtvivity}>
            add contact
          </span>
        )}
      </>
    );
  }
}
