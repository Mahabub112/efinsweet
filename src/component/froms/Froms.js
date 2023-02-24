import React from 'react'
import FromInput from '../frominput/FromInput'
import "./froms.css"
const Froms = () => {
  return (
    <>
     <section className="forms">
       <div className="container">
        <div className="box">
            <div className="left">
                <div className="leftimg">
                    <img src="photo/formphoto.png" alt="project-photo"/>
                    <div className="overlay">
                        <div className="text">
                            <h3>Building stellar websites for early startups</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h3>Send inquiry</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore.</p>
                <form action="">
                   <FromInput plc="Your Name" plc1="Email"plc2="Paste your Figma design URL"plc3="Send an Inquiry"/>
                   {/* <FromInput  />
                   <FromInput  />
                   <FromInput  /> */}       
                </form>
                <a href="#">Get in touch with us <i className="fa-solid fa-right-long"> </i></a>
            </div>
        </div>
       </div>
       </section>
    </>
  )
}

export default Froms