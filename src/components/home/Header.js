import React from "react";
import NavBar from "./NavBar.js";

function Header() {
  return (
    <React.Fragment>
      <NavBar />
      <section id="home" className="col-md-12">
        <div className="slider">
          <div className="slide1"></div>
          <div className="slide2"></div>
          <div className="slide3"></div>
          <div className="slide4"></div>
          <div className="slide5"></div>
        </div>

        <div className="overhome col-md-12">
          <div id="cName" className="col-md-7 ">
            <div className="call">
              <h1 style={call_style}>L'assiette Dujour</h1>
            </div>
            <div className="header-intro">
              <p>The Finest French Cuisine and more </p>
              <p> Best in the city. Friendly team. Stylish setting</p>
            </div>
            <div className="action">
              <a href="#menu" style={action_style}>
                {" "}
                Discover our menu{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

const action_style = {
  fontSize: 20,
  textDecoration: "none",
  color: "#d9b04f"
};

const call_style = {
  fontSize: 100,
  fontFamily: "'Lobster', cursive"
};

export default Header;
