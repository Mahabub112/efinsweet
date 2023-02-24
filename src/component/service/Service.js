import React from 'react'
import ServicePorduct from '../serviceproduct/ServicePorduct'
import "./service.css"
const Service = () => {
  return (
    <>
         <section className="service">
            <div className="container">
                <div className="box-item">
                    <div className="left">
                        <h6>Features</h6>
                        <h3>Design that solves problems, one product at a time</h3>
                    </div>
                    <div className="right">
                        <ServicePorduct titles="Uses Client First" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                        <ServicePorduct titles="Two Free Revision Round" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                        <ServicePorduct titles="Template Customization" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                        <ServicePorduct titles="24/7 Support" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                        <ServicePorduct titles="Hands-on approach" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                        <ServicePorduct titles="Uses Client First" 
                        para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                        img = "photo/pointer 1.png"
                        />
                       
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Service