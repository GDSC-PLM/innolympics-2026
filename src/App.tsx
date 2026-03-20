import './App.css'
import Navbar from './components/Navbar'

import Home from './sections/Home'
import Schedule from './sections/Schedule'
import Guests from './sections/Guests'
import Partners from './sections/Partners'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Schedule />
        <Guests />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
