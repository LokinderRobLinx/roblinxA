import React from 'react'
// import logo1 from '../assets/f-logo.png'

const Footer = () => {
    return (
        <div className='footer'>

            {/* <div className='conatiner text-center top'> */}
          {/* <div className='img'>
            <img src={logo1} alt='' />
          </div> */}

           Copyright &copy; {new Date().getFullYear()} |
            
            {""} All Rights Reserved | Powered By {""}
            <a
                href="#" target="_blank" rel="noopener noreferrer"
                style={{ cursor: "pointer" }} title="Visit The Site"
            >
                RobLinx Infotech LLP.
            </a>
        </div>
    )
}

export default Footer