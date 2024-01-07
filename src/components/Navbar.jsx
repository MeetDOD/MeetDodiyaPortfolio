import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import '../styles/navbar.css'
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [themeMode, setThemeMode] = useState("dark-theme");

    const darkMode = () => {
        if (themeMode === "light-theme") {
            setThemeMode("dark-theme")
        } else {
            setThemeMode("light-theme")
        }
    }

    useEffect(() => {
        document.body.className = themeMode;
    }, [themeMode])

    const [color, setcolor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div>
            <header className={color ? 'header_wrapper header-scrolled' : 'header_wrapper'}>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid mx-3">
                        <Link to='home' spy={true} smooth={true} offset={-50} duration={500} >
                            <h3 className='logo mt-3'>Meet Dodiya</h3>
                        </Link>
                        <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <BiMenuAltRight size={35} color='rgb(42, 183, 190)' />
                        </button>
                        <div className="mt-3 collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav menu-navbar-nav">
                                <Link to='home' spy={true} smooth={true} offset={-50} duration={500} >
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page">Home</a>
                                    </li>
                                </Link>
                                <Link to='about' spy={true} smooth={true} offset={50} duration={500} >
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page">About Me</a>
                                    </li>
                                </Link>
                                <Link to='projects' spy={true} smooth={true} offset={-30} duration={500} >
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page">Projects</a>
                                    </li>
                                </Link>
                                <Link to='qualification' spy={true} smooth={true} offset={-90} duration={500} >
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page">Qualification</a>
                                    </li>
                                </Link>
                                <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} >
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page">Contact Me</a>
                                    </li>
                                </Link>
                            </ul>

                            <ul className='mt-1 mx-2 '>
                                <div class="responsiveToogle d-flex justify-content-center align-items-center">
                                    <div class="one-quarter" id="switch">
                                        <input type="checkbox" class="checkbox" id="chk" onClick={darkMode} />
                                        <label class="label" for="chk">
                                            <FaRegMoon className='fa-moon' size={10} />
                                            <FaRegSun className='fa-sun' size={10} />
                                            <div class="ball"></div>
                                        </label>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
