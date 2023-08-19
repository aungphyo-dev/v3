import Home from "./layouts/Home/Home.jsx";
import About from "./layouts/About/About.jsx";
import {useEffect, useState} from "react";
import Project from "./layouts/Project/Project.jsx";
import Experience from "./layouts/Experience/Experience.jsx";
import Contact from "./layouts/Contact/Contact.jsx";
const App = () => {
    const [mousePos, setMousePos] = useState({});
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
    return(
        <main className='relative w-full'>
            <div className='pointer-events-none fixed inset-0 z-30' style={{background:`radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
            <div className='w-full min-h-screen' >
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className='h-auto lg:h-screen lg:sticky top-0 flex justify-center items-center px-0 lg:px-5 lg:px-14'>
                        <Home/>
                    </div>
                    <div className='min-h-screen'>
                        <About/>
                        <Experience/>
                        <Project/>
                        <Contact/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default App