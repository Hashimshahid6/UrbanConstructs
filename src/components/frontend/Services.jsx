import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImg1 from "../../assets/images/construction18.jpg";
import ServiceImg2 from "../../assets/images/construction22.jpg";
import ServiceImg3 from "../../assets/images/construction21.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading="Quality. Integrity. Value."
          subheading="Our Services"
          description="We offer a diverse array of construction services, <br/>spanning from
                residential to commercial projects."
        />

        <section className="section-3 py-5 bg-light">
          <div className="container">
            <div className="section-header text-center">
              <span>OUR SERVICES</span>
              <h2>Our Construction Services</h2>
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
                      src={ServiceImg1}
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
                      src={ServiceImg2}
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
                      src={ServiceImg3}
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

export default Services;