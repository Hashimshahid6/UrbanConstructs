import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3">
            <h4 className="mb-3">
              <span>Urbanedge</span> Construction
            </h4>
            <p>
              Our post-construction services gives you peace of mind knowing
              that we are still here for you even after.
            </p>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Speciality Construction</a>
              </li>
              <li>
                <a href="">Civil Construction </a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Buildings Construction</a>
              </li>
              <li>
                <a href="">Industrial Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>123, Main Road, New City</li>
              <li>+123 456 7890</li>
              <li>
                <a href="mailto:info@unbanedge.com">info@unbanedge.com</a>
              </li>
            </ul>
          </div>
          <hr />
          <p className="text-center">
            © 2024 Urbanedge Construction. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;