import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import GridSection from './components/GridSection'
import CounterSection from './components/CounterSection'
import AboutSection from './components/AboutSection'
import CollectionSection from './components/CollectionSection'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

function App() {
  const { firstAnimation } = useSelector((store) => store.firstAnimation);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {
          firstAnimation ? (
            <HeroSection />
          ) : (
            <>
              <HeroSection />
              <Header />
              <GridSection />
              <CounterSection />
              <AboutSection />
              <CollectionSection />
              <Footer />
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
