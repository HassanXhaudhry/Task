import React, { Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";
import img2 from '../../images/image2.png';
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="contact">
      <div className="contact-heading">
        <h1>Conatct us</h1>
        <h3 style={{ color: "gray" }}>
          Explore the future with us. Feel free to get in touch
        </h3>
        </div>

        <div className="contact-input">
          <form className="contact-form" action="">
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder="Full Name" /><br />
            <label htmlFor="">Email</label><br />
            <input type="Email" placeholder="Email Address"/><br />
            <label htmlFor="text">Message</label><br />
            <input type="text" placeholder="How can we get better?"/><br />
            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      <p style={{textAlign:"center"}} className="contact-img">  <img  src={img2} alt="" width="400px" height="600px"/></p>
      <hr />
      <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;
