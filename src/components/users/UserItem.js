/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const UserItem = ({user: { login, avatar_url, html_url} }) => {

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

export default UserItem;
