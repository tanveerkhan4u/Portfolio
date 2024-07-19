import Nav from './Components/Nav'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { SnackbarProvider } from 'notistack'

const App = () => {


  return (
    <>
     <div className='bg-slate-900'>
     <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} iconVariant={{ success: '✔ 🎉😍', error: '👀', }}>
      <Nav />
      <Banner />
      <About />
      <Services />
       <Projects />
       <Contact />
       <Footer />
        </SnackbarProvider>

     </div>
    </>
  )
}

export default App

