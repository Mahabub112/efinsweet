import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
        <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                   <p>Copyright 2022, Finsweet.com</p>
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
                   
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer