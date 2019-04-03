import React from 'react'
import './jobseeker.scss'

import JobList from '../../containers/views/JobList'
import JobItemPage from './JobItemPage'
import { Context } from '../../App'
import NoJobs from '../../components/NoJobs'

const Jobseekers = () => {
  const { renderjob } = React.useContext(Context)
  return (
    <section className="job-container">
      <header>
        <h1>Find your dream Job</h1>
        <h4>
          browse.apply.
          <span>move</span>
        </h4>
      </header>
      {/* <!-- SEARCH container --> */}
      <section className="search">
        <form>
          <input type="text" placeholder="Enter job title" />
          <input type="text" placeholder="Enter region " />
          <input type="button" value="SEARCH" />
        </form>
      </section>
      <section className="jobs">
        <NoJobs />
      </section>
    </section>
  )
}

export default Jobseekers
