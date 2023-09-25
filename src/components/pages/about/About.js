import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {

    return (
        <>
            <section className="contact-head">
                <div className="contact-image-text">
                    <h1 className="heading-tittle" >
                        About Us
                    </h1>
                    <p>
                        Reach out to us to know more about customer experience solutions and innovative technologies we work with.
                    </p>
                </div>
            </section>

            <section id="header" className='my-5'>
                <div className="col-md-11  ">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-md-6  ">
                            <h1>
                                Grow Your Business With
                                <strong className="brand-name"> RobLinx</strong>
                            </h1>
                            <h2 className="my-3">
                                We are web developer
                            </h2>
                            <div className="my-3">
                                <NavLink to="/contact" className="btnA">
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-md-5 ">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                                // src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
                                background="transparent"
                                speed="1"
                                // style="width: 300px; height: 300px;"
                                loop
                                autoplay>

                            </lottie-player>
                        </div>
                        {/* <div className="profile-picture">
                          <div className="profile-picture-background"></div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default About