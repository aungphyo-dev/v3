import './about.css'

const About = () => {
    return (
        <section className='about-session  pt-[25px]  lg:pt-[65px]' id="about">
                        <div className='about-ct-2-div'>
                            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2></div>
                            <p
                                className='about-ct-2-para'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Hello, I'm Aung Pyae Phyo, a junior web developer based in Yangon. I'm currently part of the talented team at Codewall Technologies, where I'm honing my skills and contributing to innovative web projects. With a dynamic tech stack that includes HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, SCSS, PostCSS, PHP, Laravel, ReactJS, and Redux, I'm passionate about crafting seamless and captivating online experiences.
                            </p>
                            <p className='about-ct-2-para'>
                                Beyond my dedication to web development, I'm driven by my love for language and culture. I've embarked on a journey to learn the Japanese language, fascinated by its intricacies and the doors it can open to a whole new world of understanding. As a firm believer in lifelong learning, I'm excited to expand my horizons and continuously grow both as a developer and a language enthusiast.
                            </p>
                            <p className='about-ct-2-para'>
                                Join me on this exciting adventure as I strive to create exceptional web experiences and uncover the beauty of language and culture. Let's connect, learn, and grow together!
                            </p>

                        </div>
        </section>
    )
}
export default About