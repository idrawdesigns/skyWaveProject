import React, { useContext } from 'react'
import JobListItem from './JobListItem'

import JobsContext from '../../pages/JobSeekers/context'

const JobList = () => {
  const { jobs } = useContext(JobsContext)

  return (
    <div>
      {jobs !== undefined ? (
        jobs.map(job => <JobListItem key={job.id} job={job} />)
      ) : (
        <div> Currently no jobs Available</div>
      )}
    </div>
  )
}

export default JobList
