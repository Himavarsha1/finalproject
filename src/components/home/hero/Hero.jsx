import React from "react"
import Heading from "../../common/heading/Heading"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO TALKFUSION"
              title="Best Online Language Expertise"
            />
            <p>Your passport to multilingual mastery</p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero;