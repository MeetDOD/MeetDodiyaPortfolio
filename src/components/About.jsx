import React from 'react'
import '../styles/about.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import Heading from './Heading';
import { FaArrowRight } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
    return (
        <div>
            <section id="about" className="about_wrapper">
                <div className="container">
                    <div className="row align-items-center" >
                        <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                            <div className="mb-5">
                                <Heading title={"About Me"} />
                            </div>
                            <p className="about_title">Greetings, I go by the name Meet Dodiya, where ambition, self-motivation, and an unwavering drive define my identity as a versatile Full Stack Developer.</p>
                            <p className="about_text ">🤩 Engaged in the pursuit of a Bachelor's degree in Information Technology.</p>
                            <p className="about_text ">🌟 Presently navigating through the challenges of the final year of my Engineering journey.</p>
                            <p className="about_text ">🌱 Exploring the intricacies of the M.E.R.N Stack, adding layers to my knowledge tapestry.</p>
                            <p className='about_text'>I am a fervent advocate for perpetual growth, fueled by an unwavering passion for technology and an insatiable desire to consistently push the boundaries of what is achievable also Exploring emerging trends in Information Technology 📈</p>
                            <span className='my-3 themeSet'><FaPhoneAlt size={28} />&nbsp; +91&nbsp; 9372575530</span>
                            <span className='mx-3 themeSet'><MdEmail size={30} />&nbsp; dodiyameet041@gmail.com</span>
                        </div>
                        <div className="col-sm-12 col-lg-6 text-center text-md-start">
                            <h3 className='mx-2'>Frontend Technology <FaArrowRight size={30} /></h3>
                            <div class="badge techCard m-2"><FaReact size={30} /><span className='mx-2'>React Js</span></div>
                            <div class="badge techCard m-2"><TbBrandReactNative size={30} /><span className='mx-2'>React Native</span></div>
                            <div class="badge techCard m-2"><FaHtml5 size={30} /><span className='mx-2'>HTML</span></div>
                            <div class="badge techCard m-2"><FaCss3Alt size={30} /><span className='mx-2'>CSS</span></div>
                            <div class="badge techCard m-2"><FaBootstrap size={30} /><span className='mx-2'>BootStrap</span></div>
                            <div class="badge techCard m-2"><SiTailwindcss size={30} /><span className='mx-2'>Tailwind</span></div>
                            <h3 className='mx-2 mt-4'>Backend Technology <FaArrowRight size={30} /></h3>
                            <div class="badge techCard m-2"><TbBrandCpp size={30} /><span className='mx-2'>Cpp</span></div>
                            <div class="badge techCard m-2"><FaNodeJs size={30} /><span className='mx-2'>Node Js</span></div>
                            <div class="badge techCard m-2"><SiExpress size={30} /><span className='mx-2'>Express Js</span></div>
                            <div class="badge techCard m-2"><IoLogoJavascript size={30} /><span className='mx-2'>JavaScript</span></div>
                            <div class="badge techCard m-2"><SiFirebase size={30} /><span className='mx-2'>Firebase</span></div>

                            <h3 className='mx-2 mt-4'>Database Technology <FaArrowRight size={30} /></h3>
                            <div class="badge techCard m-2"><SiMysql size={30} /><span className='mx-2'>MySQL</span></div>
                            <div class="badge techCard m-2"><SiMongodb size={30} /><span className='mx-2'>Mongo DB</span></div>

                            <h3 className='mx-2 mt-4'>Code Management <FaArrowRight size={30} /></h3>
                            <div class="badge techCard m-2 mb-5"><FaGithub size={30} /><span className='mx-2'>Git & Github</span></div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
