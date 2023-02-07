import './Technologies.css'
import * as Icon from 'react-bootstrap-icons';


const Technologies = () => {


  return (    
    <section id="technologies" className="technologies">
      <div className="container">

        <div className="section-title" data-aos="zoom-in">
        <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
            <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Technologies</h1>
            <div className="d-inline-flex text-white">
                <p className="m-0"><a className="text-white" href="">Home</a></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Technologies</p>
            </div>
        </div>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box" data-aos="zoom-in">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a >Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">
              <i className="bx bxl-dribbble"></i>;

                  </div>
              <h4><a >Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a >Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a >Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a >Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><a >Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Technologies
