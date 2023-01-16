import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css'

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
      description:
        "A Full-stack web developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a B.Tech in CSE, willing to be an asset for an organization.",
      highlights: {
        bullets: [
          "Full Stack web development",
          "Interactive Front End as per the design",
          "MERN Stack development",
          "Redux for State Mnanagement",
          "Building REST API using NodeJs",
          "Managing databases ( SQL and No-SQL)",
          "Building REST API using SpringBoot",


        ],
        heading: "Here are a Few Highlights:",
      },
    };

    const renderHighlight = () => {
      return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ));
    };
  
    return (
      <div className="about-me-container screen-container" id={props.id || ""}>
        <div className="about-me-parent">
          <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTSANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
                <button className="btn primary-btn"> Hire Me </button>
                <a href="Vishal-resume.pdf" download="vishal.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default AboutMe;
