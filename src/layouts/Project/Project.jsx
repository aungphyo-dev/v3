import './project.css'
import projects from "./projects.js";
import ProjectCard from "../../components/Project_Card/ProjectCard.jsx";

const Project = () => {
    return (
        <div className=' pt-[25px]  lg:pt-[65px]' id='projects'>
            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
            <ul className="group/list">
                {projects.map(project=><ProjectCard key={project.id} project={project}/> )}
            </ul>
        </div>
)
}
export default Project