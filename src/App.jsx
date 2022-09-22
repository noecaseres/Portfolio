import '../src/styles/styles.scss'
import { About } from './components/About'
import { Education } from './components/Education'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact';

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Education/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
