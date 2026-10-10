function Project(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <a href={props.link}><img src={props.imgFile} alt={props.imgAlt}></img></a>
        <div>{props.summary}</div>
        <h3>Technical Achievement</h3>
    </div>
  )
}

function FilterableProjectsList({tag}) {
    const selection = projects.filter(project =>
        project.tags.includes(tag)
    )

    return (
        <div>
            {selection.map(project => (
                <Project key={project.title} {...project} />
            ))}
        </div>
    )
}

export const projectTags = [
    "All",
    "Godot",
    "Unity"
]

const projects = [
    {
        title: "Elements of Gardening", 
        subtitle: "Godot | In Development",
        tags: ["All", "Godot"],
        imgFile: "src/assets/videogames/ElementsOfGardening.gif",
        imgAlt: "Brief gameplay of harvesting and summoning from Elements of Gardening",
        link: "https://connorhager.itch.io/thesis-playtesting",
        summary: "Creature collection game where the player breeds elementals with inherited traits, manages a customizable garden, and battles through combat stages using strategic team composition.",

    },
    {
        title: "Undergrowth", 
        subtitle: "Godot | Metroidvania | Group Project",
        tags: ["All", "Godot"],
        imgFile: "src/assets/videogames/Undergrowth.gif",
        imgAlt: "Gameplay of the player stunning the boss from Undergrowth",
        link: "https://connorhager.itch.io/undergrowth",
        summary: "Hollow Knight-inspired exploration platformer featuring interconnected world design, inventory management, and diverse enemy combat encounters.",
        
    },
    {
        title: "Gecko Farm Insurance", 
        subtitle: "Unity | Simulation | Demo",
        tags: ["All", "Unity"],
        imgFile: "src/assets/videogames/GeckoFarmInsurance.gif",
        imgAlt: "Gameplay of the player walking up and talking with the farmer from Gecko Farm Insurance",
        link: "https://connorhager.itch.io/gecko-farm-insurance",
        summary: "Cozy farm simulator where the player completes tasks, manages their inventory, and unlocks crops to help the farm.",
        
    },
    {
        title: "Fauna Frenzy", 
        subtitle: "Unity | Simulation | Demo",
        tags: ["All", "Unity"],
        imgFile: "src/assets/videogames/FaunaFrenzy.gif",
        imgAlt: "Gameplay of the player damaging, taming, and healing a fox from Fauna Frenzy",
        link: "https://connorhager.itch.io/fauna-frenzy",
        summary: "Top-down survival game where the player tames or defeats wildlife through tactical item management to challenge the final boss.",
    }
]

export default FilterableProjectsList