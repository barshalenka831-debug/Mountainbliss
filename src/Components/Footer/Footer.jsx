import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="pt-60 pb-60">
                    <div className="row y-gap-40 justify-between xl:justify-start">
                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <h5 className="text-16 fw-500 mb-30">Contact Us</h5>

                            <div className="mt-30">
                                <div className="text-14 mt-30">Toll Free Customer Care</div>
                                <a href="+91 9999999999" className="text-18 fw-500 text-blue-1 mt-5">+(91) 999 999 9999</a>
                            </div>

                            <div className="mt-35">
                                <div className="text-14 mt-30">Need live support?</div>
                                <a href="#" className="text-18 fw-500 text-blue-1 mt-5">mountainbliss@gmail.com</a>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <h5 className="text-16 fw-500 mb-30">Company</h5>
                            <div className="d-flex y-gap-10 flex-column">
                                <Link className="text-black" to="/home/aboutus">About Us</Link>
                                <Link className="text-black" to="/">Destination</Link>
                                <Link className="text-black" to="/">Pages</Link>
                                <Link className="text-black" to="/">About Us</Link>
                                <Link className="text-black" to="/">Car service</Link>
                                <Link className="text-black" to="/">Contact Us</Link>

                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <h5 className="text-16 fw-500 mb-30">Support</h5>
                            <div className="d-flex y-gap-10 flex-column">
                                <Link className="text-black" to="/">Contact</Link>
                                <Link className="text-black" to="/">Legal Notice</Link>
                                <Link className="text-black" to="/">Privacy Policy</Link>
                                <Link className="text-black" to="/">Terms and Conditions</Link>
                                <Link className="text-black" to="/">Sitemap</Link>

                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-sm-6">
                            <h5 className="text-16 fw-500 mb-30">Other Services</h5>
                            <div className="d-flex y-gap-10 flex-column">
                                <Link className="text-black" to="/">Car hire</Link>
                                <Link className="text-black" to="/">Activity Finder</Link>

                                <Link className="text-black" to="/">Tour List</Link>
                                <Link className="text-black" to="/">Flight finder</Link>
                                <Link className="text-black" to="/">Cruise Ticket</Link>
                                <Link className="text-black" to="/">Holiday Rental</Link>
                                <Link className="text-black" to="/">Travel Agents</Link>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 border-top-light">
                    <div className="row justify-between items-center y-gap-10">
                        <div className="col-auto">
                            <div className="row x-gap-30 y-gap-10">
                                <div className="col-auto">
                                    <div className="d-flex items-center">
                                        © 2026  Thyo All rights reserved.
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="d-flex x-gap-15">
                                        <a href="#">Privacy</a>
                                        <a href="#">Terms</a>
                                        <a href="#">Site Map</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="row y-gap-10 items-center">
                                

                                <div className="col-auto">
                                    <div className="d-flex x-gap-20 items-center">
                                        <a className="text-black" target='_blank' href='https://www.facebook.com/'><i className="fa-brands fa-facebook text-14"></i></a>
                                        <a className="text-black" target='_blank' href="https://www.twitter.com/"><i className="fa-brands fa-twitter text-14"></i></a>
                                        <a className="text-black" target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram text-14"></i></a>
                                        <a className="text-black"target='_blank' href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin text-14"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
