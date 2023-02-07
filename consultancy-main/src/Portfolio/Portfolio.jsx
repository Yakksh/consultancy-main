import { Component } from "react";
import Work from "./work-box";
import "./Portfolio.css";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "Modern UI/UX Dashboard Design",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      },
      {
        img:
          "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
        title: "Food and Consumation Web App",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      },
      {
        img:
          "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Future Social Media Web 3.0 d'App",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      }
    ];
  }
  render() {
    return (
<div id="portfolio">
<div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
      <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Portfolio</h1>
      <div className="d-inline-flex text-white">
          <p className="m-0"><a className="text-white" href="">Home</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">Portfolio</p>
      </div>
  </div>
      <section className="container container__portfolio" >
          <Work img={this.works[0].img} title={this.works[0].title} text={this.works[0].text} />

          <div>
            <div className="portfolio__header">
              <h1>{this.works[0].text}</h1>
              <button className="btn btn-primary">More About</button>
            </div>
          </div>

          <div>
            <div className="portfolio__header">
              <h1>{this.works[1].text}</h1>
              <button className="btn btn-primary">More About</button>
            </div>
          </div>
          <Work img={this.works[1].img} title={this.works[1].title} text={this.works[1].text} />


      </section>
</div>
    );
  }
}
export default Portfolio;
