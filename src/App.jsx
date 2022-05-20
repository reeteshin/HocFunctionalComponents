import { useState } from 'react'
 
import './App.css'
 
import ToGreek from './Components/ToGreek'
import EnhancherdToFrench from './Components/EnhancherdToFrench'
import ToHindi from './Components/ToHindi'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div className="App">
        <ToGreek />
        <EnhancherdToFrench/>
        <ToHindi/>
    </div>
  )
}

export default App
