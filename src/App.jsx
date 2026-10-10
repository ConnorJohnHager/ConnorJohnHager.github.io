import { useState } from 'react'
import FilterableProjectsList, {projectTags} from './projects.jsx'

function App() {
  return (
    <div className="p-8">
      <ProjectFilter />
    </div>
  )
}

export default App

function ProjectFilter() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  return (
    <div>
      <label>
        Filter Projects:
        <select 
          name="projectFilter" 
          value={selectedFilter}
          onChange={e => setSelectedFilter(e.target.value)}
        >
          {
            projectTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
          ))}
        </select>
      </label>
      <FilterableProjectsList tag={selectedFilter} />
    </div>
  )
}