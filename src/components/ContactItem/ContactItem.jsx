import React from "react";

import "./ContactItem.css";

function ContactItem({ item, onDeleteItem }) {

  const onClickDelete = (e) => {
    e.stopPropagation();
    onDeleteItem(item.id);
  };

  return (
    <div className="item-group">
      <div>{item.name}</div>
      <div>{item.surname}</div>
      <div>{item.phoneNumber}</div>
      <span className="item-group_delete" onClick={onClickDelete}>
        X
      </span>
    </div>
  );
}
export default ContactItem;
