import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="container-fluid bg-grey py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 ">
                <div className="logo-part">
                  <img
                    src={require('../Assets/images/sky_logo-negative.png')}
                    alt="logo"
                  />

                  <p>
                    Ruprani House, 2nd Floor <br />
                    Suite No.207, Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <h6> About Company</h6>
                <p>But horizontal lines can only be a full pixel high.</p>
                <a href="#" className="btn-footer">
                  {' '}
                  More Info{' '}
                </a>
                <br />
                <a href="#" className="btn-footer">
                  {' '}
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 px-4">
                <h6> Help us</h6>
                <div className="row ">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        {' '}
                        <a href="#"> Home</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> About</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Service</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Team</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Help</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Contact</a>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <h6> Newsletter</h6>
                <div className="social">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
                <form className="form-footer my-3">
                  <input
                    type="text"
                    placeholder="search here...."
                    name="search"
                  />
                  <input type="button" value="Go" />
                </form>
                <p>That's technology limitation of LCD monitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
