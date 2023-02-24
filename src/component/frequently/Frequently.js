import React from 'react'
import Fqline from '../fqline/Fqline'
import "./frequently.css"
const Frequently = () => {
  return (
    <>
        <section className="faq">
    <div className="container">
        <div className="box">
            <div className="left">
                <h3>
                    Frequently asked questions
                </h3>
                <a href="#">Contact us for more info</a>
            </div>
            <div className="right">
                <Fqline title=" What is your className naming convention?" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua."/>
                    <Fqline title=" What is your className naming convention?" />
                    <Fqline title=" What is your className naming convention?" />
                    <Fqline title=" What is your className naming convention?" />
                    <Fqline title=" What is your className naming convention?" />
                
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Frequently