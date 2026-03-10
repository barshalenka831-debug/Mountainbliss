import { assets } from "../../assets/assets";
import Subscribe from "../Footer/Subscribe";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HotelList = () => {

    const Hotels = [
        {
            Image: [assets.Hotel1, assets.Hotel2, assets.Hotel3],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$799",
            Distance: "2 km to city center",
        },
        {
            Image: [assets.Hotel2, assets.Hotel3, assets.Hotel4],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$899",
            Distance: "3 km to city center",
        },
        {
            Image: [assets.Hotel3, assets.Hotel4, assets.Hotel5],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$999",
            Distance: "3 km to city center",
        },
        {
            Image: [assets.Hotel4, assets.Hotel5, assets.Hotel1],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$1999",
            Distance: "3 km to city center",
        },
        {
            Image: [assets.Hotel5, assets.Hotel1, assets.Hotel2],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$2399",
            Distance: "3 km to city center",
        },
        {
            Image: [assets.Hotel5, assets.Hotel1, assets.Hotel2],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$2999",
            Distance: "3 km to city center",
        }
    ];

    return (
        <>
            <Navbar variant="dark" />
            <div className="container hotellist py-4">
                <div className="row g-4">
                    {/* FILTER SIDEBAR */}
                    <div className="col-md-4 col-lg-3 d-none d-md-block">

                        <div className="card shadow-sm border-0 rounded-4 p-3">
                            <div className="mb-4">
                                <div className="ratio ratio-4x3 rounded overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps?q=London&output=embed"
                                        title="Hotel Map"
                                        loading="lazy"
                                        style={{ border: 0 }}
                                    ></iframe>
                                </div>

                                <button className="btn btn-primary w-100 mt-2">
                                    <i className="fa-solid fa-map-location-dot me-2"></i>
                                    Show on Map
                                </button>
                            </div>
                            <div className="sidebar__item -no-border">
                                <h5 className="text-18 fw-500 mb-10">Search by property name</h5>
                                <div className="single-field relative d-flex items-center py-10">
                                    <input className="pl-50 border-light text-dark-1 h-50 rounded-8" type="email" placeholder="e.g. Best Western" />
                                    <button className="absolute d-flex items-center h-full">
                                        <i className="icon-search text-20 px-15 text-dark-1"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Deals</h5>
                                <div className="sidebar-checkbox">

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Free cancellation</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Reserve now, pay at stay </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between mb-2">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Properties with special offers</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="sidebar__item ">
                                <h5 className="text-18 fw-500 mb-10 mt-2 ">Popular Filters</h5>
                                <div className="sidebar-checkbox">

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Breakfast Included</div>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">92</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Romantic</div>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">45</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">Airport Transfer</div>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">21</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">WiFi Included </div>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">78</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto mb-2">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>
                                                <div className="text-15 ml-10">5 Star</div>
                                            </div>
                                        </div>

                                        <div className="col-auto ">
                                            <div className="text-15 text-light-1">679</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="sidebar__item pb-30">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Nightly Price</h5>
                                <div className="row x-gap-10 y-gap-30">
                                    <div className="col-12">
                                        <div className="js-price-rangeSlider">
                                            <div className="text-14 fw-500"></div>

                                            <div className="d-flex justify-between mb-20">
                                                <div className="text-15 text-dark-1">
                                                    <input type="range" style={{ width: '200px' }} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__item mb-2">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Amenities</h5>
                                <div className="sidebar-checkbox">
                                    <div className="row y-gap-10 items-center justify-between ">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Breakfast Included</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">92</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">WiFi Included </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">45</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Pool</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">21</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Restaurant </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">78</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Air conditioning </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">679</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="sidebar__item mb-2">
                                <h5 className="text-18 fw-500  mt-2">Star Rating</h5>
                                <div className="row x-gap-5 y-gap-10 pt-10">

                                    <div className="col-auto">
                                        <a className="button -blue-1 bg-blue-1-05 text-blue-1 py-2 px-4 rounded-100">1</a>
                                    </div>
                                    <div className="col-auto">
                                        <a className="button -blue-1 bg-blue-1-05 text-blue-1 py-2 px-4 rounded-100">2</a>
                                    </div>
                                    <div className="col-auto">
                                        <a className="button -blue-1 bg-blue-1-05 text-blue-1 py-2 px-4 rounded-100">3</a>
                                    </div>
                                    <div className="col-auto">
                                        <a className="button -blue-1 bg-blue-1-05 text-blue-1 py-2 px-4 rounded-100">4</a>
                                    </div>
                                    <div className="col-auto">
                                        <a className="button -blue-1 bg-blue-1-05 text-blue-1 py-2 px-4 rounded-100">5</a>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Guest Rating</h5>
                                <div className="sidebar-checkbox">

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="form-radio d-flex items-center ">
                                                <div className="radio">
                                                    <input type="radio" name="name" />
                                                    <div className="radio__mark">
                                                        <div className="radio__icon"></div>
                                                    </div>
                                                </div>
                                                <div className="ml-10">Any</div>
                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">92</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="form-radio d-flex items-center ">
                                                <div className="radio">
                                                    <input type="radio" name="name" />
                                                    <div className="radio__mark">
                                                        <div className="radio__icon"></div>
                                                    </div>
                                                </div>
                                                <div className="ml-10">Wonderful 4.5+</div>
                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">45</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="form-radio d-flex items-center ">
                                                <div className="radio">
                                                    <input type="radio" name="name" />
                                                    <div className="radio__mark">
                                                        <div className="radio__icon"></div>
                                                    </div>
                                                </div>
                                                <div className="ml-10">Very good 4+</div>
                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">21</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="form-radio d-flex items-center mb-2 ">
                                                <div className="radio">
                                                    <input type="radio" name="name" />
                                                    <div className="radio__mark">
                                                        <div className="radio__icon"></div>
                                                    </div>
                                                </div>
                                                <div className="ml-10">Good 3.5+ </div>
                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">78</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="sidebar__item ">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Style</h5>
                                <div className="sidebar-checkbox">

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Budget</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">92</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Mid-range </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">45</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Luxury</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">21</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Family-friendly </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">78</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between mb-2">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Business </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">679</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="sidebar__item">
                                <h5 className="text-18 fw-500 mb-10 mt-2">Neighborhood</h5>
                                <div className="sidebar-checkbox">

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check"></div>
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Central London</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">92</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Guests&#39; favourite area </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">45</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Westminster Borough</div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">21</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Kensington and Chelsea </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">78</div>
                                        </div>
                                    </div>

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
                                                <div className="form-checkbox ">
                                                    <input type="checkbox" name="name" />
                                                    <div className="form-checkbox__mark">
                                                    </div>
                                                </div>

                                                <div className="text-15 ml-10">Oxford Street </div>

                                            </div>

                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 text-light-1">679</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* HOTEL LIST */}
                    <div className="col-12 col-md-8 col-lg-9">

                        {Hotels.map((hotel, index) => (

                            <div key={index} className="card shadow-sm border-0 rounded-4 p-3 mb-4">

                                <div className="row g-4 align-items-center">

                                    {/* HOTEL IMAGE SLIDER */}
                                    <div className="col-12 col-sm-12 col-md-4 position-relative">

                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            navigation={{
                                                nextEl: `.custom-next-${index}`,
                                                prevEl: `.custom-prev-${index}`,
                                            }}
                                            pagination={{ clickable: true }}
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            className="hotel-slider"
                                        >

                                            {hotel.Image.map((img, i) => (
                                                <SwiperSlide key={i}>
                                                    <img
                                                        src={img}
                                                        alt="hotel"
                                                        className="img-fluid rounded-4 w-100"
                                                        style={{
                                                            height: "250px",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </SwiperSlide>
                                            ))}

                                        </Swiper>

                                        {/* Custom Navigation */}
                                        <div className={`custom-prev-${index} slider-nav`}>
                                            <i className="fa-solid fa-angle-left"></i>
                                        </div>

                                        <div className={`custom-next-${index} slider-nav`}>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>
                                    {/* HOTEL DETAILS */}
                                    <div className="col-12 col-md-5">
                                        <h3 className="text-18 lh-16 fw-500">
                                            {hotel.Name}
                                            <br />
                                            Hotel, London
                                            <div className="d-inline-block ml-10">
                                                <i className="fa-solid text-10 fa-star text-warning"></i>
                                                <i className="fa-solid text-10 fa-star text-warning"></i>
                                                <i className="fa-solid text-10 fa-star text-warning"></i>
                                                <i className="fa-solid text-10 fa-star text-warning"></i>
                                                <i className="fa-solid text-10 fa-star text-warning"></i>
                                            </div>
                                        </h3>
                                        <div className="row x-gap-10 y-gap-10 items-center">
                                            <div className="col-auto">
                                                <p className="text-14">Westminster Borough, London</p>
                                            </div>
                                            <div className="col-auto">
                                                <p className="text-14">{hotel.Distance}</p>
                                            </div>
                                        </div>

                                        <div className="text-14 lh-15">
                                            <div className="fw-500">King Room</div>
                                            <div className="text-light-1">
                                                1 extra-large double bed
                                            </div>
                                        </div>

                                        <div className="text-14 text-green-2 lh-15 mt-2">
                                            <div className="fw-500">Free cancellation</div>
                                            <div>
                                                You can cancel later, so lock in this great price today.
                                            </div>
                                        </div>

                                        {/* FACILITIES */}
                                        <div className="d-flex flex-wrap gap-2 mt-3">
                                            <span className="border rounded-pill px-3 py-1 text-14">Breakfast</span>
                                            <span className="border rounded-pill px-3 py-1 text-14">WiFi</span>
                                            <span className="border rounded-pill px-3 py-1 text-14">Spa</span>
                                            <span className="border rounded-pill px-3 py-1 text-14">Bar</span>
                                        </div>

                                    </div>


                                    {/* PRICE SECTION */}
                                    <div className="col-12 col-md-3 text-md-end">

                                        <div className="mb-3">
                                            <span className="badge bg-primary p-2 fs-6">4.8</span>

                                            <div className="small text-muted">
                                                Exceptional <br /> 3,014 reviews
                                            </div>
                                        </div>

                                        <div>

                                            <div className="text-14 text-light-1">
                                                8 nights, 2 adult
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-2">
                                                {hotel.Price}
                                            </div>

                                            <div className="text-14 text-light-1 mt-2">
                                                +US$828 taxes and charges
                                            </div>

                                            <button className="button -md -dark-1 bg-blue-1 text-white mt-3">
                                                See Availability
                                                <i className="fa-solid fa-angle-right ms-2"></i>
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <Subscribe />
            <Footer />

        </>
    );
};

export default HotelList;