
import { BsGithub} from "react-icons/bs";
import {FiEye} from "react-icons/fi";

const ProjectCard = ({project}) => {
    return(
            <li className="mb-12">
                <div
                    className="group cursor-pointer relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100">
                    <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                <span
                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {project?.title}
                                </span>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-300">{project.description}</p>
                        <div>
                            <a
                                className="relative mt-2  mr-4 inline-flex gap-x-2 items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href={project.github} target="_blank" rel="noreferrer">
                                <BsGithub/> Github
                            </a>
                            <a
                                className="relative mt-2 inline-flex gap-x-2 items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href={project.demo} target="_blank" rel="noreferrer">
                                <FiEye/> Demo
                            </a>
                        </div>
                        <ul className="mt-2 flex flex-wrap">
                            {project.skills.map(skill=><li key={skill} className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}
                                </div>
                            </li>)}
                        </ul>
                    </div>
                    <img alt="img" loading="lazy"
                         className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                         src={project.image}
                    /></div>
            </li>
    )
}
export default ProjectCard