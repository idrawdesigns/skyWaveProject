import React, { Component } from 'react'
import './Admin.scss'
import AdminHeader from './AdminHeader'
import AdminList from './JobsList'

class Admin extends Component {
  render() {
    return (
      <section className="admin">
        <AdminHeader />
        <AdminList />
      </section>
    )
  }
}

export default Admin
