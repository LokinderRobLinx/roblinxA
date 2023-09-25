import React from 'react'
import './imageSlider.css';
import img1 from '../../assets/robimg1.jpg'
import img2 from '../../assets/robimg2.jpg'
import img3 from '../../assets/robHomeImg.webp'
import { NavLink } from 'react-router-dom';

const ImageSlider2 = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 slider-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Navigating The Path For Digital Transformation!</h3>
        <div className="my-4">
          <NavLink to="/services" className="btnA">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 slider-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Navigating The Path For Digital Transformation!</h5>
        <div className="my-4">
          <NavLink to="/services" className="btnA">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 slider-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default ImageSlider2