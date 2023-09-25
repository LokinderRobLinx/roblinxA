import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what i whant to say : ${data.msg} `
    );

    navigate("/");
  };

  return (
    <>
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

      <section className="my-5 row col-md-12 ">

        <h1 style={{ fontSize: 30 }}>How can we help you?</h1>

        {/* <form className="form col-md-10 m-2 " onSubmit={formSubmit}>

          <div className="row g-5">
            <div className="col-auto">
              <label htmlFor="name" className="px-3 h5">
                Name*:
              </label>
              <input
                type="text"
                id="name"
                name="fullname"
                value={data.fullname}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="col-auto">
              <label className="px-3 h5">Phone:</label>
              <input
                type="number"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Your mobile number"
              />
            </div>
          </div>

          <div className="row g-5 mb-4">
          <div className="col-auto">
            <label className="px-3 h5">Email*:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="col-auto">
            <label className="px-1 h5">Website:</label>
            <input
              type="text"
              name="msg"
              value={data.msg}
              onChange={handleChange}
              placeholder="Website"
              required
            />
          </div>
          </div>

          <div className="row g-5 mb-4">
          <div className="col-auto">
            <label className="px-1 h5">Message*</label>
            <textarea
              rows="3"
              name="msg"
              value={data.msg}
              onChange={handleChange}
              placeholder="Enter Your Message Here"
              required
            />
          </div>
          </div>

          <button className="btnA my-4" type="submit">
            Submit form
          </button>
        </form> */}
        <div className="row d-flex justify-content-center">
        <form className="form col-md-10 m-2">

          <div className="row g-5 mb-4">
            <div className="col-auto">
              <label for="inputName" className="visually-hidden">Name</label>
              <input type="text" className="form-control" id="inputName" placeholder="Name *" required />
            </div>
            <div className="col-auto">
              <label for="inputPassword2" className="visually-hidden">Phone</label>
              <input type="text" className="form-control" id="inputPassword2" placeholder="Phone" />
            </div>
          </div>

          <div className="row g-5 mb-4">
            <div className="col-auto">
              <label for="inputEmail" className="visually-hidden">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email *" required />
            </div>
            <div className="col-auto">
              <label className="visually-hidden">Website</label>
              <input type="text" className="form-control" id="inputPassword2" placeholder="Website" />
            </div>
          </div>

          <div className=" g-5 mb-4">
            <div className="col-auto">
              <label className="visually-hidden">Subject</label>
              <input type="text" className="form-control" id="inputSubject" placeholder="Subject *" required />
            </div>
          </div>

          <div className=" g-5 mb-4">
            <div className="col-auto">
              <label className="visually-hidden">Message</label>
              <input type="text" className="form-control" id="inputSubject" placeholder="Your Message *" required />
            </div>
          </div>

          <label>
            <input type="checkbox" name="checkbox" value="Notify me with latest news & updates" />
              Notify me with latest news & updates
          </label>

          <div className="form-check">
            <input className="form-check-input" type="checkbox"/>
            <label className="form-check-label" for="invalidCheck">
              Notify me with latest news & updates
            </label>

          </div>

          <div className="col-auto">
            <button className="btnA my-4" type="submit">
              Submit form
            </button>
          </div>
        </form>
        </div>

      </section>

    </>
  );
};

export default Contact;
