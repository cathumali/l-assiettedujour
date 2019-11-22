import React from "react";
import fb_svg from "../../images/fb.svg";
import tw_svg from "../../images/twitter.svg";
import insta_svg from "../../images/insta.svg";

function NavBar() {
  return (
    <header className="muli">
      <ul>
        <li>
          <a className="homenav" href="#home">
            <div className="circle"></div>
            <span className="htooltip"> HOME </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#about">
            <div className="circle"> </div>
            <span className="htooltip"> ABOUT US </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#menu">
            <div className="circle"> </div>
            <span className="htooltip"> MENU </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#gallery">
            <div className="circle"> </div>
            <span className="htooltip"> GALLERY </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#place">
            <div className="circle"> </div>
            <span className="htooltip"> OUR PLACE </span>
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#location">
            <div className="circle"> </div>
            <span className="htooltip"> LOCATION </span>{" "}
          </a>
        </li>
        <li>
          {" "}
          <a className="homenav" href="#contactus">
            <div className="circle"> </div>
            <span className="htooltip"> CONTACT US </span>
          </a>
        </li>{" "}
        <br />
        <li>
          <a className="homenav" href="https://www.facebook.com/">
            <img alt="" src={fb_svg} />
            <span className="htooltip"> FACEBOOK </span>
          </a>
        </li>
        <li>
          <a className="homenav" href="https://www.twitter.com/">
            <img alt="" src={tw_svg} />
            <span className="htooltip"> TWITTER </span>
          </a>
        </li>
        <li>
          <a className="homenav" href="https://www.instagram.com/instagram/">
            <img alt="" src={insta_svg} />
            <span className="htooltip"> INSTAGRAM </span>{" "}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
