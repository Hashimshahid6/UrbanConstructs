import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ConstructionImg1 from "../../assets/images/construction2.jpg";
import ConstructionImg2 from "../../assets/images/construction3.jpg";
import ConstructionImg3 from "../../assets/images/construction4.jpg";
import ConstructionImg4 from "../../assets/images/construction5.jpg";
import ConstructionImg5 from "../../assets/images/construction6.jpg";
import ConstructionImg6 from "../../assets/images/construction7.jpg";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading="Quality. Integrity. Value."
          subheading="Our Projects"
          description="We excel at transforming visions into reality <br />
            through outstanding craftsmanship and precise."
        />
        <section className="section-3 bg-light">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>OUR PROJECTS</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning from
                residential to commercial projects.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg1}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg2}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg3}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg4}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg5}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg6}
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      Speciality construction services for unique projects that
                      require a high level of expertise and skill.
                    </div>
                    <a href="#" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
