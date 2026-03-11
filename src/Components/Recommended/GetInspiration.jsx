import { assets } from "../../assets/assets"


const GetInspiration = () => {
    const GetInspirations = [
        {
            Image: assets.View1,
            Describtion: "10 European ski destinations you should visit this winter",
            Date: "Mrach 06, 2026"

        },
        {
            Image: assets.View2,
            Describtion: "Booking travel during Corona: good advice in an uncertain time",
            Date: "March 06, 2026"

        },
        {
            Image: assets.View3,
            Describtion: "Where can I go? 5 amazing countries that are open right now",
            Date: "Mrach 06, 2026"

        },
    ]
    return (
        <div>
            <section className="layout-pt-lg layout-pb-md">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Get inspiration for your next trip</h2>
                                <p className=" sectionTitle__text mt-3 sm:mt-0">Mountain Hikes, Farm walks, Waterfall Lawn Games, Sunrise & Sunset views Stargazing, Mountain Bike Park, Bonfire, Camping, Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-20">
                        {GetInspirations.map((GetInspirations, Index) => (

                            <div key={Index} className="col-lg-4 col-sm-6">
                                <div className="blogCard -type-1 d-block ">

                                    <div className="blogCard__image">
                                        <div className="ratio ratio-4:3 rounded-4 rounded-8">
                                            <img className="img-ratio js-lazy" src={GetInspirations.Image} alt="image" />
                                        </div>
                                    </div>

                                    <div className="mt-3 mb-4">
                                        <h4 className="text-dark-1 text-18 fw-500">{GetInspirations.Describtion}</h4>
                                        <div className="text-light-1 text-15 lh-14 mt-3">{GetInspirations.Date}</div>
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

export default GetInspiration
