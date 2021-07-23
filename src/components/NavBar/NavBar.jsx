import React from "react";

const NavBar = ({ temp, username }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
            {temp} °C
          </span>
          <span className="badge badge-pill badge-info m-2" style={{ width: 500 }}>
           Hello {username}, have a good day !
          </span>
        </div>
      </nav>
    )

}

export default NavBar;