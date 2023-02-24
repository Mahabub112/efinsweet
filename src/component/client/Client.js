import React from 'react'
import "./clinet.css"
const Client = () => {
  return (
    <>
         <div className="client">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <h3>What our clients say about us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="right">
                        <p>"The best agency we’ve worked with so far. They understand our product and are
                             able to add new features with a great focus."</p>
                        <div className="clientlist">
                            <div className="clientimg">
                                <img src="photo/Mask Group.png" alt="client-img"/>
                                <div className="text">
                                    <h3>Jenny Wilson</h3>
                                <p>Vice President</p>
                                </div>
                            </div>
                            <div className="clienshow">
                                <a href="" className="showclassName">
                                   <i  className="fa-sharp  fa-solid fa-chevron-left"></i>
                                <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Client