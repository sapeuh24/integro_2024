import React, { useState } from "react";
import axios from "axios";

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palindrome: "",
      result: "",
    };
  }

  handleChange = (e) => {
    this.setState({ palindrome: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      palindrome: this.state.palindrome,
    };
    axios
      .post("http://localhost:3000/palindrome", data)
      .then((res) => {
        this.setState({ result: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Palindrome:
            <input
              type="text"
              value={this.state.palindrome}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Check</button>
        </form>
        <p>{this.state.result}</p>
      </div>
    );
  }
}
