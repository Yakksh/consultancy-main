import "./Services.css";
import * as Icon from "react-bootstrap-icons";

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
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>We are the solutions for IT problems</h1>
            <p className="text">
              All our services are delivered by a team of experienced
              developers, designers, and consultants who are passionate about
              technology and committed to delivering the best possible solutions
              to our clients. We use the latest technologies and industry best
              practices to deliver software that is robust, scalable, and easy
              to use. Contact us today to discuss your project and see how we
              can help you achieve your goals.
            </p>
            <button className="btn btn-primary">More About</button>
          </div>
        </div>
      </div>
      <div className="services__servicesComp">
        <div>
          <h1>Our Servcices For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>
        <div>
          <div>
            <div className="icon">
              <Icon.ArrowRight color="black" />
            </div>
            <h4>Cyber Security</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <Icon.ArrowRight color="black" />
            </div>
            <h4>IT Consultant</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <Icon.ArrowRight color="black" />
            </div>
            <h4>Cyber Security</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <Icon.ArrowRight color="black" />
            </div>
            <h4>IT Consultant</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
