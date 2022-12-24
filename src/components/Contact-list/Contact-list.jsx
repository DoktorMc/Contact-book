import React, { Component } from "react";
import ContactItem from "../contact-item";

import "./contact-list.css";

export default class ContactList extends Component {
  render() {
    return (
      <div className="list-items">
        {this.props.contacts.map((item) => (
          <ContactItem
            item={item}
            key={item.id}
            onDeleteItem={this.props.onDeleteItem}
          />
        ))}
      </div>
    );
  }
}
