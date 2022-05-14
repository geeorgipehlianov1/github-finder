import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            vlaue="Serach"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </>
    );
  }
}

export default Search;
