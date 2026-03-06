import React from "react";
import { assets } from "../../assets/assets";

const Overheard = () => {
    const cards = [
        {
            title: "Hotel Equatorial Melaka",
            paragraph:
                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
            image: assets.Team2,
            name: "Courtney Henry",
            designation: "Web Designer",
        },
        {
            title: "Hotel Equatorial Melaka",
            paragraph:
                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
            image: assets.Team3,
            name: "Courtney Henry",
            designation: "Web Designer",
        },
        {
            title: "Hotel Equatorial Melaka",
            paragraph:
                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
            image: assets.Team4,
            name: "Courtney Henry",
            designation: "Web Designer",
        },
    ];

    return (
        <section className="section-bg layout-pt-lg layout-pb-lg">
            <div className="section-bg__item -mx-20 bg-light-2"></div>

            <div className="container">
                <div className="row justify-center text-center">
                    <div className="col-auto">
                        <div className="sectionTitle -md">
                            <h2 className="sectionTitle__title">Overheard from travelers</h2>
                            <p className="sectionTitle__text mt-5 sm:mt-0">
                                These popular destinations have a lot to offer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row gap-4">
                    {cards.map((card, index) => (
                        <div className="card" style={{ width: "25rem" }} key={index}>
                            <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">

                                <h4 className="text-16 fw-500 text-blue-1 mb-20">
                                    {card.title}
                                </h4>

                                <p className="testimonials__text lh-18 fw-500 text-dark-1">
                                    "{card.paragraph}"
                                </p>

                                <div className="pt-20 mt-28 border-top-light">
                                    <div className="row x-gap-20 y-gap-20 items-center">

                                        <div className="col-auto">
                                            <img className="size-60 rounded-circle" src={card.image} alt="user" />
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-15 fw-500 lh-14">{card.name}</div>
                                            <div className="text-14 lh-14 text-light-1 mt-2">
                                                {card.designation}
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
    );
};

export default Overheard;