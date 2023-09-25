import React from 'react'
import './contact2.css'

const Contact2 = () => {
    return (
        <div className="contact">
            <section className="contact-head">
                <div className="contact-image-text">
                    <h1 className="heading-tittle" >
                        Contact Us
                    </h1>
                    <p>
                        Reach out to us to know more about customer experience solutions and innovative technologies we work with.
                    </p>
                </div>
            </section>

            <form className='form'>
            <div className="contact-form-container">
                <div className="left-section">
                    <input type="text" placeholder="Name" className="left-input" />
                    <input type="email" placeholder="Email" className="left-input" />
                </div>
                <div className="right-section">
                    <input type="text" placeholder="Phone" className="right-input" />
                    <textarea placeholder="Message" className="right-input"></textarea>
                </div>
                <div className="full-section">
                    <input type="submit" value="Submit" className="submit-button" />
                </div>
            </div>
            </form>

        </div>
    )
}

export default Contact2