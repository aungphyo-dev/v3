import './about.css'
import useFiresotre from "../../Hooks/useFiresotre.js";

const About = ({data}) => {
    return (
        <section data-section className='about-session  pt-[25px]  lg:pt-[65px]' id="about">
                        <div className='about-ct-2-div'>
                            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2></div>
                            {data?.map(about=><p key={about.created_at.seconds}
                                className='about-ct-2-para'>
                                {about.about}
                            </p>)}
                        </div>
        </section>
    )
}
export default About