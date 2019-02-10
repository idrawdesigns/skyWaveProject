import React from 'react'

import jobsReducer from '../../pages/JobSeekers/reducer'

//components
import JobList from './JobList'
import JobItemPage from '../../pages/JobSeekers/JobItemPage'

export const Context = React.createContext()

const MainApp = () => {
  const [state, dispatch] = React.useReducer(jobsReducer, [])
  return (
    <Context.Provider value={dispatch}>
      <div>
        <JobList state={10} />
        <JobItemPage state={state} />
      </div>
    </Context.Provider>
  )
}

export default MainApp
