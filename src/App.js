import './App.css'
import CharactersList from './pages/CharactersList'
import Character from './pages/Character'
import {
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route strict exact path='/' element={<CharactersList />} />
        <Route strict exact path='/:id' element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
