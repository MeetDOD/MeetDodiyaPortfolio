import React from 'react';
import '../styles/hero.css';
import myImage from '../Images/myimage.png'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiHandWaving } from "react-icons/pi";
import resume from '../Images/MeetDodiya.pdf'
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div>
            <section className='banner_wrapper' id='home'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 header-img-section imageAnimate'>
                            <img src={myImage} alt='Hello Carwale' className='img-fluid' />
                        </div>
                        <div className="banner-content col-md-6 my-5 my-md-0 text-center text-md-start">
                            <h2><span class="wave"><PiHandWaving className='icons' size={40} /></span> Hello</h2>
                            <h1 className='my-1'>I am  <span style={{ color: "rgb(42, 183, 190)" }}>Meet Dodiya</span></h1>
                            <h4>I'm Full Stack Developer.</h4>
                            <h4>I'm Final Year IT Engineering Student.</h4>
                            <h4>Headed out on the road of Mastery!</h4>
                            <div className='mt-3'>
                                <MdEmail size={30} className='icons' onClick={() => window.open("mailto:dodiyameet041@gmail.com")} />
                                <FaGithub size={30} className='mx-2 icons' onClick={() => window.open("https://github.com/MeetDOD")} />
                                <FaLinkedin size={30} className='icons' onClick={() => window.open("https://www.linkedin.com/in/meetdodiya")} />
                            </div>
                            <div className="mt-3">
                                <div>
                                    <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className='learn-more-btn mb-2 mx-1' href=''>Hire Me</Link>
                                    <a className='learn-more-btn btn-extra-header mx-1' href={resume} download="MeetDodiya" >Get Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scroll__down'>
                    <a className='mouse__wrapper'></a>
                    <center className='home__scroll-name'>Scroll Down</center>
                    <span className='mouse'>
                        <span className='wheel'></span>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Hero
