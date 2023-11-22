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
              <li>Ankur Dmaor</li>
              <li>Dhuvin Patel</li>
              <li>Monil Rathod</li>
              <li>Hardik Makwana</li>
              <li>Prince Patil</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><a href="https://www.guptalab.org/">Gupta LAB</a></li>
              <li><a href="https://www.youtube.com/c/ManishGuptamankg">YouTube</a></li>
              <li><a href="https://github.com/guptalab">GitHub</a></li>
              <li><a href="https://www.linkedin.com/company/guptalab/">Linkedin</a></li>
            </ul>
          </div>
         
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
            <li>
                <i className='fas fa-map-marker'></i>
                <a href='https://www.google.com/maps/place/Gupta+Lab/@23.1893849,72.628436,15z/data=!4m6!3m5!1s0x395c2a3c98817075:0x504d15432808513a!8m2!3d23.1893849!4d72.628436!16s%2Fg%2F11j8gy40w4?entry=ttu' target='_blank' rel='noopener noreferrer'>
                  4, Faculty Block 2, Room 2212, Post Bag, Daiict college Near, Indroda Cir, Gandhinagar, Gujarat 382007
                
                </a>
              </li>
              <li>
              <i className='fas fa-paper-plane'></i>
                <a href="mailto:quantum_computing@guptalab.org">quantum_computing@guptalab.org</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Footer
