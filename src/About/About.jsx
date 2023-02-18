import { useEffect, useRef } from "react";
import "./About.css";
import SerImg3 from "../assets/img/Service-img3.png";
import abouthead from "../assets/aboutheader.mp4";

const About = () => {
  return (
    <div id="about__main">
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">About Us</h1>
        <div className="d-inline-flex text-white">
          <p className="m-0">
            <a className="text-white" href="/">
              Home
            </a>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">About</p>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row  pb-1 aboutTextDiv">
            <div className="col-lg-5">
              <img
                className="img-thumbnail p-3"
                src={SerImg3}
                alt="About img"
              />
            </div>
            <div className="col-lg-7 mt-lg-0">
              <small className="bg-dark text-white text-uppercase font-weight-bold px-1">
                Tickle Minds Assured Tech Pvt Ltd
              </small>
              <h1 className="mt-2 mb-4">TickleMinds</h1>
              <h6 className="mb-4 d-flex">
                TickleMinds Assured Tech Pvt Ltd is a software consultancy
                company that specializes in providing top-notch technology
                solutions to businesses of all sizes. We were founded with the
                goal of helping businesses achieve their goals by leveraging the
                latest technologies and industry best practices. Our team is
                made up of experienced developers, designers, and consultants
                who are passionate about technology and are committed to
                delivering the best possible solutions to our clients. We use
                the latest technologies and industry best practices to deliver
                software that is robust, scalable, and easy to use. We
                understand that every business is unique, and we work closely
                with our clients to understand their specific needs and
                requirements. We then tailor our solutions to meet their
                specific needs, ensuring that we deliver software that is
                tailored to their business and will help them achieve their
                goals. At TickleMinds Assured Tech Pvt Ltd, we are committed to
                delivering innovative and reliable software that helps our
                clients stay ahead of the competition. We have worked with a
                wide range of clients across different industries and have a
                proven track record of delivering successful projects. If you're
                looking for a software consultancy company that can help you
                stay ahead of the competition, look no further than TickleMinds
                Assured Tech Pvt Ltd. Contact us today to discuss your project
                and see how we can help you achieve your goals.
              </h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div
                className="d-flex align-items-center justify-content-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Our Office</h5>
                  <p className="m-0">
                    1st Floor, Kiran Kutir, Zeromile, Muz, Bihar pin:842004
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center justify-content-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Email Us</h5>
                  <p className="m-0">info@tickleminds.in</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center justify-content-center border mb-4 mb-lg-0 p-4"
                style={{ height: "120px" }}
              >
                <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Call Us</h5>
                  <p className="m-0">7568992589</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
