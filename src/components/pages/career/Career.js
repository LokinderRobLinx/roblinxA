import React from 'react'
import "./career.css"

const Career = () => {

  const jobListings = [
    { title: 'Front-end Developer', location: 'Remote' },
    { title: 'Back-end Developer', location: 'ADI' },
    { title: 'UI/UX Designer', location: 'GNC' },
  ];

  return (
    <>
     <section className="contact-head">
        <div className="contact-image-text">
          <h1 className="heading-tittle" >
            Career
          </h1>
          <p>
            Reach out to us to know more about customer experience solutions and innovative technologies we work with.
          </p>
        </div>
      </section>
      <section id="header" className='my-5'>
        <div className="col-md-11  ">
          <div className="row justify-content-center align-items-center">
          <h1>Join Our Team</h1>
      <p>Explore exciting career opportunities at our IT company.</p>

            <div className="col-md-6  ">
              <h2>Open Positions</h2>
              <ul>
                {jobListings.map((job, index) => (
                  <li key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.location}</p>
                    <button>Apply</button>
                  </li>
                ))}
              </ul>
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

          </div>
        </div>
      </section>
    </>
  )
}

export default Career