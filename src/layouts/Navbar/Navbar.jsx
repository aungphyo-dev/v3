import './navbar.css'

const Navbar = () => {
    const GoSection = (id) => {
        const EL = document.getElementById(id);
        EL.scrollIntoView({behavior:"smooth"})
    }
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-12 mb-9 w-max">
                <li>
                    <button onClick={()=>GoSection("about")} className="group flex items-center py-3"><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </button>
                </li>
                <li>
                    <button onClick={()=>GoSection("experience")} className="group flex items-center py-3 "><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </button>
                </li>
                <li>
                    <button onClick={()=>GoSection("projects")} className="group flex items-center py-3 "><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar