import { Component } from "react";

import "./footer.css";
import * as Icon from 'react-bootstrap-icons';
import tickleminds from "../assets/img/tickleminds.png";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className=" footer__container jumbotron text-center px-8" >
        <div className="about">
          <img src={tickleminds} alt="TickleMinds" />
          <p className="text">
          TickleMinds Assured Tech Pvt Ltd is a software consultancy company that specializes 
          in providing top-notch technology solutions to businesses of all sizes. 
          We were founded with the goal of helping businesses achieve their goals by leveraging 
          the latest technologies and industry best practices.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <Icon.Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tickleminds/">
                <Icon.Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.Twitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                AI and Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT Consultant
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Strategy & Research
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Office: 1st Floor, Kiran Kutir, Zeromile, Muz, Bihar pin:842004
              </address>
            </li>
            <li>
              <a href="tel:+917568992589" className="text">
                Tel : +917568992589
              </a>
            </li>
            <li>
              <a href="mailto:contact@tickleminds.in" className="text">
                Email: contact@tickleminds.in
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
