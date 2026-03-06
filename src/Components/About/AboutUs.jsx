import '../Style.css'
import { assets } from '../../assets/assets'
import Best from '../Recommended/Best'
import Footer from '../Footer/Footer'
import Subscribe from '../Footer/Subscribe'
import Navbar from '../Navbar/Navbar'
import AboutSummary from './AboutSummary'
import Team from '../Team/Team'
import Overheard from '../Team/Testimony'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <section className="section-bg layout-pt-lg layout-pb-lg">
                <div className="section-bg__item col-12">
                    <img src={assets.userbg} alt="image" />
                </div>

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-40 md:text-25 fw-600 text-white">Looking for joy?</h1>
                            <div className="text-white mt-15">Your trusted trip companion</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-lg layout-pb-md">
                <div data-anim-wrap className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title fs-1">Why Choose Us</h2>
                                <p className=" sectionTitle__text mt-3">These popular destinations have a lot to offer</p>
                            </div>
                        </div>
                    </div>
                    <Best />
                    <AboutSummary />
                    <Team />
                </div>
            </section >
            <Overheard />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default AboutUs
