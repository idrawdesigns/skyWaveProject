import React from 'react'
import { Message } from 'semantic-ui-react'

const NoJobs = () => {
  return (
    <Message negative>
      <br />
      <br />
      <h3>Oops! There are no Job vacancies currently available.</h3>
      <br />
      <h6>Kindly check back later.</h6>
      <br />
      <br />
    </Message>
  )
}

export default NoJobs
