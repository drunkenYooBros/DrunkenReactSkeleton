import React from "react"
import User from "layout/user/User"
import Menu from "layout/menu/Menu"

function Header() {
  const logoStyle: any = {
    fontWeight: "bold",
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span style={logoStyle}>React Play</span>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          title="xxx"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Menu />
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <User />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
