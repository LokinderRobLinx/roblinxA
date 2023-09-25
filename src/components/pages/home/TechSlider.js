import React, { useEffect, useState } from 'react'
import img1 from '../../assets/techImg/Codeignter.png'
import img2 from '../../assets/techImg/Laravel.png'
import img3 from '../../assets/techImg/PHP.png'
import img4 from '../../assets/techImg/Python.png'
import img5 from '../../assets/techImg/React.png'
import img6 from '../../assets/techImg/RobLinx Fevicon.png'
import img7 from '../../assets/techImg/Wordpress.png'

const TechSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [img1, img2, img3, img4, img5, img6, img7 ];

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
        <>
            <p className="h1 fw-bold header-color p-5" >
                Technologies
            </p>

            <div className="tech-slider">
                <button onClick={prevImage} className="prev-button">
                    &#10094;
                </button>
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="tech-image"
                />
                <button onClick={nextImage} className="next-button">
                    &#10095;
                </button>

                {/* <div className="image-text">
                    <h3>Navigating The Path For Digital Transformation!</h3>
                    <div className="my-4">
                        <NavLink to="/services" className="btnA">
                            Get In Touch
                        </NavLink>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default TechSlider