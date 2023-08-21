import React, { Fragment, useState } from "react";
import "./Pricing.css";
import Navbar from "../../components/navbar/Navbar";
import question from "../../images/question.png";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import com3 from "../../images/Community3.png";
import Footer from "../../components/footer/Footer";

const Pricing = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <Fragment>
      <Navbar />
      <div className="pricing-top">
        <h1>Pricing</h1>
        <br />
        <br />
        <h5 style={{ color: "gray" }}>
          Our pricing is not expensive but its not cheap either, its exactly{" "}
          <br />
          what its should be
        </h5>
      </div>
<div className="toggle">
      <div class="switch-toggle switch-3 switch-candy">

      <input id="on" name="state-d" type="radio"  />
      <label for="on" onclick="">Basic</label>
    
      <input id="na" name="state-d" type="radio" checked="checked" />
      <label for="na" class="disabled" onclick="">Pro</label>
    
      <input id="off" name="state-d" type="radio" />
      <label for="off" onclick="">Business</label>
    </div>
    </div>

      <div className="pricing-2nd">
        <div className="pricing-2nd-left">
          <h3>Pro</h3>
          <br />
          <h2>$19</h2>
          <h4>/month</h4>
          <br />
          <h5>For startups and growing business</h5>
        </div>
        <div className="pricing-2nd-right">
          <button className="pricing-popular">Most Popular</button>
        </div>
        <button className="pricing-btn">Get started with Pro</button>
      </div>
      <br />
      <br />
      <br />
      <div className="features-wrapper">
        <div className="pricing-3rd">
          <h2>Compare Features</h2>
          <br />

          <div className="features-flex-1st">
            <div>
              <h3>Basic</h3>
            </div>
            <div>
              <h3>Pro</h3>
            </div>
            <div>
              <h3>Business</h3>
            </div>
          </div>
          <hr />

          <div className="features-flex-2nd">
            <div className="basic">
              <ul>
                <li className="feature-tasks">Process Analysis</li>
                <li className="feature-tasks">Task Managemenet</li>
                <li className="feature-tasks">Time Tracking</li>
                <li className="feature-tasks">Performance Matrics</li>
              </ul>
            </div>
            <div className="pro">
              <ul>
                <li className="feature-tasks">Process Analysis</li>
                <li className="feature-tasks">Task Managemenet</li>
                <li className="feature-tasks">Time Tracking</li>
                <li className="feature-tasks">Performance Matrics</li>
                <li className="feature-tasks">Costamizable reports</li>
                <li className="feature-tasks">Email integration</li>
              </ul>
            </div>
            <div className="business">
              <ul>
                <li className="feature-tasks">Process Analysis</li>
                <li className="feature-tasks">Task Managemenet</li>
                <li className="feature-tasks">Time Tracking</li>
                <li className="feature-tasks">Performance Matrics</li>
                <li className="feature-tasks">Costamizable reports</li>
                <li className="feature-tasks">Email integration</li>
                <li className="feature-tasks">Analytics dsahboard</li>
                <li className="feature-tasks">Automated workflows</li>
              </ul>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center" }}>
          <img
            className="pricing-img"
            src={question}
            alt=""
            width="350px"
            height="350px"
          />
        </p>
        <h1 style={{ textAlign: "center" }}>
          Frequesntly asked <br />
          questions
        </h1>

        <div className="wrapper">
          <div className="faq-list">
            <div className="faq-list-item">
              <div className="faq-list-question">
                {" "}
                What does the free trial include?
                <div
                  className="arrow-icon"
                  onClick={() => {
                    setOpen1(!open1);
                  }}
                >
                  {open1 ? <FiArrowUp /> : <FiArrowDown />}
                </div>
              </div>
              <div className={`faq-list-ans ${open1 ? "active" : "inactive"}`}>
                During the 14 days of the free trial, you can add unlimited
                Actions Logs, Snapshots & Metrics to up to 20 concurrently
                running SDKs, using up to 10 developers seats.
              </div>
            </div>

            <div className="faq-list-item">
              <div className="faq-list-question">
                Do you charge per developer seat or per SDK?
                <div
                  className="arrow-icon-two"
                  onClick={() => {
                    setOpen2(!open2);
                  }}
                >
                  {open2 ? <FiArrowUp /> : <FiArrowDown />}
                </div>
              </div>
              <div className={`faq-list-ans ${open2 ? "active" : "inactive"}`}>
                Lightrun charges per developer every developer seat comes with
                10 concurrently running SDKs, which directly translate into
                running application instances (running JVMs, V8s, Python
                interpreters, etc…).
              </div>
            </div>

            <div className="faq-list-item">
              <div className="faq-list-question">
                Do I need a credit card to get started?
                <div
                  className="arrow-icon"
                  onClick={() => {
                    setOpen3(!open3);
                  }}
                >
                  {open3 ? <FiArrowUp /> : <FiArrowDown />}
                </div>
              </div>
              <div className={`faq-list-ans ${open3 ? "active" : "inactive"}`}>
                No! You can get started with a Lightrun 14-day free trial any
                time, no credit card required.
              </div>
            </div>
          </div>
        </div>
        <div className="about-4th">
          <div className="about-4th-left">
            <h2>
              Get Started with <br />
              Lando today
            </h2>
            <br />
            <h5 style={{ color: "gray" }}>
              Have you can explain why people <br />
              should definitaly useyour product <br />
              right now
            </h5>
            <br />
            <br />
            <button className="signupbtn">Signup Now</button>
          </div>
          <div className="about-4th-img">
            {" "}
            <img src={com3} alt="" width="200px" height="200px" />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <hr />
      <Footer />
    </Fragment>
  );
};

export default Pricing;
