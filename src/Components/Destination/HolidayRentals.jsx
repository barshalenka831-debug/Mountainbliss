import { assets } from "../../assets/assets"

const HolidayRentals = () => {
    const Rentals = [
        {
            Image: assets.Rental1,
            Location: "Westminster Borough, London",
            Describtion: "Luxury New Apartment With Private Garden",
            Price: "$899",

        },
        {
            Image: assets.Rental2,
            Location: "Ciutat Vella, Barcelona",
            Describtion: "Premium One Bedroom Luxury Living in the Heart of Mayfair",
            Price: "$899",

        },
        {
            Image: assets.Rental3,
            Location: "Manhattan, New York",
            Describtion: "PStyle, Charm & Comfort in Camberwell",
            Price: "$899",

        },
        {

            Image: assets.Rental4,
            Location: "Vaticano Prati, Rom",
            Describtion: "Marylebone - Oxford Street 1 bed apt with WiFi",
            Price: "$899",
        }
    ]
    return (
        <div>
            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Featured Holiday Rentals</h2>
                                <p className=" sectionTitle__text mt-3 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-20">
                        {Rentals.map((Rentals, Index) => (
                            <div key={Index} className="col-xl-3 col-lg-3 col-sm-6">

                                <div className="rentalCard -type-1 rounded-4 ">
                                    <div className="rentalCard__image">

                                        <div className="cardImage ratio ratio-1:1">
                                            <div className="cardImage__content">

                                                <img className="rounded-4 col-12" src={Rentals.Image} alt="image" />
                                            </div>

                                            <div className="cardImage__wishlist">
                                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                    <i className="fa-regular fa-heart text-12"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="rentalCard__content mt-10">
                                        <div className="text-14 text-light-1 lh-14 mb-3">{Rentals.Location}</div>

                                        <h4 className="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                            <span>{Rentals.Describtion}</span>
                                        </h4>

                                        <p className="text-light-1 lh-14 text-14 mt-3"></p>

                                        <div className="d-flex items-center mt-3">
                                            <div className="text-14 text-light-1">2 guests</div>
                                            <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                            <div className="text-14 text-light-1">1 bedroom</div>
                                            <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                            <div className="text-14 text-light-1">1 bed</div>
                                        </div>

                                        <div className="d-flex items-center mt-20">
                                            <div className="flex-center bg-blue-1 rounded-0 size-30 text-12 fw-600 text-white">4.8</div>
                                            <div className="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                            <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                                        </div>

                                        <div className="mt-3">
                                            <div className="text-light-1">
                                                <span className="fw-500 text-dark-1">{Rentals.Price}</span> / per night
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

export default HolidayRentals
