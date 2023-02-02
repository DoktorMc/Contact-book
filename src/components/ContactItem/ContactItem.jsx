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
      <div>{item.userName}</div>
      <div>{item.phone}</div>
      <div>{item.email}</div>
      <span className="item-group_delete" onClick={onClickDelete}>
        X
      </span>
    </div>
  );
}
export default ContactItem;
