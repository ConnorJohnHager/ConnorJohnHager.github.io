import { useState } from 'react'
import ProjectsList from './projects.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="p-8">
      <ProjectsList />
    </div>
  )
}

export default App
