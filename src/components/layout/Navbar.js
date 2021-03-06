import React from "react";


export const Navbar = ({icon, title}) => {

    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </nav>
    );
}

export default Navbar;
