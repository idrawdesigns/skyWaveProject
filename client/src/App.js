import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import JobReducer from './pages/JobSeekers/reducer'

//componets
import Home from './pages/Home'
import Employer from './pages/Employer'
import JobSeekers from './pages/JobSeekers/Jobseekers'
import Contacts from './pages/Contacts'
import AdminPage from './pages/AdminPage/Admin'
import JobItemPage from './pages/JobSeekers/JobItemPage'

export const Context = React.createContext()

const App = () => {
  const [renderjob, dispatch] = React.useReducer(JobReducer, {})
  return (
    <Context.Provider value={{ renderjob, dispatch }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/employer" component={Employer} />
          <Route path="/jobseekers" component={JobSeekers} />
          <Route path="/contacts" component={Contacts} />
          {/* <Route path="/admin" component={AdminPage} /> */}
          <Route path="/job" render={() => <JobItemPage job={renderjob} />} />
        </Switch>
      </div>
    </Context.Provider>
  )
}

export default App

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/employer" component={Employer} />
//           <Route path="/jobseekers" component={JobSeekers} />
//           <Route path="/contacts" component={Contacts} />
//           <Route path="/admin" component={AdminPage} />
//           <Route path="/job" component={JobItemPage} />
//         </Switch>
//       </div>
//     )
//   }
// }

// export default App
