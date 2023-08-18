import './about.css'
import LIKEDIN from '../../assets/icons/icons8-linkedin-96.png'
import {motion} from "framer-motion";

const About = () => {
    return (
        <section className='about-session' id="about">
                        <div className='about-ct-2-div'>
                            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2></div>
                            <p
                                className='about-ct-2-para'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm Aung Pyae Phyo, a junior web developer at Codewall Technologies in Yangon. My tech stack includes HTML, CSS, JS, Tailwind CSS, Bootstrap, SCSS, PostCSS, PHP, Laravel, ReactJS, and Redux. Beyond web development, I'm also passionate about learning the Japanese language. Excited to grow both as a developer and a language enthusiast!
                            </p>
                        </div>
        </section>
    )
}
export default About