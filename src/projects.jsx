function Project(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <h3><i>{props.type}</i></h3>
        <a href={props.link}><img src={props.imgFile} alt={props.imgAlt}></img></a>
        <div>{props.summary}</div>
        <h3><i>Technical Achievement</i></h3>
    </div>
  )
}

function AllProjects() {
    return (
        <div>
            {projects.map(project => (
                <Project key={project.title} {...project} />
            ))}
        </div>
    )
}

const projects = [
    {
        title: "Elements of Gardening", 
        type: "Godot | In Development",
        tags: ["Video Game", "Godot"],
        imgFile: "/assets/videogames/ElementsOfGardening.gif",
        imgAlt: "Brief gameplay of harvesting and summoning from Elements of Gardening",
        link: "https://connorhager.itch.io/thesis-playtesting",
        summary: "Creature collection game where the player breeds elementals with inherited traits, manages a customizable garden, and battles through combat stages using strategic team composition.",

    },
    {
        title: "Undergrowth", 
        type: "Godot | Metroidvania | Group Project",
        tags: ["Video Game", "Godot"],
        imgFile: "/assets/videogames/Undergrowth.gif",
        imgAlt: "Gameplay of the player stunning the boss from Undergrowth",
        link: "https://connorhager.itch.io/undergrowth",
        summary: "Hollow Knight-inspired exploration platformer featuring interconnected world design, inventory management, and diverse enemy combat encounters.",
        
    },
    {
        title: "Gecko Farm Insurance", 
        type: "Unity | Simulation | Demo",
        tags: ["Video Game", "Unity"],
        imgFile: "/assets/videogames/GeckoFarmInsurance.gif",
        imgAlt: "Gameplay of the player walking up and talking with the farmer from Gecko Farm Insurance",
        link: "https://connorhager.itch.io/gecko-farm-insurance",
        summary: "Cozy farm simulator where the player completes tasks, manages their inventory, and unlocks crops to help the farm.",
        
    },
    {
        title: "Fauna Frenzy", 
        type: "Unity | Simulation | Demo",
        tags: ["Video Game", "Unity"],
        imgFile: "/assets/videogames/FaunaFrenzy.gif",
        imgAlt: "Gameplay of the player damaging, taming, and healing a fox from Fauna Frenzy",
        link: "https://connorhager.itch.io/fauna-frenzy",
        summary: "Top-down survival game where the player tames or defeats wildlife through tactical item management to challenge the final boss.",
        
    }
]

export default AllProjects