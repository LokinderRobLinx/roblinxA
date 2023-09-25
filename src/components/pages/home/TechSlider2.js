import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/techImg/Codeignter.png'
import img2 from '../../assets/techImg/Laravel.png'
import img3 from '../../assets/techImg/PHP.png'
import img4 from '../../assets/techImg/Python.png'
import img5 from '../../assets/techImg/React.png'
import img6 from '../../assets/techImg/RobLinx Fevicon.png'
import img7 from '../../assets/techImg/Wordpress.png'

const TechSlider2 = () => {
    const technologies = [
        { name: 'Codeignter', icon: img1 },
        { name: 'Laravel', icon: img2 },
        { name: 'PHP', icon: img3 },
        { name: 'Python', icon: img4 },
        { name: 'React', icon: img5 },
        // { name: 'RobLinx Fevicon', icon: img6 },
        { name: 'Wordpress', icon: img7 },
        { name: 'Angular', icon: img2 },
        { name: 'JavaScript', icon: img5 },
        { name: 'Vue.js', icon: img3 },
        { name: 'Node.js', icon: img4 },
    ];

    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        variableWidth: true,
    };

    return (
        <section className='techSlider'>
            <p className="h1 fw-bold header-color p-5" >
                Technologies
            </p>

            <div className="technology-slider">
                <Slider {...sliderSettings}>
                    {technologies.map((tech, index) => (
                        <div key={index} className="technology-slide">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="technology-icon"
                            />
                            {/* <p className="technology-name">{tech.name}</p> */}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TechSlider2;