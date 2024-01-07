import React from 'react'
import '../styles/qualification.css'
import Heading from './Heading'

const Qualification = () => {
    return (
        <div className='qualification_wrapper' id='qualification'>
            <div className='mb-5'>
                <Heading title={"My Qualification"} />
            </div>
            <div class="container">
                <main class="row">
                    <section class="col">
                        <header class="title">
                            <h2>EDUCATION</h2>
                        </header>

                        <div class="contents">

                            <div class="box">
                                <h4>2021 - Ongoing</h4>
                                <h3>Vidyavardhini's College Of Engineering And Technology</h3>
                                <p>Bachelor of Engineering (B.E) In Information Technology</p>
                                <p>CGPA: 9.30/10</p>
                            </div>

                            <div class="box">
                                <h4>2019 - 2021</h4>
                                <h3>Senior Secondary (XII), Science</h3>
                                <p>MAHARASHTRA STATE BOARD OF SECONDARY AND HIGHER SECONDARY EDUCATION board</p>
                                <p>Percentage: 84.83%</p>
                            </div>

                            <div class="box">
                                <h4>Year of completion: 2019</h4>
                                <h3>Secondary (X)</h3>
                                <p>The Saraswati Vidyalaya <br />MAHARASHTRA STATE BOARD OF SECONDARY AND HIGHER SECONDARY EDUCATION board</p>
                            </div>

                        </div>
                    </section>

                    <section class="col">

                        <header class="title">
                            <h2>EXPERIENCE</h2>
                        </header>

                        <div class="contents">

                            <div class="box">
                                <h4>Jul 2023 - Nov 2023</h4>
                                <h3>Intern at Talentship Global Advisory Forum</h3>
                                <p>Position: Team head and Full Stack Developer</p>
                                <p>Built, Learned and Developed Full stack projects for various clients also enhancing my Web Development skills through this Internship</p>
                            </div>
                            <div class="box">
                                <h4>October 1st, 2023</h4>
                                <h3>Codeverse Hackathon Runner-up held by Bhausaheb Vartak Polytechnic</h3>
                                <p>Developed and Deployed fullstack Women safety webapp in M.E.R.N Stack under 24 Hours</p>
                            </div>
                            <div class="box">
                                <h4>August 18th, 2022</h4>
                                <h3>TATA Data Visualisation <br /> Empowering Business with Effective Insights</h3>
                            </div>
                            <div class="box">
                                <h4>2023 - Present</h4>
                                <h3>VCET Hackathon</h3>
                                <h3>Web Consultant</h3>
                                <p>Developing and Managing Hackathon Website in Various aspect</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Qualification
