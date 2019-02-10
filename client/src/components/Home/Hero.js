import React from 'react'
import './hero.scss'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div class="wrapper">
      <section class="top-container">
        <div class="header-image" id="woman" />

        <div class="req-staff">
          <ul>
            <li>
              <NavLink to="/employer" className="btn">
                REQUEST STAFF
              </NavLink>
            </li>
          </ul>
        </div>

        <div class="header-image" id="man" />

        <div class="job-seekers">
          <ul>
            <li>
              <NavLink to="/jobseekers" className="btn">
                JOB SEEKERS
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      {/* End of Header Section */}

      {/* <!-- Aboout Section --> */}
      <section class="about">
        <div class="about-text">
          <h3>ABOUT</h3>
          <br />
          <p>
            Skyways Global Services Ltd is a human resource consultancy firm
            based in Nairobi, Kenya with plans of opening branches in other East
            African countries and beyond. We strive to bring efficacy,
            efficiency and commitment to our work as a firm keen to serve their
            clientele with utmost dedication and efficiency while endeavoring to
            provide high quality customer service, through the application of
            the principles of partnership with our clients.
          </p>
        </div>
        <div class="about-image">
          <img
            src={require('../../Assets/images/lady_smiling.jpg')}
            alt="Lady Smiling"
          />
        </div>
      </section>

      {/* <!--End of Header Section--> */}

      <section class="banner-wrapper">
        <div class="learn-more">
          <ul>
            <li>
              <NavLink to="/employer" className="btn">
                LEARN MORE
              </NavLink>
            </li>
          </ul>
        </div>

        <div class="connecting-people">
          <h3>
            Connecting top
            <span>Talent</span> with top
            <span>Employers</span>
          </h3>
        </div>
      </section>
    </div>
  )
}

export default Hero
