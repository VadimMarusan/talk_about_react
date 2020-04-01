import React from "react"
import "./Header.css"
import Menu from "./Menu/Menu"
import Logo from "./Logo/Logo"


const Header = () => {
	return (
        <header className="header">
             <div className="container">
              <div className="header-menu-container">
                <Logo/>
                <Menu/>
              </div>
            </div>
      </header>	
	)
}

export default Header