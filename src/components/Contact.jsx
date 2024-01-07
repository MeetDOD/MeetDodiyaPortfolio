import React from 'react'
import '../styles/contact.css'
import toast from 'react-hot-toast'
import Heading from './Heading'

const Contact = () => {
    const notify = () => {
        toast.success('Email Sended Successfully')
    }
    return (
        <div className='contactUs pt-5' id='contact'>
            <Heading title={"Contact Me"} />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row p-3">
                    <div className="col-md-1">
                    </div>
                    <form className="col-md-10 " action="https://formspree.io/f/mzbqpgzj" method="POST" onSubmit={notify}>
                        <div className="row align-items-center">
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <label className="mb-2">Enter Your Email</label>
                                    <input
                                        type="email" name="email"
                                        className="form-control form-control-lg  fs-6 formTheme"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <label className="mb-2">Enter Your Name</label>
                                    <input
                                        name="message" type="text"
                                        className="form-control form-control-lg fs-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <label className="mb-2">Enter Your Subject</label>
                                    <input
                                        name="message" type="text"
                                        className="form-control form-control-lg fs-6"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <label className="mb-2">Enter Your Message</label>
                                    <textarea
                                        type="text"
                                        name="message"
                                        className="form-control form-control-lg fs-6"
                                        required
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <center className="d-flex align-items-center my-3">
                                <div className="form-outline flex-fill mb-0">
                                    <button className="learn-more-btn" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </center>
                        </div>
                    </form>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
