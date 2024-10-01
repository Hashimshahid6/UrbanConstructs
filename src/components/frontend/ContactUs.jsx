import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading="Quality. Integrity. Value."
          subheading="Contact Us"
          description="We are available 24/7 to facilite our clients."
        />
        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span></span>
              <h2>Contact Us</h2>
              <p>
                Our dedicated experts are here to help you with any of your
                questions, contact us by
                <br /> filling out the form below and we will be in touch
                shortly
              </p>
            </div>
            <div className="row">
              <div className="col-12 mb-4">
                {" "}
                {/* Full width on all screens, margin bottom for spacing */}
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>Call Us</h3>
                        <div>
                          <a href="#">+923131959193</a>
                        </div>
                        <div>
                          <a href="#">+923161911238</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h3>You Can Write Us</h3>
                        <div>
                          <a href="#">info@urbanedge.com</a>
                        </div>
                        <div>
                          <a href="#">inquiry@urbanedge.com</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h3>Address</h3>
                        <div>
                          <p>Islamabad, Pakistan 23200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-5">
                    <form action="">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label htmlFor="">Message</label>
                          <textarea
                            rows={5}
                            className="form-control form-control-lg"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <button className="btn btn-primary large mt-4">
                        Submit
                      </button>
                    </form>
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
export default Contact;
