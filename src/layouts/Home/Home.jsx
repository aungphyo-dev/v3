import './home.css'
import {AiFillHeart} from 'react-icons/ai'
import {BiSolidRightArrow, BiLogoFacebook, BiLogoGithub, BiLogoInstagram} from 'react-icons/bi'
import {motion} from "framer-motion";
import CV from '../../assets/aungpyaephyo.pdf'
const Hero = () => {
    return (
        <section className='hero-session pt-[15px] lg:pt-0'  id="home">
                        <div className="hero-pt-1">
                            <div
                                className='mb-3'>
                                <AiFillHeart className='text-red-500 mb-1'/>
                                <p className='hero-pt-1-subtitle'>
                                    SPEED UP <br/>
                                    COMMUNICATIONS
                                </p>
                            </div>
                            <div
                                className="mb-5">
                                <h1 className='hero-pt-1-title'>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Hi, I'm <span className='font-aceme text-[#c3a6ff]'>Typle</span> <br/>
                                </h1>
                            </div>
                            <div
                                className='mb-5'>
                                <p className='hero-pt-1-paragraph'>
                                    Experienced junior web developer ready for collaborative projects. Let's build greatness!🚀
                                </p>
                            </div>
                            <div
                                className='mb-5'>
                                <div className='hero-pt-1-btn-container'>
                                    <a href={CV} download className='hero-pt-1-btn  peer'>
                                        Download Cv
                                    </a>
                                    <BiSolidRightArrow className='hero-pt-1-icons'/>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center items-center space-x-4'>
                                    <a target="blank" rel="noreferrer" href="https://www.facebook.com/aungpyaephyo1412"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoFacebook/>
                                    </a>
                                    <a target="blank" rel="noreferrer" href="https://github.com/aungpyaephyo1412"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoGithub/>
                                    </a>
                                    <a target="blank" rel="noreferrer"
                                       href="https://www.instagram.com/aungpyaephyo1412/"
                                       className='hero-pt-1-social-link'>
                                        <BiLogoInstagram/>
                                    </a>
                                </div>
                            </div>
                        </div>
        </section>
    )
}
export default Hero