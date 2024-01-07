import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='contactUs'>
            <div className='container'>
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-2">
                    <div class="col-md-4 d-flex align-items-center">
                        <span class="mb-3 mb-md-0 footerText">© 2024 Meet Ashok Dodiya</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <MdEmail onClick={() => window.open("mailto:dodiyameet041@gmail.com")} size={30} className='icons' />
                        <FaGithub onClick={() => window.open("https://github.com/MeetDOD")} size={30} className='mx-2 icons' />
                        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/meetdodiya")} size={30} className='icons' />
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
