import Navbar from "../Navbar/Navbar"
import Best from "../Recommended/Best"
import Subscribe from "../Footer/Subscribe"
import Footer from "../Footer/Footer"

const Contact = () => {
    return (
        <div>
            <Navbar variant="dark" />
            {/* Google Map */}
            <div className="ratio ratio-16x9 mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6069169217944!2d85.83816867907805!3d20.267234932719436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a79f7b44227b%3A0xed8987252238055f!2sBhubaneswar%20Railway%20Station%20(Mastercanteen)!5e1!3m2!1sen!2sin!4v1772696965965!5m2!1sen!2sin"
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

                                <div className="row y-gap-20 pt-20">

                                    <div className="col-12">
                                        <div className="form-input">
                                            <input type="text" required />
                                            <label className="lh-1 text-16 text-light-1">Full Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-input">
                                            <input type="email" required />
                                            <label className="lh-1 text-16 text-light-1">Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-input">
                                            <input type="text" required />
                                            <label className="lh-1 text-16 text-light-1">Subject</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-input">
                                            <textarea rows="4" required></textarea>
                                            <label className="lh-1 text-16 text-light-1">Your Message</label>
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <button className="btn btn-primary d-flex align-items-center gap-2">
                                            Send a Message
                                            <div className="icon-arrow-top-right"></div>
                                        </button>
                                    </div>

                                </div>

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
                                +(1) 123 456 7890
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="text-14 text-light-1">Need live support?</div>
                            <div className="text-18 fw-500 mt-10">
                                hi@gotrip.com
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

                                <a className="text-black" target="_blank" href="https://www.instagram.com/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a className="text-black" target="_blank" href="https://www.linkedin.com/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="layout-pt-lg layout-pb-md">
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