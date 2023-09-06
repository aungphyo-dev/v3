import Home from "./layouts/Home/Home.jsx";
import About from "./layouts/About/About.jsx";
import Project from "./layouts/Project/Project.jsx";
import Experience from "./layouts/Experience/Experience.jsx";
import Contact from "./layouts/Contact/Contact.jsx";
import useFiresotre from "./Hooks/useFiresotre.js";
import Loading from "./layouts/Loading/Loading.jsx";
import {useEffect, useState} from "react";


const App = () => {
    const [mousePos, setMousePos] = useState({});
    const {getCollectionByLimit,getAllCollection} = useFiresotre()
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    let projects = getCollectionByLimit('projects',4)
    const data = getAllCollection('about',"asc")
    const experience = getAllCollection('experience')
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },3500)
    }, [projects,data,experience]);
    if (loading && projects && data && experience){
        return <Loading/>
    }else {
        return(
            <main className='relative w-full'>
                <div className='pointer-events-none fixed inset-0 z-30' style={{background:`radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}>
                </div>
                <div className='w-full min-h-screen' >
                    <div className="progress fixed top-0 right-0 left-0 z-[2000]"></div>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className='h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-start items-center px-5 lg:px-14'>
                            <Home/>
                        </div>
                        <div className='min-h-screen flex flex-col justify-start items-center px-5 lg:px-16'>
                            <About data={data}/>
                            <Experience data={experience}/>
                            <Project projects={projects}/>
                            <Contact/>
                        </div>
                    </div>
                </div>
            </main>
        )}
}
export default App