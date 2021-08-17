import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form className="form">
          <label>MEME HEADER </label>
          <input
            type
            text="text"
            placeholder="meme header"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br />
          <label> MEME BODY </label>
          <input
            type="text"
            placeholder="meme body"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <div className="meme-container">
          <h4 className="top">{this.state.topText}</h4>
          <h4 className="bottom"> {this.state.bottomText}</h4>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
