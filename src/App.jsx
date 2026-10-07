import { useState } from 'react'
import AllProjects from './projects.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <AllProjects />
    </div>
  )
}

export default App
