import Nav from './Components/Nav'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

const App = () => {


  return (
    <>
     <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
      <Services />
       <Projects />
       <Footer />
       <Contact />

     </div>
    </>
  )
}

export default App

