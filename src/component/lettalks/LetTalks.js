import React from 'react'
import "./lettalks.css"
const LetTalks = () => {
  return (
    <>
         <div className="letpart">
                <div className="container">
                    <div className="box">
                        <div className="left">
                        <div className="logo">
                            <img src="photo/logo.png" alt="logo"/>
                        </div>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                        <div className="box-2">
                            <div className="box-left">
                                <h3>Email me at</h3>
                                <p>contact@website.com</p>
                            </div> 
                            <div className="box-right">
                                <h3>Call us</h3>
                                <p>0927 6277 28525</p>
                            </div> 
                        </div>
                        </div>
                        <div className="right">
                            <h2>Lets Talk!</h2>
                            <p>We are always open to discuss your project, 
                                improve your online presence and help with your UX/UI design challenges.</p>
                                <div className="social">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LetTalks