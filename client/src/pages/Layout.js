import React from 'react'
import './Layout.scss'

//components
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = props => {
  return (
    <div className="master">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
