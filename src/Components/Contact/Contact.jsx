import Navbar from "../Navbar/Navbar"
import Best from "../Recommended/Best"
import Subscribe from "../Footer/Subscribe"
import Footer from "../Footer/Footer"
import { useState } from "react"

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Form Submitted Successfully");
        alert("Form Submitted Successfully");

        setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
        });
    };
    return (
        <div className="py-15 border-top-light mt-30">
            <Navbar variant="dark" />
            {/* Google Map */}
            <div className="ratio ratio-16x9 mt-5">
                
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3741.432111608333!2d85.82517647523754!3d20.323760081154944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzI1LjUiTiA4NcKwNDknMzkuOSJF!5e0!3m2!1sen!2sin!4v1772793492982!5m2!1sen!2sin"   
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Contact Form */}
            <section>
                <div className="container position-relative">
                    <div className="row justify-content-end">

                        <div className="col-xl-5 col-lg-7">
                            <div className="map-form px-40 pt-40 pb-50 bg-white rounded-4 shadow-4">

                                <div className="text-22 fw-500">
                                    Send a message 
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row y-gap-20 pt-20">
                                        <div className="col-12">
                                            <div className="form-input">
                                                <input type="text" required name="fullname" onChange={handleChange} value={formData.fullname} />
                                                <label className="lh-1 text-16 text-light-1">Full Name</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-input">
                                                <input type="email" required name="email" onChange={handleChange} value={formData.email} />
                                                <label className="lh-1 text-16 text-light-1">Email</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-input">
                                                <input type="text" required name="subject" onChange={handleChange} value={formData.subject} />
                                                <label className="lh-1 text-16 text-light-1">Subject</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-input">
                                                <textarea rows="4" required name="message" onChange={handleChange} value={formData.message}></textarea>
                                                <label className="lh-1 text-16 text-light-1">Your Message</label>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <button className="btn btn-primary d-flex align-items-center gap-2">
                                                Send a Message
                                                <i className="fa-regular fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="layout-pt-md layout-pb-lg">
                <div className="container">

                    <div className="row x-gap-80 y-gap-20 justify-between">

                        <div className="col-12">
                            <div className="text-30 sm:text-24 fw-600">
                                Contact Us
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="text-14 text-light-1">Address</div>
                            <div className="text-18 fw-500 mt-10">
                                328 Queensberry Street, North Melbourne VIC 3051, Australia
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="text-14 text-light-1">Toll Free Customer Care</div>
                            <div className="text-18 fw-500 mt-10">
                                +(91) 873 005 1559
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="text-14 text-light-1">Need live support?</div>
                            <div className="text-18 fw-500 mt-10">
                               mountainblisstravel <br />andstay@gmail.com
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="text-14 text-light-1">Follow us</div>

                            <div className="d-flex gap-3 mt-10">
                                <a className="text-black" target="_blank" href="https://www.facebook.com/">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>

                                <a className="text-black" target="_blank" href="https://www.twitter.com/">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>

                                <a className="text-black" target="_blank" href="https://www.instagram.com/mountainblisstravelandstay/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a className="text-black" target="_blank" href="https://www.linkedin.com/company/mountainblisstravelandstay/posts/?feedView=all">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="layout-pt-lg layout-pb-md bg-blue-2">
                <div data-anim-wrap className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Why Choose Us</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
                            </div>
                        </div>
                    </div>
                    <Best />
                </div>
            </section >
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Contact