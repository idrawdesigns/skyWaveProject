import React, { useContext, useReducer } from 'react'
import JobsContext from './store/context'
import jobsReducer from './store/reducer'

//components
import JobList from './views/JobList'

const mainComponent = () => {
  const initialState = useContext(JobsContext)
  const [state, dispatch] = useReducer(jobsReducer, initialState)

  console.log({ state })
  console.log({ dispatch })

  return (
    <div>
      <JobList data={initialState} />
    </div>
  )
}

export default mainComponent
