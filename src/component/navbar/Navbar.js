import React from 'react'
import  "./navbar.css"
const Navbar = () => {
  return (
  
    <nav>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src="photo/logo.png" alt="Logo"/>
                </div>
                <div className="navitem">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                    <a href="#">Contack Us</a>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar