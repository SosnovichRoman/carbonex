import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GlobalHead from '../GlobalHead/GlobalHead'
import Script from 'next/script'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalHead />
      <Script src="//code.jivo.ru/widget/FG8rdF9oI7" async>

      </Script>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout