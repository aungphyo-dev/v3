import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineContacts} from 'react-icons/md'
import './navbar.css'
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {GoProject} from "react-icons/go";
import {FaBloggerB} from "react-icons/fa6";

const Navbar = () => {
    const homeGoHandler = () => {
        window.scroll(0, 0)
    }
    return (
        <nav className="nav">
            <ul className="nav-container transition-colors duration-500">
                <li>
                    <NavLink onClick={homeGoHandler} to='/about'
                             className="none-active-btn">
                        <CgProfile className='text-xl'/>
                        <span className='hidden active-text'>
                            About
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={homeGoHandler} to='/projects'
                             className="none-active-btn">
                        <GoProject className='text-xl'/>
                        <span className='hidden active-text'>
                            Projects
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={homeGoHandler} to='/' className="none-active-btn">
                        <AiOutlineHome className='text-xl'/>
                        <span className='hidden active-text'>
                            Home
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={homeGoHandler} to='/blogs'
                             className="none-active-btn">
                        <FaBloggerB className='text-xl'/>
                        <span className='hidden active-text'>
                            Blogs
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={homeGoHandler} to='/contact'
                             className="none-active-btn">
                        <MdOutlineContacts className='text-xl'/>
                        <span className='hidden active-text'>
                            Contact
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar