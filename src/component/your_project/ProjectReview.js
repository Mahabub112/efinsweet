import React from "react";
import FirstProject from "../projectlayout/FirstProject";
import "./projectReview.css";
const ProjectReview = () => {
  return (
    <>
      <section className="project">
        <div className="container">
          <div className="box">
            <div className="left">
              <div className="title">
                <h2>View our projects</h2>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <a className="titlebtn" href="#">
                  View More <i className="fa-solid fa-right-long"> </i>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="mt">
            <div className="box">
              <div className="leftimg">
                <FirstProject>
                  <img src="photo/Card.png" alt="project-photo" />
                  <div className="overlay">
                    <div className="text">
                      <h3>Workhub office Webflow Webflow Design</h3>
                      <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam{" "}
                      </p>
                      <a href="#">
                        View More <i className="fa-solid fa-right-long"> </i>
                      </a>
                    </div>
                  </div>
                </FirstProject>
              </div>
              <div className="rightimg">
                <div className="imgbox">
                  <FirstProject>
                    <img src="photo/Card.png" alt="project-photo" />
                    <div className="smalloverlay">
                      <div className="text">
                        <h3>Workhub office Webflow Webflow Design</h3>
                       
                        <a href="#">
                          View More <i className="fa-solid fa-right-long"> </i>
                        </a>
                      </div>
                    </div>
                  </FirstProject>
                </div>
                <div className="imgbox">
                  <FirstProject>
                    <img src="photo/Card.png" alt="project-photo" />
                    <div className="smalloverlay">
                      <div className="text">
                        <h3>Workhub office Webflow Webflow Design</h3>
                        <p>
                          Euismod faucibus turpis eu gravida mi. Pellentesque et
                          velit aliquam{" "}
                        </p>
                        <a href="#">
                          View More <i className="fa-solid fa-right-long"> </i>
                        </a>
                      </div>
                    </div>
                  </FirstProject>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectReview;
