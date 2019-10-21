import React from "react";

function Footer() {
  return (
    <footer className="container-fluid bg-grey py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 ">
                <div className="logo-part">
                  {/* <img
                    src=""
                    className="w-50 logo-footer"
                  /> */}
                  <h3>L'assiette Dujour</h3>
                  <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                  <p>Come Dine with us</p>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <h6> About Company</h6>
                <p>But horizontal lines can only be a full pixel high.</p>
                <a href="#" className="btn-footer">
                  {" "}
                  More Info{" "}
                </a>
                <br />
                <a href="#" className="btn-footer">
                  {" "}
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 px-4">
                <h6> Help us</h6>
                <div className="row ">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        {" "}
                        <a href="#"> Home</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> About</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Menu</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Gallery</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> The Place</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Contact</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 px-4"></div>
                </div>
              </div>
              <div className="col-md-6 ">
                <h6> Newsletter</h6>
                <div className="social">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <form className="form-footer my-3">
                  <input
                    type="text"
                    placeholder="search here...."
                    name="search"
                  />
                  <input type="button" value="Go" />
                </form>
                <p>The Finest French Cuisine and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
