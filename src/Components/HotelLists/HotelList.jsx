import React from "react";
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
            Price: "$799"
        },
        {
            Image: [assets.Hotel2, assets.Hotel3, assets.Hotel4],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$799"
        },
        {
            Image: [assets.Hotel3, assets.Hotel4, assets.Hotel5],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$799"
        },
        {
            Image: [assets.Hotel4, assets.Hotel5, assets.Hotel1],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$799"
        },
        {
            Image: [assets.Hotel5, assets.Hotel1, assets.Hotel2],
            Name: "Great Northern Hotel, a Tribute Portfolio",
            Price: "$799"
        }
    ];

    return (
        <>
            <Navbar variant="dark" />

            <div className="container hotellist ">

                {Hotels.map((hotel, index) => (

                    <div key={index} className="card shadow-sm border-0 rounded-4 p-3 mb-4">

                        <div className="row g-4 align-items-center">

                            {/* HOTEL IMAGE SLIDER */}
                            <div className="col-12 col-md-4 position-relative">

                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: ".custom-next",
                                        prevEl: ".custom-prev"
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
                                                style={{ height: "250px", objectFit: "cover" }}
                                            />
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                                {/* Custom Navigation */}
                                <div className="custom-prev">
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>

                                <div className="custom-next">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>

                            </div>

                            {/* HOTEL DETAILS */}
                            <div className="col-12 col-md-5">

                                <h3 className="text-18 lh-16 fw-500">
                                    {hotel.Name} <br />
                                    Hotel, London

                                    <div className="d-inline-block ml-10">
                                        <i className="fa-solid fa-star  text-10 text-warning"></i>
                                        <i className="fa-solid fa-star  text-10 text-warning"></i>
                                        <i className="fa-solid fa-star  text-10 text-warning"></i>
                                        <i className="fa-solid fa-star  text-10 text-warning"></i>
                                        <i className="fa-solid fa-star  text-10 text-warning"></i>
                                       
                                    </div>
                                </h3>

                                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                                    <div className="col-auto">
                                        <p className="text-14">Westminster Borough, London</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="size-3 rounded-full bg-light-1"></div>
                                    </div>
                                    <div className="col-auto">
                                        <p className="text-14">2 km to city center</p>
                                    </div>
                                </div>

                                <div className="text-14 lh-15 mt-2">
                                    <div className="fw-500">King Room</div>
                                    <div className="text-light-1">1 extra-large double bed</div>
                                </div>

                                <div className="text-14 text-green-2 lh-15 mt-2">
                                    <div className="fw-500">Free cancellation</div>
                                    <div>You can cancel later, so lock in this great price today.</div>
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
                                    <div className="text-14 text-light-1">8 nights, 2 adult</div>

                                    <div className="text-22 lh-12 fw-600 mt-2">
                                        {hotel.Price}
                                    </div>

                                    <div className="text-14 text-light-1 mt-2">
                                        +US$828 taxes and charges
                                    </div>

                                    <a
                                        href="/"
                                        className="button -md -dark-1 bg-blue-1 text-white mt-3"
                                    >
                                        See Availability
                                        <i className="fa-solid fa-arrow-right ms-2"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <Subscribe />
            <Footer />

        </>
    );
};

export default HotelList;