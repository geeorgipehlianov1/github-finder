/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class User extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    const { login, avatar_url, html_url} = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ with: "10px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btb-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default User;
