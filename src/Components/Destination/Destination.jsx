import { assets } from "../../assets/assets"
import Navbar from "../Navbar/Navbar"
import RecommendedCard from "../Recommended/RecommendedCard";
import '../Style.css'
import PopularTour from "./PopularTour";
import TrendingActivity from "./TrendingActivity";
const Destination = () => {
    const categories = [
        { icon: "fa-bed", name: "Hotel" },
        { icon: "fa-arrows-turn-to-dots", name: "Tour" },
        { icon: "fa-person-skiing", name: "Activity" },
        { icon: "fa-house", name: "Holiday Rentals" },
        { icon: "fa-car-side", name: "Car" },
        { icon: "fa-sailboat", name: "Cruise" },
    ];
    return (
        <div>
            <Navbar variant="dark" />
            <section className="d-flex items-center py-15 border-top-light mt-80">
                <div className="container">
                    <div className="row y-gap-10 items-center justify-between">

                        <div className="col-auto">
                            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">

                                <div className="col-auto">
                                    <div>Europe</div>
                                </div>

                                <div className="col-auto">
                                    <div></div>
                                </div>

                                <div className="col-auto">
                                    <div>United Kingdom (UK)</div>
                                </div>

                                <div className="col-auto">
                                    <div></div>
                                </div>

                                <div className="col-auto">
                                    <div className="text-dark-1">London</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-auto">
                            <a href="#" className="text-14 text-light-1">
                                London Tourism: Best of London
                            </a>
                        </div>

                    </div>
                </div>
            </section>


            {/* Hero Section */}
            <section className="layout-pb-md">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className="relative d-flex">
                                <img
                                    src={assets.Destination}
                                    alt="London"
                                    className="col-12"
                                />

                                <div className="absolute z-2 px-50 py-60">
                                    <h1 className="text-50 fw-600 text-white">
                                        Explore London
                                    </h1>

                                    <div className="text-white">
                                        Explore deals, travel guides and things to do in London
                                    </div>
                                </div>

                                <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
                                    <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
                                        See All 90 Photos
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Category Buttons */}
                    <div className="row x-gap-20 y-gap-20 pt-20 text-center category-box">

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-solid fa-bed text-25 mb-10"></i>
                                Hotel
                            </button>
                        </div>

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-solid fa-arrows-turn-to-dots text-25 mb-10"></i>
                                Tour
                            </button>
                        </div>

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-solid fa-person-skiing text-25 mb-10"></i>
                                Activity
                            </button>
                        </div>

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-regular fa-house text-25 mb-10"></i>
                                Holiday Rentals
                            </button>
                        </div>

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-solid fa-car-side text-25 mb-10"></i>
                                Car
                            </button>
                        </div>

                        <div className="col">
                            <button className="w-100 d-flex flex-column items-center justify-center px-20 py-20 rounded-4 border border-light text-16 fw-500">
                                <i className="fa-solid fa-sailboat text-25 mb-10"></i>
                                Cruise
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <PopularTour />
            <TrendingActivity/>
        </div>
    )
}

export default Destination