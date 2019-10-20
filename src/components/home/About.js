import React from "react";
import about_us_svg from "../../images/svg/about_us_img.svg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={about_us_svg} />
          </div>
          <div className="col-lg-6">
            <div className="col-lg-12">
              <h2>About us</h2>
              <h5>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h5>
              <p>
                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                Deleniti quod porro sed quisquam saepe. Numquam mollitia
                recusandae non ad at et a.
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                Odit qui asperiores ea corporis deserunt veritatis quidem
                expedita perferendis. Qui rerum eligendi ex doloribus quia sit.
                Porro rerum eum eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
