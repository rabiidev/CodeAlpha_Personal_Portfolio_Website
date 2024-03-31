import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
    <div className="hero-content">
      <h2>Creative Web Designer Bringing Designs to Life with Code</h2>
      <p>
        Passionate Frontend Developer | Specializing in React Development to Bring Designs to Life
      </p>
    </div>

    <div className="hero-img">
<div>
<div className="tech-icon">
  <img src="Assets/React-logo.png" alt="" />
</div>
<img className="portfolio-img" src="Assets/portfolio_img.png" alt="" />
</div>

<div>
  <div className="tech-icon">
    <img src="Assets/html-logo.png" style={{width: "70%"}} alt="" />
  </div>
  <div className="tech-icon">
    <img src="Assets/css-logo.png" style={{width: "48%"}} alt="" />
  </div>
  <div className="tech-icon">
    <img src="Assets/js-logo.png" alt="" />
  </div>
</div>
</div>
    </section>
  );
};

export default Hero