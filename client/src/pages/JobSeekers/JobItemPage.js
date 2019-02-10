import React from 'react'
import './JobItem.scss'

const JobItem = ({ job }) => {
  return (
    <div className="job-wrapper">
      <div className="header-job">
        <div className="job-title">
          <h2>{job.title}</h2>
        </div>
        <br />
        <div className="location-type">
          <div className="btn-role">
            <span>
              <i className="fas fa-building" />
            </span>{' '}
            {job.company}
          </div>
          <div className="btn-role">
            <span>
              <i className="fas fa-suitcase" />
            </span>{' '}
            {job.jobtype}
          </div>
          <div className="btn-role">
            <span>
              <i className="fas fa-map-marker-alt" />
            </span>{' '}
            {job.location}
          </div>
        </div>
      </div>

      <br />

      <div className="main-content">
        <div className="description">
          <h3> Job Description</h3>
          <p>{job.description}</p>
          <br />
          <h3>How to Apply</h3>
          <p>
            Do Send your application to / follow the url Link: {job.application}
          </p>
        </div>

        <div className="aside">
          <div className="icon">
            <i className="fas fa-suitcase" />
          </div>
          <div className="main-text">
            <div>
              <h3>Microsoft</h3>
              APPLY BY <span className="date">{job.expires}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
