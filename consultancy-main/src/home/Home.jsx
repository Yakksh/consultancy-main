import { useState, useEffect } from "react";
import { Container, Row, Col  } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {  NavLink  } from "react-router-dom";
import './Home.css'

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "US", "TickleMinds", "TMAT" ];
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div>
    <section className="banner" id="home">
      <Container>
      <div>
          <div className="column">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to TickleMinds</span>
                <h1>{`Nobody Does it like`} <span className="txt-rotate" dataperiod="500" data-rotate='[ "US", "TickleMinds", "TMAT" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  TickleMinds is a full-service software development company that helps businesses and organizations bring their ideas to life with custom software solutions. 
                  From small startups to large enterprises, we have the experience and expertise to develop software that meets the unique needs of our clients. 
                  {/* We pride ourselves on our ability to deliver high-quality software on time and on budget, and we work closely with our clients throughout the development process to ensure their complete satisfaction. */}
                  </p>
                  <button><NavLink to='/services'>Expore More<ArrowRightCircle size={25} /></NavLink></button>
              </div>}
            </TrackVisibility>
          </div>
          <div className="column">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="animated-img" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </Container>
    </section>

    

    <section className="services" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1>Services</h1>
                <p>At TickleMinds, we are committed to delivering innovative and 
                  reliable software that helps our clients stay ahead of the competition. We understand 
                  that every business is unique, and we work closely with our clients to understand their 
                  specific needs and requirements. Contact us today to discuss your project and see how 
                  we can help you achieve your goals.</p>
               
          <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box" data-aos="zoom-in">
              <div className="icon"><i className="bi bi-code-square"></i></div>
              <h4><a >Custom Software Development</a></h4>
              <p> We specialize in developing custom software that is tailored to the specific needs of your business.
              Whether you need a new application, a system integration, or a complete software solution, 
                we have the expertise to deliver a reliable and scalable product.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a >Web Development</a></h4>
              <p>We develop responsive, and user-friendly websites that are optimized for search engines. 
                Our web development services include website design, content management systems, e-commerce, 
                and custom web applications.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="bi bi-cloudy-fill"></i></div>
              <h4><a >Cloud Computing and Infrastructure</a></h4>
              <p>We help our clients in migration and implementation of cloud infrastructure like AWS, 
                Azure, and Google Cloud. We also help in building cost-efficient and secure infrastructure on cloud.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="bi bi-cpu"></i></div>
              <h4><a >Artificial Intelligence and Machine Learning</a></h4>
              <p>We help businesses to leverage the power of AI and ML to improve their operations and gain a competitive edge. 
                Our services include natural language processing, computer vision, predictive analytics, and more.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon"><i className="bi bi-boxes"></i></div>
              <h4><a >Blockchain Development </a></h4>
              <p>We help businesses to leverage the power of blockchain technology to improve security, 
                transparency, and efficiency of their operations. Our services include blockchain platform development, 
                smart contract development, and blockchain integration.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon"><i className="bi bi-gear"></i></div>
              <h4><a >Maintenance and Support </a></h4>
              <p>We provide ongoing maintenance and support services to ensure that the software 
                we develop continues to meet the needs of your business. Our services include software updates, 
                bug fixes, and technical support.</p>
            </div>
          </div>

                        </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>




    </div>

    
    

  )
}
export default Home;