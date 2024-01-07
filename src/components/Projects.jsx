import React from 'react'
import '../styles/project.css'
import Heading from './Heading'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { projectData } from '../data/ProjectData';

const Projects = () => {
    return (
        <div className="projects_wrapper pt-5" id="projects">
            <Heading title={"My Projects"} />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        {projectData.map((item, index) => {
                            return (
                                <div className="col-lg-6 col-sm-6 mb-5" key={index}>
                                    <img src={item.image} class="card-img-top rounded-4 border-top border-bottom border-2 border-dark"
                                        alt={item.title} />
                                    <div class="my-3 projectDescription">
                                        <h4 className='projectTitle'>{item.title}</h4>
                                        <h6>{item.technology}</h6>
                                        <p className='text-secondary'>{item.description}</p>
                                        <a onClick={() => window.open(item.github)} style={{ cursor: "pointer" }} class="badge techCard"><FaGithub size={25} /></a>
                                        <a onClick={() => window.open(item.liveLink)} style={{ cursor: "pointer" }} class="badge techCard mx-3"><FaExternalLinkSquareAlt size={25} /></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
