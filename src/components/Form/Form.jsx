import React, { Component } from "react";

import "./form.css";

export default class Form extends Component {
  state = {
    data: {
      name: "",
      surname: "",
      phoneNumber: "",
    },
    // valid: false,
  };

  onInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.onAddElemnt(this.state.data);
    this.props.changeActivity();
  };

  onCancel = (e) => {
    e.preventDefault();
    this.props.changeActivity();
  };

  render() {
    return (
      <form className="form">
        <div className="form-input">
          <input
            type="text"
            placeholder="Name"
            value={this.state.data.name}
            onChange={this.onInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Surname"
            value={this.state.data.surname}
            onChange={this.onInputChange}
            name="surname"
          />
          <input
            type="text"
            placeholder="Phone number"
            value={this.state.data.phoneNumber}
            onChange={this.onInputChange}
            name="phoneNumber"
          />
        </div>
        <div className="form-button">
          <button
            className="form-button_save"
            onClick={this.onClick}
            // disabled={!this.state.valid}
          >
            Save
          </button>
          <button className="form-button_cancel" onClick={this.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
