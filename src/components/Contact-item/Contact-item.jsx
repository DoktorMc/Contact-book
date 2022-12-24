import React, { Component } from "react";

import "./contact-item.css";

export default class ContactItem extends Component {
  onClickDelete = (e) => {
    e.stopPropagation();
    this.props.onDeleteItem(this.props.item.id);
  };
  render() {
    const { item } = this.props;

    return (
      <div className="item-group">
        <div>{item.name}</div>
        <div>{item.surname}</div>
        <div>{item.phoneNumber}</div>
        <span className="item-group_delete" onClick={this.onClickDelete}>
          X
        </span>
      </div>
    );
  }
}
