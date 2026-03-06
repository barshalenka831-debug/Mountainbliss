import React from 'react'
import { assets } from '../../assets/assets'

const CarDetails = () => {
    const cars = [
        {
            Image: assets.car1,
            CarName: "Mercedes-Benz E-class",
            price: "$699"
        },
        {
            Image: assets.car1,
            CarName: "Mercedes-Benz E-class",
            price: "$799"
        },
        {
            Image: assets.car1,
            CarName: "Mercedes-Benz E-class",
            price: "$899"
        },
        {
            Image: assets.car1,
            CarName: "Mercedes-Benz E-class",
            price: "$999"
        },
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-3">
                </div>
                <div className="col-lg-8 col-md-12">
                    {cars.map((car, index) => (
                        <div key={index} className="border-top-light pt-4 mb-4">

                            <div className="row align-items-center">
                                {/* Image */}
                                <div div className="col-lg-4 col-md-12 mb-3" >
                                    <div className="cardImage rounded-4 overflow-hidden">
                                        <img
                                            src={car.Image}
                                            alt="car"
                                            className="img-fluid w-100 rounded-4"
                                        />
                                    </div>
                                </div>
                                {/* Details */}
                                <div className="col-lg-5 col-md-8">
                                    <h3 className="text-18 fw-500">
                                        {car.CarName}
                                        <span className="text-muted"> or similar</span>
                                    </h3>
                                    <div className="row mt-3">
                                        <div className="col-6 mb-2">
                                            <i className="fa-solid fa-user me-2"></i> 4
                                        </div>
                                        <div className="col-6 mb-2">
                                            <i className="fa-solid fa-suitcase-rolling me-2"></i> 1
                                        </div>

                                        <div className="col-6  mb-2">
                                            <div className="d-flex items-center">
                                                <i className="fa-solid fa-car me-2"></i>
                                                <div className="text-14 ml-10">Automatic</div>
                                            </div>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <div className="d-flex items-center">
                                                <i className="fa-solid fa-gauge-high me-2"></i>
                                                <div className="text-14 ml-10">Unlimited</div>
                                            </div>
                                        </div>

                                        <div className="col-6 mt-2">
                                            <div className="d-flex items-center">
                                                <i className="fa-solid fa-aquarius me-2"></i>
                                                <div className="text-14 ml-10">Air conditioning</div>
                                            </div>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <div className="d-flex items-center">
                                                <i className="fa-solid fa-gas-pump me-2"></i>
                                                <div className="text-14 ml-10">Full to full</div>
                                            </div>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <div className="mt-20">
                                                <div className="d-flex items-center">
                                                    <i className="fa-solid fa-check text-10 me-2"></i>
                                                    <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                </div>

                                                <div className="d-flex items-center mt-2">
                                                    <i className="fa-solid fa-check text-10 me-2"></i>
                                                    <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Price */}
                                <div className="col-lg-3 col-md-4 text-lg-end mt-3 mt-lg-0">

                                    <div className="fw-bold fs-4">
                                        {car.price}
                                    </div>

                                    <p className="text-muted">Total</p>

                                    <a
                                        href="/"
                                        className="btn btn-dark mt-2"
                                    >
                                        View Detail
                                        <i className="fa-solid fa-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default CarDetails
