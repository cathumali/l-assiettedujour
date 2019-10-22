import React from "react";

function Gallery() {
  // console.log(Object.values(gallery_images));
  return (
    <React.Fragment>
      <section id="gallery">
        <div className="container ">
          <div className="row">
            {gallery_images.map((image, ie) => (
              <div className="col-12 col-sm-4 shine_me" key={ie}>
                <img src={image} className="img-responsive galimage" />
                <i className="shine_effect"></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="place">
        {/* <div id="bottomdiv" className="img-responsive"></div> */}
      </section>

      <section id="location" className="col-md-12 col-xs-12 img-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3585337076966!2d121.03539451441718!3d14.635577980143276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7adb658a13f%3A0x9ba9df4f6f78782a!2s49+Sct.+Torillo+St%2C+Diliman%2C+Quezon+City%2C+1103+Metro+Manila!5e0!3m2!1sen!2sph!4v1458678317469"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
    </React.Fragment>
  );
}

// function myMap() {
//   var mapCanvas = document.getElementById("location");
//   var mapOptions = {
//     center: new google.maps.LatLng(51.5, -0.2),
//     zoom: 10
//   };
//   var location = new google.maps.Map(mapCanvas, mapOptions);
// }
const gallery_images = [
  require("../../images/Gallery/gallery1.jpg"),
  require("../../images/Gallery/gallery12.jpg"),
  require("../../images/Gallery/gallery7.jpg"),
  require("../../images/Gallery/gallery4.jpeg"),
  require("../../images/Gallery/gallery6.jpg"),
  require("../../images/Gallery/gallery11.jpg")
];

export default Gallery;
