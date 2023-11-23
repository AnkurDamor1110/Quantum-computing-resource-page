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
              <li><a href="https://www.linkedin.com/in/ankurdamor/">Ankur Damor</a></li>
              <li><a href="https://www.linkedin.com/in/dhruvin-patel-799a182a0/">Dhruvin Patel</a></li>
              <li><a href="#">Monil Rathod</a></li>
              <li><a href="#">Hardik Makwana</a></li>
              <li><a href="#">Prince Patil</a></li>
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
            <h3>Disclaimer</h3>
            <ul>
            <li>
              <i>&#x26A1;</i>   {/*icon has to be added*/}
                <p className="Disclaimer">This is an ongoing project, and the website currently lacks complete data. If you have any suggestions for adding data, please email us at the address below.</p>
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
