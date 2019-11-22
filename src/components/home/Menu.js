import React from "react";

function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 offset-sm-2">
            <img
              alt=""
              className="center-block frenchdish img-responsive"
              src={menu_images.frenchdish}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-6">
            <img
              alt=""
              className="center-block others img-responsive"
              src={menu_images.others}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-2">
            <img
              alt=""
              className="center-block others img-responsive"
              src={menu_images.specialsushi}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-6">
            <img
              alt=""
              className="center-block others img-responsive"
              src={menu_images.salad}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-2">
            <img
              alt=""
              className="center-block dessert img-responsive"
              src={menu_images.dessert}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-6">
            <img
              alt=""
              className="center-block cake img-responsive"
              src={menu_images.cake}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const menu_images = {
  frenchdish: require("../../images/edited.png"),
  others: require("../../images/others.png"),
  specialsushi: require("../../images/specialsushi.png"),
  salad: require("../../images/salad.png"),
  dessert: require("../../images/dessert.png"),
  cake: require("../../images/cake.png")
};
export default Menu;
