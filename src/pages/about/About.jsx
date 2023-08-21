import React, { Fragment } from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import com from "../../images/Community.png";
import com2 from '../../images/Community2.png';
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';
import com3 from '../../images/Community3.png';

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="about">
        <div className="about-inner">
          <h1>Aboout us</h1>
          <br />
          <h5 style={{ color: "gray" }}>
            We offer revolutionary to the industry problems. <br />
            Join Lando community and experience the benifites of optimization
            today!
          </h5>
          <br />
          <p style={{ textAlign: "center" }}>
            <img className="com-img" src={com} alt="" />
          </p>
          <br />
          <h1>Our Mission</h1>
          <br />
          <h5 style={{ color: "gray" }}>
            At Lando we are commited to provide excellent services to our
            customres <br />
            and clients and to help them achieve the best outcomes. We believe
            That we <br />
            can make a positive impact on our community, industry and the world.
            Our <br />
            Lando team is dedicated to provide the best possible services
            support, <br />
            and we are always looking for ways to improve and innovate. <br />
            <br /><br /><br />
            <hr />
          </h5>
          <div className="inner-2nd">
          <h2>Let's start working <br />more efficiantly today</h2>
          <img src={com2} alt="" width="250px" height="250px"/>
          </div><br /><br />

          <div className="inner-3rd">
          <h1>Team</h1><br />
          <h5 style={{color:"gray"}}>Meet the people behind our magical product</h5><br />
          <div className="inner-persons-center">
          <div className="inner-team">
          
          <div >
          <img className="person" src={p1} alt="" width="200px" height="200px"/>
          <h5>Daniel Petter <br />CEO</h5>
          </div>
          <div >
          <img className="person" src={p2} alt="" width="200px" height="200px"/>
          <h5>Hannah Mika <br />CEO</h5>
          </div>
          <div >
          <img className="person" src={p3} alt="" width="200px" height="200px"/><br />
          <h5>Lars Mikkel <br />Head of operation</h5>
          </div>
          </div>
          <div className="inner-team">
          <div >
          <img className="person" src={p4} alt="" width="200px" height="200px"/>
          <h5>Edward Finch <br />Head of development</h5>
          </div>
          <div >
          <img className="person" src={p5} alt="" width="200px" height="200px"/>
          <h5>Micheala Hans <br />Platform development</h5>
          </div>
          <div >
          <img className="person" src={p6} alt="" width="200px" height="200px"/>
          <h5>Matthew Law <br />Tech Support</h5>
          </div>
          </div>
          
          </div>
          </div>


          <div className="about-4th">
          <div className="about-4th-left">
          <h2>Get Started with <br />Lando today</h2><br />
          <h5 style={{color:"gray"}}>Have you can explain why people <br />should definitaly useyour product <br />right now</h5><br /><br />
          <button className="signupbtn">Signup Now</button></div>
         <div className="about-4th-img"> <img src={com3} alt="" width="200px" height="200px" /></div>
          </div>
        </div>
      </div><br /><br />
      <hr />
      <Footer/>
    </Fragment>
  );
};

export default About;
