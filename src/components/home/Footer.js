import React from "react";

function Footer() {
  return (
    <section className="footer-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h3>L'assiette Dujour</h3>
            <div className="footer-logo">
              <img
                src={require("../../images/Gallery/gallery1.jpg")}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>ABOUT</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...{" "}
              <a href="about-us.html">Read More</a>
            </p>
          </div>
          <div className="col-md-3 col-sm-6" style={{ textAlign: "center" }}>
            <h3>Quick LInks</h3>
            <ul className="footer-category">
              <li>
                <a href="#.">Home</a>
              </li>
              <li>
                <a href="#.">About Us</a>
              </li>
              <li>
                <a href="#.">Services</a>
              </li>
              <li>
                <a href="#.">Categories</a>
              </li>
              <li>
                <a href="#.">Blog</a>
              </li>
              <li>
                <a href="#.">Contact Us</a>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>MAIN CATEGORIES</h3>
            <div className="address">
              Lorem # 38, Ispum Hill, Lorem, WA 12345{" "}
            </div>
            <div className="info">
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              <a href="#.">(777) 123 4567</a>
            </div>
            <div className="info">
              <i className="fa fa-fax" aria-hidden="true"></i>{" "}
              <a href="#.">(123) 456 7890</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
