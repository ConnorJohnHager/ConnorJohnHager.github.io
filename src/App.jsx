import { useState } from 'react'
import FilterableProjectsList, {projectTags} from './projects.jsx'


function App() {
  return (
    <>

    <header>
      <img src="src/assets/header.png" alt="Connor Hager's Portfolio Header"></img>
    </header>

    <main>
      <ProjectFilter />
    </main>

    <footer>
      <p>Email: <a href="mailto:connorhager12@gmail.com">connorhager12@gmail.com</a></p>
      <p>Phone: <a href="tel:+16036609374">+1.603.660.9374</a></p>
      <p class="footer-note">This website was self-developed using React.js and Mantine.</p>
    </footer>

    </>
  )
}

export default App

function ProjectFilter() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  return (
    <div class="project-all">
      <div class="project-filter">
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
      </div>
      <FilterableProjectsList tag={selectedFilter} />
    </div>
  )
}