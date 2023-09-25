import React from 'react'

const Services = () => {
  return (
    <>
       <section className="contact-head">
        <div className="contact-image-text">
          <h1 className="heading-tittle" >
            Services
          </h1>
          <p>
            Reach out to us to know more about customer experience solutions and innovative technologies we work with.
          </p>
        </div>
      </section>
      {/* <section className="container ">
        <div className="col">
          <p className="h1 fw-bold text-primary" >
          Services By RobLinx
          </p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem voluptas officia officiis vero quibusdam ab maiores,
            quasi tenetur corporis sapiente veniam, ipsa expedita alias
            amet unde eum quas laboriosam voluptate provident.
          </p>
        </div>
      </section> */}

      <section className="my-5 row col-md-12 justify-content-around align-items-center ">
        <div className="col-md-5 m-2 ">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_twijbubv.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></lottie-player>
        </div>

      </section>

    </>
  )
}

export default Services