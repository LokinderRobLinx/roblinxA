import React, { useEffect, useState } from 'react';
import './imageSlider.css';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/robimg1.jpg'
import img2 from '../../assets/robimg2.jpg'
import img3 from '../../assets/robHomeImg.webp'

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    img1, img2, img3
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide the images
  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="image-slider">
      <button onClick={prevImage} className="prev-button">
        &#10094;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <button onClick={nextImage} className="next-button">
        &#10095;
      </button>

      <div className="image-text">
        <h3>Navigating The Path For Digital Transformation!</h3>
        <div className="my-4">
          <NavLink to="/services" className="btnA">
            Get In Touch
          </NavLink>
        </div>
      </div>

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

    </div>
  );
}

export default ImageSlider;