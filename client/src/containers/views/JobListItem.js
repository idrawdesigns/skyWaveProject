import React, { useContext } from 'react'
import './JobsListItem.scss'
import { NavLink } from 'react-router-dom'

import { Context } from '../../App'

const JobListItem = ({ job }) => {
  const { renderjob, dispatch } = useContext(Context)
  const [state] = React.useState(renderjob)

  return (
    <div className="list-item-wrapper">
      <div className="summary-title">
        <h4> {job.title}</h4>
        <span className="line" />
        <p>
          {job.company} <br />
          <span>{job.location}</span>
        </p>
      </div>

      <NavLink
        to={{
          pathname: '/job',
          state: state
        }}
      >
        <button
          className="read-more"
          onClick={() => dispatch({ type: 'VIEW_JOB', payload: job })}
        >
          Read More{' '}
        </button>
      </NavLink>
    </div>
  )
}

export default JobListItem
