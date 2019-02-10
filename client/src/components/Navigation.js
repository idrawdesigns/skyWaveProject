import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.scss'

const navigation = () => {
  return (
    <div className="wrapper ">
      <nav className="nav">
        <div className="logo">
          <img src={require('../Assets/images/logo_use.png')} alt="Logo" />
        </div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employer"
              activeClassName="active"
              className="nav-link"
            >
              Employers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobseekers"
              activeClassName="active"
              className="nav-link"
            >
              JobSeekers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              activeClassName="active"
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>

          <span>
            <NavLink to="/admin" activeClassName="active" className="nav-link">
              <li>Admin Login</li>
            </NavLink>
          </span>
        </ul>
      </nav>
    </div>
  )
}

export default navigation
