import "./Services.css";
import * as Icon from "react-bootstrap-icons";
import Svr1 from "../assets/img/Service-robots.png";

const handleLoadMore = () => {
  // Code to load more data goes here
  console.log("Load More button clicked!");
};

const handleMoreAbout = () => {
  // Code to load more data goes here
  console.log("More About button clicked!");
};

const handleIcon = () => {
  // Code to load more data goes here
  console.log("Icon clicked!");
};

const Services = () => {
  return (
    <div id="services__main">
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Services</h1>
        <div className="d-inline-flex text-white">
          <p className="m-0">
            <a className="text-white" href="">
              Home
            </a>
          </p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">Services</p>
        </div>
      </div>
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img src={Svr1} alt="No Image" />
          </div>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>
              Empowering Your Business with Innovative Technology Solutions
            </h1>
            <p className="text">
              Our team of experienced developers, designers, and consultants are
              passionate about technology and committed to delivering the best
              possible solutions to our clients. We leverage the latest
              technologies and industry best practices to deliver software that
              is robust, scalable, and user-friendly. If you have a project in
              mind, feel free to contact us to discuss your goals and explore
              how we can help you achieve them.
            </p>
            <button className="btn btn-primary" onClick={handleMoreAbout}>
              More About
            </button>
          </div>
        </div>
      </div>
      <div className="services__servicesComp">
        <div>
          <h1>Our Technology Services - Providing What You Need</h1>
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
        <div>
          <div>
            <button className="icon" onClick={handleIcon}>
              <Icon.ArrowRight color="black" />
            </button>
            <h4>Web Development</h4>
            <p>
              Using the latest technologies to enhance online visibility and
              drive business growth.
            </p>
          </div>
          <div>
            <button className="icon" onClick={handleIcon}>
              <Icon.ArrowRight color="black" />
            </button>
            <h4>Cloud Computing</h4>
            <p>Help businesses leverage the full potential of the cloud.</p>
          </div>
          <div>
            <button className="icon" onClick={handleIcon}>
              <Icon.ArrowRight color="black" />
            </button>
            <h4>AI & ML</h4>
            <p>
              Help businesses build intelligent systems that can learn from data
              and improve decision-making processes.
            </p>
          </div>
          <div>
            <button className="icon" onClick={handleIcon}>
              <Icon.ArrowRight color="black" />
            </button>
            <h4>Custom Software Development</h4>
            <p>
              Help businesses build scalable, user-friendly, and cost-effective
              software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
