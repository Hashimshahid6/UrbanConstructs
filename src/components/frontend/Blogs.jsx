import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import BlogImg1 from "../../assets/images/construction5.jpg";
import BlogImg2 from "../../assets/images/construction6.jpg";
import BlogImg3 from "../../assets/images/construction7.jpg";

const Blogs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading="Quality. Integrity. Value."
          subheading="Our Blogs"
          description="We excel at transforming visions into reality <br />
            through outstanding craftsmanship and precise."
        />
        <section className="section-6 py-5 bg-light">
          <div className="container">
            <div className="section-header text-center">
              <span>BLOG & NEWS</span>
              <h2>Articles & Blog Posts</h2>
              <p>
                We offer a diverse array of construction services, spanning from
                residential to commercial projects.
              </p>
            </div>
            <div className="row pt-2">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg1} alt="blog" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-2">
                      <a href="" className="title mb-2">
                        Our Top 5 Construction Projects
                      </a>
                      <p>
                        Our top 5 construction projects that showcase our
                        expertise and commitment to quality.
                      </p>
                    </div>
                    <a href="" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg2} alt="blog" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-2">
                      <a href="" className="title">
                        Bahria Town Project
                      </a>
                      <p>
                        Our top 5 construction projects that showcase our
                        expertise and commitment to quality.
                      </p>
                    </div>
                    <a href="" className="btn btn-primary small">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg3} alt="blog" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-2">
                      <a href="" className="title">
                        Our Top 5 Construction Projects
                      </a>
                      <p>
                        Our top 5 construction projects that showcase our
                        expertise and commitment to quality.
                      </p>
                    </div>
                    <a href="" className="btn btn-primary small">
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

export default Blogs;