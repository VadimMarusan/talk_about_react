import React from "react"
import {Link} from "react-router-dom"

const Menu =()=> {
    return (
        <div>
            <nav className="menu">
                  <ul className="menu-list">
                    <li><Link to="/" className="menu-link">Spotligts</Link></li>
                    <li><Link to="/science_page" className="menu-link">Science</Link></li>
                    <li><Link to="/" className="menu-link">Politics</Link></li>
                    <li><Link to="/" className="menu-link">Design</Link></li>
                    <li><Link to="/" className="menu-link">Travel</Link></li>
                    <li><Link to="/" className="menu-link">Technology</Link></li>
                  </ul>
                </nav>
        </div>
    )
}

export default Menu