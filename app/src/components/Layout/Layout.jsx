import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GlobalHead from '../GlobalHead/GlobalHead'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalHead />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout