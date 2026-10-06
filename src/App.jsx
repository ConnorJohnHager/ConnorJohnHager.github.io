import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <VideoGameProjects />
    </div>
  )
}

function Project(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <h3><i>{props.type}</i></h3>
        <a href={props.link}><img src={props.imgFile} alt={props.alt}></img></a>
        <div>{props.description}</div>
    </div>
  )
}

function VideoGameProjects() {
  return (
    <div>
      <Project 
        title="Elements of Gardening" 
        type="Godot | In Development" 
        imgFile="src/assets/videogames/ElementsOfGardening.gif"
        alt="Brief gameplay of harvesting and summoning from Elements of Gardening"
        link="https://connorhager.itch.io/thesis-playtesting"
        description={
          <>
            <p>Creature collection game where the player breeds elementals with inherited traits, manages a customizable garden, and battles through combat stages using strategic team composition.</p>
            <h3>Technical Achievements</h3>
            <p>
                <b>Genetic Breeding System:</b> Multi-layered inheritance system where offspring traits are determined through probabilistic selection from parent values, element mixing mechanics, and weighted mutation chances. Each breeding cycle calculates element inheritance with opportunities for mixed elements, color inheritance across three regions with colors from three tiered-rarities, and stat progression using weighted selection that prioritizes lower stats for mutation opportunities. 
                Visual variation is displayed through modular character architecture with color-changing shaders that dynamically render inherited body, eye, and hair colors on a single prefab. This architecture enables emergent gameplay where players discover rare combinations through experimentation.
            </p>
            <p>
                <b>Persistent Garden Architecture:</b> Comprehensive save system that preserves not only the player's stats and collected elementals, but also the player's entire customizable garden layout in a single JSON file. Tracks time-based progression for breeding and crop growth, calculating elapsed real-world time when the app is closed and applying accumulated progress on load. 
                Each summoning stone stores parent assignments, breeding method, completion status, and automation preferences, while garden plots track assigned elementals and crop storage, creating a fully persistent idle-game experience.
            </p>
          </>
        }
      />
      <Project 
        title="Undergrowth" 
        type="Godot | Metroidvania | Group Project" 
        imgFile="src/assets/videogames/Undergrowth.gif"
        alt="Gameplay of the player stunning the boss from Undergrowth"
        link="https://connorhager.itch.io/undergrowth"
        description={
          <>
            <p>Hollow Knight-inspired exploration platformer featuring interconnected world design, inventory management, and diverse enemy combat encounters.</p>
            <h3>Technical Achievements</h3>
            <p>
                <b>Comprehensive Save System:</b> JSON-based save architecture that preserves multi-variable game state across sessions in a single save file. Tracks player progression (health, currency, upgrades), inventory contents, world state (defeated enemies, collected items, unlocked map sections), and scene context (current location, last rest stop visited). 
                Auto-saves trigger on room transitions, rest stop interactions, shop visits, and player death, while supporting manual save deletion for fresh playthroughs. This ensures seamless progression tracking without performance overhead during gameplay.
            </p>
            <p>
                <b>Resource-Based Inventory Architecture:</b> Modular inventory system built with Godot resources that differentiates between consumables and permanent upgrades. Consumable items can be used to trigger effects (healing, fast travel) or sold for currency, while permanent items activate boolean flags in save data to grant persistent bonuses like increased max health or currency multipliers. 
                Integrated shop system allows the shopkeeper NPC to relocate between rest stops using specific consumable items, with shop inventory dynamically updating based on owned permanent upgrades.
            </p>
            <p>
                <b>Complex Boss Behavior:</b> State machine controlling the final boss with reactive behavior patterns that adapt to player actions and positioning. The boss enters chase state when the player is in range, transitions to attack state at close proximity, and requires strategic combat to defeat. 
                The boss needs to be hurt three times through dodging attacks, forcing wall collisions, or landing hits to enter a vulnerable stun state where damage can be dealt. The hurt counter resets after each stun phase ends, creating a risk-reward loop that emphasizes pattern recognition and tactical positioning over direct combat.
            </p>
          </>
        }
      />
      <Project 
        title="Gecko Farm Insurance" 
        type="Unity | Simulation | Demo" 
        imgFile="src/assets/videogames/GeckoFarmInsurance.gif"
        alt="Gameplay of the player walking up and talking with the farmer from Gecko Farm Insurance"
        link="https://connorhager.itch.io/thesis-playtesting"
        description={
          <>
            <p>
                <b>Scalable Inventory Architecture:</b> Inventory and deposit systems built using ScriptableObjects to ensure maintainability and expansion. 
                Features include stackable items, streamlined UI interactions, bulk transfer functionality, and dynamic restrictions that prevent depositing quest-critical items until objectives are completed.
            </p>
            <p>
                <b>Progression-Gated Resource System:</b> Task-driven crop spawning where cabbages and carrots unlock only after achieving key milestones. 
                Built with ScriptableObject architecture and inheritance to enable rapid creation of new crop types. Each crop defines its own respawn timer, unlock requirements, and yield values while sharing base harvesting behavior.
            </p>
            <p>
                <b>Dynamic Quest Framework:</b> A task-driven system with context-dependent dialogue that adapts based on player progress. Main tasks from Farmer Pete guide linear progression through the core storyline, 
                while a late-game side quest featuring the mysterious lake-dwelling squid exists outside the formal task system but integrates through dynamic dialogue interactions.
            </p>
          </>
        }
      />
      <Project 
        title="Fauna Frenzy" 
        type="Unity | Simulation | Demo" 
        imgFile="src/assets/videogames/FaunaFrenzy.gif"
        alt="Gameplay of the player damaging, taming, and healing a fox from Fauna Frenzy"
        link="https://connorhager.itch.io/fauna-frenzy"
        description={
          <>
            <p>Top-down survival game where the player tames or defeats wildlife through tactical item management to challenge the final boss.</p>
            <h3>Technical Achievements</h3>
            <p>
                <b>Responsive Item Effects:</b> A context-sensitive item interaction system where items apply fixed damage or healing values based on target type, species-specific preferences, and player input. 
                Preferred items can heal and tame wild animals, heal allied creatures, or restore player health, while non-preferred items apply damage or pass through allied targets.
            </p>
            <p>
                <b>Universal NPC Behavior System:</b> All animal NPCs operate using instances of a shared universal state machine that dynamically manages behavior execution, state transitions, combat targeting, and ally-specific behaviors such as cooperative assistance and retreat commands. 
                Species-specific traits (such as preferred foods and health values) are handled independently of the state machine while still influencing behavior conditions.
            </p>
          </>
        }
      />
    </div>
  )
}

export default App
