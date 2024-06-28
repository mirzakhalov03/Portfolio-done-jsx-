import './App.css'
import Nav from './components/nav/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Experience from './routes/experience/Experience'
import Projects from './routes/projects/Projects'
import Contacts from './routes/contacts/Contacts'
import Game from './routes/game/Game'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  )
}

export default App
