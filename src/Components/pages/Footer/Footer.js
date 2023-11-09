import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    
      
    
      <footer>
        <div className='container padding'>
          <div className='box logo2'>
            <h1>Resources Quantum Computing</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
          </div>
          <div className='box link'>
            <h3>Team</h3>
            <ul>
              <li>Ankur Dmaor(202101213)</li>
              <li>Dhuvin Patel(202101496)</li>
              <li>Monil Rathod(202101409)</li>
              <li>Hardik Makwana(202101246)</li>
              <li>Prince Patil(202101431)</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Gupta LAB</li>
              <li>Research Papper</li>
              <li>Compaies</li>
              <li>Simulators</li>
            </ul>
          </div>
         
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i className='fa fa-map-marker'></i>

                Daiict college, Reliance Cross Rd, Gandhinagar, Gujarat 382007
              </li>
              {/* <li>
              <i className='fa fa-phone'></i>

                +91 0000000000
              </li> */}
              <li>
                <i className='fa fa-paper-plane'></i>
                info@domain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Footer
