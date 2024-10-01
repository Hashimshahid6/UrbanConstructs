import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <div>
      <section className="section-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={AboutImg} alt="about" className="img-fluid" />
            </div>
            <div className="col-lg-6 d-flex align-items-center py-4">
              <div>
                <span>About Us</span>
                <h2>Who We Are</h2>
                <p>
                  Urbanedge Construction is a leading construction company that
                  has been providing high-quality construction services to
                  clients across the globe. We have a team of highly skilled
                  professionals who are dedicated to providing exceptional
                  services to our clients. Our team has years of experience in
                  the construction industry and is committed to delivering
                  projects on time and within budget. We take pride in our work
                  and strive to exceed our clients' expectations with every
                  project we undertake.
                </p>
                <button className="btn btn-primary small">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
