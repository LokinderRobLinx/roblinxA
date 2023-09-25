import React from "react";
import { NavLink } from "react-router-dom";
// import Typical from 'react-typical'
import './home.css'
// import '../stylesheets/App.css'
// import styles from '../stylesheets/App.css';
import imgM from '../../assets/mission.png'
import imgV from '../../assets/vision.png'
import imgF from '../../assets/filosophy.png'
// import img1 from '../../assets/robimg1.jpg'
// import img2 from '../../assets/robimg2.jpg'
// import img3 from '../../assets/robHomeImg.webp'
import ImageSlider from "./ImageSlider";
import TechSlider from "./TechSlider";
import TechSlider2 from "./TechSlider2";

const Home = () => {
    // const images = [
    //     img1, img2, img3
    //   ];
      
    return (
        <>
            <section>
                {/* <div className="col-md-11  "> */}

                {/* <div className="header">
                    <div className="container">
                        <h3>Navigating The Path For Digital Transformation!</h3>
                        <div className="my-4">
                            <NavLink to="/services" className="btnA">
                                Get In Touch
                            </NavLink>
                        </div>
                    </div>
                </div> */}
                <ImageSlider />


                <section className="container p-5">
                    <p className="">
                        RobLinx is an esteemed tech company based at Ahmedabad, Gujarat, known for its excellence in web development,
                        cloud-based software development and commitment to client success. With a customer-centric approach and a team
                        of skilled tech professionals in PHP, CodeIgniter, Laravel, React Native, WordPress & Python, the company is poised
                        to lead the way in the IT industry.
                    </p>
                </section>

                <section className='features top' id='features'>
                    <div className="container ">
                        <div className="row d-flex justify-content-center">
                            <div className="col m-2">
                                <div className='box btn_shadow'>
                                    <img width="80" height="80" src={imgM} alt='' />
                                    <h2>Mission</h2>
                                    <p>At RobLinx, we aim to empower businesses with technological solutions that drive growth and efficiency.</p>
                                    {/* <a href='/'>
                                                <i className='fas fa-arrow-right'></i>
                                            </a> */}
                                </div>
                            </div>
                            <div className="col m-2">
                                <div className='box btn_shadow'>
                                    <img width="80" height="80" src={imgV} alt='' />
                                    <h2>Vision</h2>
                                    <p>Every line of code we write and every system we design at RobLinx is part of a larger vision that is more interconnected, productive, and sustainable.</p>
                                    {/* <a href='/'>
                                                <i className='fas fa-arrow-right'></i>
                                            </a> */}
                                </div>
                            </div>
                            <div className="col-md-10 m-5">
                                <div className='box2 btn_shadow'>
                                    <img width="80" height="80" src={imgF} alt='' />
                                    <h2>Philosophy</h2>
                                    <p>Our company places a significant emphasis on guiding clients through the entire process,
                                        from the initial concept to the cloud. Our specialization lies in transforming raw ideas
                                        and concepts into valuable and profitable applications. Our ultimate objective is to enable
                                        startups, businesses, and multinational corporations to unlock their full potential by providing
                                        tailored solutions for their complex business challenges. We provide a distinctive combination of
                                        benefits to our clients. Our presence in the United States assures clients of our deep understanding
                                        of Western work culture, while our presence in India ensures them of cost-effective advantages when
                                        partnering with us.</p>
                                    {/* <a href='/'>
                                                <i className='fas fa-arrow-right'></i>
                                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <TechSlider/> */}

                <TechSlider2/>

                <section className="container p-4 ">
                    <p className="h1 fw-bold header-color p-5" >
                        Key Services
                    </p>

                    <div className=" pt-5">
                        <div className="row container pb-2 col-md-12">
                        <div className="d-flex align-items-center">
                            <figure className="img-box col-md-4A">
                                <a href="#">
                                    <img
                                        decoding="async"
                                        width="240"
                                        height="240"
                                        src="https://inextrix.com/wp-content/uploads/2022/05/Image-11.png"
                                        className="elementor-animation-rotate attachment-full size-full entered lazyloaded"
                                        alt=""
                                    />
                                </a>
                            </figure>
                            <div className="text-start col-md-8">
                                <h2>Web Developmnet</h2>
                                <p>
                                    RobLinx excels in creating dynamic and responsive websites that engage users and enhance brand identity.
                                    We offer comprehensive web development services which can encompass a wide range of activities, including
                                    front-end development (user interface design), back-end development (server-side programming), and database
                                    management. Our ongoing maintenance ensures that websites remain up-to-date and optimized for performance.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="row container pb-2 col-md-12">
                            <div className="d-flex align-items-center">
                                <div className="text-start col-md-8">
                                    <h2>Mobile Developmnet</h2>
                                    <p>
                                        Mobile app development involves creating software applications specifically designed to run on mobile devices
                                        such as smartphones and tablets. A mobile app development service specializes in crafting apps for various platforms,
                                        including iOS (Apple), Android, and sometimes cross-platform solutions. Mobile apps can serve a wide range of purposes,
                                        from enhancing user productivity to providing entertainment or facilitating services.
                                    </p>
                                </div>
                                <figure className="img-box col-md-4A">
                                    <a href="#">
                                        <img
                                            decoding="async"
                                            width="240"
                                            height="240"
                                            src="https://gtcsys.com/wp-content/uploads/2023/01/UI-UX-designing.webp"
                                            className="elementor-animation-rotate attachment-full size-full entered lazyloaded"
                                            alt=""
                                        />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="row container pb-2 col-md-12">
                            <div className="d-flex align-items-center">
                                <figure className="img-box col-md-4A">
                                    <a href="#">
                                        <img
                                            decoding="async"
                                            width="240"
                                            height="240"
                                            src="https://inextrix.com/wp-content/uploads/2022/05/Group-160-2.png"
                                            className="elementor-animation-rotate attachment-full size-full entered lazyloaded"
                                            alt=""
                                        />
                                    </a>
                                </figure>
                                <div className="text-start col-md-8">
                                    <h2>Cloud-Based Software Systems:</h2>
                                    <p>
                                        Leveraging the power of cloud technology, team RobLinx can develop customized software solutions
                                        that are scalable, secure, and accessible from anywhere. Whether it's a customer relationship
                                        management (CRM) system, enterprise resource planning (ERP) software, or any other cloud-based application,
                                        we have the expertise to deliver top-notch solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row container pb-2 col-md-12">
                            <div className="d-flex align-items-center">
                                <div className="text-start col-md-8">
                                    <h2>E-Commerce</h2>
                                    <p>
                                        An ecommerce platform service provides the technology and tools necessary to create, manage, and scale
                                        online stores. These platforms are the backbone for businesses. Ecommerce services offer features such
                                        as product catalogue management, shopping cart functionality and secure payment processing. Team RobLinx
                                        having expertise in customizing website templates and integration with various online available marketplaces.
                                    </p>
                                </div>
                                <figure className="img-box col-md-4A">
                                    <a href="#">
                                        <img
                                            decoding="async"
                                            width="240"
                                            height="240"
                                            src="https://inextrix.com/wp-content/uploads/2022/05/Image-9.png"
                                            className="elementor-animation-rotate attachment-full size-full entered lazyloaded"
                                            alt=""
                                        />
                                    </a>
                                </figure>
                            </div>
                        </div>

                    </div>
                </section>

                {/* </div> */}
            </section>
        </>
    );
};

export default Home;