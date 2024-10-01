import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg1 from "../../assets/images/construction18.jpg";
import ServiceImg2 from "../../assets/images/construction19.jpg";
import ServiceImg3 from "../../assets/images/construction21.jpg";
import ServiceImg4 from "../../assets/images/construction22.jpg";

import ConstructionImg1 from "../../assets/images/construction2.jpg";
import ConstructionImg2 from "../../assets/images/construction3.jpg";
import ConstructionImg3 from "../../assets/images/construction4.jpg";
import ConstructionImg4 from "../../assets/images/construction5.jpg";
import BlogImg1 from "../../assets/images/construction5.jpg";
import BlogImg2 from "../../assets/images/construction6.jpg";
import BlogImg3 from "../../assets/images/construction7.jpg";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import AvatarImg from "../../assets/images/author-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import About from "../common/About";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting dreams with <br />
                  precision and excellence.
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and precise <br /> attention to
                  detail with years of experience and a dedication to quality.
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary large">Contact Now</button>
                  <button className="btn btn-secondary ms-2 large">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <About />

        {/* Section 3 Our Servies */}
        <section className="section-3 py-5 bg-light">
          <div className="container-fluid">
            <div className="section-header text-center">
              <span>OUR SERVICES</span>
              <h2>Our Construction Services</h2>
              <p>
                We offer a diverse array of construction services, spanning from
                residential to commercial projects.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ServiceImg4}
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

        {/* Why Choose Us Section */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>WHY CHOOSE US</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Crafted in close partnership with our clients and collaborators,
                this approach merges industry expertise,
                <br /> decades of experience, innovation, and flexibility to
                consistently deliver successful projects across a wide range of
                sectors.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={icon1} alt="icon" />
                  </div>
                  <div className="card-body">
                    <h3>Cutting Edge Solutions</h3>
                    <p>
                      We offer cutting-edge construction solutions that are both
                      innovative and cost-effective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={icon2} alt="icon" />
                  </div>
                  <div className="card-body">
                    <h3>Superior Craftsmanship</h3>
                    <p>
                      We are committed to delivering high-quality construction
                      services to our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={icon3} alt="icon" />
                  </div>
                  <div className="card-body">
                    <h3>Quality Construction</h3>
                    <p>
                      We take pride in our work and strive to exceed our
                      clients' expectations with every project we undertake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 Our Projects */}
        <section className="section-3 bg-light">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>OUR PROJECTS</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning from
                residential to commercial projects.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-5 py-3">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>TESTIMONIALS</span>
              <h2>What people are saying about us.</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commerical, and industrial projects.
              </p>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3">
                      <p>
                        Urbanedge Construction is a leading construction company
                        that has been providing high-quality construction
                        services to clients across the globe.
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src={AvatarImg}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="ps-3">
                        <div className="name">Hashim</div>
                        <div>Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3">
                      <p>
                        Urbanedge Construction is a leading construction company
                        that has been providing high-quality construction
                        services to clients across the globe.
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src={AvatarImg}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="ps-3">
                        <div className="name">Hashim</div>
                        <div>Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3">
                      <p>
                        Urbanedge Construction is a leading construction company
                        that has been providing high-quality construction
                        services to clients across the globe.
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src={AvatarImg}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="ps-3">
                        <div className="name">Hashim</div>
                        <div>Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3">
                      <p>
                        Urbanedge Construction is a leading construction company
                        that has been providing high-quality construction
                        services to clients across the globe.
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src={AvatarImg}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="ps-3">
                        <div className="name">Hashim</div>
                        <div>Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Blog Section */}
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

export default Home;
