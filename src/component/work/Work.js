import React from "react";
import Layout from "../layout/Layout";
import Title from "../layout/Title";
import "./work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="box">
          <div className="left">
            <Title>
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#">
              Get in touch with us <i className="fa-solid fa-right-long"> </i>
            </a>
            </Title>
          </div>
          <div className="right">
            <Layout
              title=" Mern Stack"
              para=" Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              img="photo/pointer 1.png"
            />
            <Layout
              title=" Mern Stack2022"
              para=" Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              img="photo/pointer 1.png"
            />
            <Layout
              title=" Mern Stack 2023"
              para=" Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              img="photo/pointer 1.png"
            />
            <Layout
              title=" Mern Stack 2024"
              para=" Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              img="photo/pointer 1.png"
            />
            {/* <div className="partition-2">
                    <img src="photo/pointer 1.png" alt="pointer"/>
                    <h2>Wireframing</h2>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </p>
                </div>
                 <div className="partition-3">
                    <img src="photo/pointer 1.png" alt="pointer"/>
                    <h2>Design</h2>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </p>
                </div>
                <div className="partition-4">
                    <img src="photo/pointer 1.png" alt="pointer"/>
                    <h2>Development</h2>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </p>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
