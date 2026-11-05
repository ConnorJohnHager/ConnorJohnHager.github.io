import { useState } from 'react'
import FilterableProjectsList, {projectTags} from './projects.jsx'


function App() {
  return (
    <>

    <header>
      <img src="src/assets/header.png" alt="Connor Hager's Portfolio Header"></img>
    </header>

    <main>
      <Introduction />
      <ProjectFilter />
      <LearnToCode />
    </main>

    <footer>
      <p>Email: <a href="mailto:connorhager12@gmail.com">connorhager12@gmail.com</a></p>
      <p>Phone: <a href="tel:+16036609374">+1.603.660.9374</a></p>
      <p class="footer-note">This website was self-developed using React.js and Mantine.</p>
    </footer>

    </>
  )
}

function Introduction() {
  return (
    <div class="introduction">
      <h2>Welcome!</h2>
      <p>
        I'm Connor, a developer and digital media specialist passionate about creating engaging, interactive experiences. 
        With a B.S. in Biology and an M.S. in Digital Media, I enjoy combining technical problem-solving with creative thinking to develop meaningful experiences that entertain, educate, and make people's lives easier. 
        My love of animals and the natural world often inspires my work, particularly when creating immersive environments, bringing virtual creatures to life, or finding new ways to connect people with the world around them. 
        I approach every project with a focus on iteration, thoughtful design, and building solutions that are both functional and scalable. 
        I'm always looking for opportunities to learn, experiment, and create something meaningful. 
      </p>
    </div>
  )
}

function ProjectFilter() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  return (
    <div class="project-all">
      <h2 class="project-filter-title">Project Highlights</h2>
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

function LearnToCode() {
  return (
    <div class="learn-to-code-all">
      <h2>Learn To Code</h2>
      <p>Check out my growing collection of reusable code templates and resources to help developers learn new tools and start building!</p>
      <a href="https://github.com/ConnorJohnHager/Learn-To-Code" class="learn-to-code-button">Visit My GitHub Repository</a>
    </div>
  )
}

export default App