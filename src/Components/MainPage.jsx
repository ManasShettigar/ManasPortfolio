import React from 'react'
import InfoSection from './InfoSection'
import AboutSection from './AboutSection'
import '../App.css'
import Footer from './Footer'
export const MainPage = () => {
  return (
<>
<div className="mainPage" >
    <InfoSection/>
    <AboutSection/>
    <Footer/>
</div>
</>  )
}
