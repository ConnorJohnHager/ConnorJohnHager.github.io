import { useState } from 'react'
import FilterableProjectsList from './projects.jsx'

const projectTags = [
    "All",
    "Godot",
    "Unity"
]

function App() {
  const filter = "All"
  
  return (
    <div className="p-8">
      <FilterableProjectsList tag={filter} />
    </div>
  )
}

export default App
