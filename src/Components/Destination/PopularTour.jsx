import React from 'react'
import { assets } from '../../assets/assets'

const PopularTour = () => {
    const places = [
        {
            Image: assets.Tour1,
            time: "16+ hours",
            day: "Full-day Tours",
            description: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
            location: "Westminster Borough, London",
            price: "$9999",
        },
        {
            Image: assets.Tour2,
            time: "16+ hours",
            day: "Full-day Tours",
            description: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
            location: "Westminster Borough, London",
            price: "$9999",
        },
        {
            Image: assets.Tour3,
            time: "16+ hours",
            day: "Full-day Tours",
            description: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
            location: "Westminster Borough, London",
            price: "$9999",
        },
        {
            Image: assets.Tour4,
            time: "16+ hours",
            day: "Full-day Tours",
            description: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
            location: "Westminster Borough, London",
            price: "$9999",
        },
        {
            Image: assets.Tour5,
            time: "16+ hours",
            day: "Full-day Tours",
            description: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
            location: "Westminster Borough, London",
            price: "$9999",
        },
    ]
    return (
        <div>
            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                                <p className=" sectionTitle__text mt-3 sm:mt-0">Crafting your stay with MountainBliss Travel & Stay means a stress-free, hassle-free journey made just for you. From planning and travel to treks, hikes, bonfire nights, and calm mountain mornings, we handle everything—and you simply relax, breathe, and enjoy the mountains.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-20 sm:pt-20">
                        {places.map((item, Index) => (


                            <div key={Index} className="col-xl-3 col-lg-3 col-sm-6">

                                <div className="tourCard -type-1 rounded-4 ">
                                    <div className="tourCard__image">



                                        <div className="cardImage ratio ratio-1:1">
                                            <div className="cardImage__content">

                                                <img className="rounded-4 col-12" src={item.Image} alt="image" />


                                            </div>

                                            <div className="cardImage__wishlist">
                                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 ml-5 mt-2">
                                                    <i className="fa-regular fa-heart text-12"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="tourCard__content mt-10">
                                        <div className="d-flex items-center lh-14 mb-3">
                                            <div className="text-14 text-light-1">{item.time}</div>
                                            <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                            <div className="text-14 text-light-1">Full-day Tours</div>
                                        </div>

                                        <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                                            <span>{item.description}</span>
                                        </h4>

                                        <p className="text-light-1 lh-14 text-14 mt-3">{item.location}</p>

                                        <div className="row justify-between items-center pt-15">
                                            <div className="col-auto">
                                                <div className="d-flex items-center">
                                                    <div className="d-flex items-center x-gap-5">

                                                        <i className="fa-solid fa-star text-yellow-1 text-10"></i>
                                                        <i className="fa-solid fa-star text-yellow-1 text-10"></i>
                                                        <i className="fa-solid fa-star text-yellow-1 text-10"></i>
                                                        <i className="fa-solid fa-star text-yellow-1 text-10"></i>
                                                        <i className="fa-solid fa-star text-yellow-1 text-10"></i>

                                                    </div>

                                                    <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="text-14 text-light-1">
                                                    From
                                                    <span className="text-16 fw-500 text-dark-1">US$72</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PopularTour
