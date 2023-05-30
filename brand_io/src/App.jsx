import './App.css'
import { Navbar, Video } from './components'
import { Hero, AboutUs, Menu, Contact, ChefWord, Footer, PhotoGallery, Awards } from './container'

function App() {
  return (
      <div className='container'>
        <Navbar />
        <Hero />
        <AboutUs />
        <Menu />
        <ChefWord />
        <Video />
        <Awards />
        <PhotoGallery />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
