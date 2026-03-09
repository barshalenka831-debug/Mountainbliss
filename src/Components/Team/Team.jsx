import { assets } from "../../assets/assets"
import '../Style.css'
const Team = () => {
    const Teams = [
        {
            img: assets.Team1,
            name: "Cody Fisher",
            position: "Founder & Managing Director",
        },
        {
            img: assets.Team2,
            name: "Dianne Russell",
            position: "Web Designer",
        },
        {
            img: assets.Team3,
            name: "Jerome Bell",
            position: "Marketing Coordinator",
        },
        {
            img: assets.Team4,
            name: "Theresa Webb",
            position: "Nursing Assistant",
        },
        {
            img: assets.Team5,
            name: "Cameron Williamson",
            position: "Dog Trainer",
        },
        {
            img: assets.Team6,
            name: "Courtney Henry",
            position: "Medical Assistant",
        },
        {
            img: assets.Team7,
            name: "Courtney Henry",
            position: "Medical Assistant",
        },
        {
            img: assets.Team4,
            name: "Courtney Henry",
            position: "Medical Assistant",
        },

    ]

    return (
        <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
                {/* TITLE */}
                <div className="text-center mb-40">
                    <h2 className="text-40 fw-600">Our Team</h2>
                    <p className="text-dark fs-4 mt-3">
                        Meet our professional team members
                    </p>
                </div>
                {/* TEAM GRID */}
                <div className="row y-gap-30">

                    {Teams.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                        >
                            <div className="text-center team-card">

                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="rounded-4 col-12"
                                />

                                <div className="mt-15">
                                    <div className="text-18 fw-500">
                                        {item.name}
                                    </div>
                                    <div className="text-14 text-light-1">
                                        {item.position}
                                    </div>
                                </div>
                                {/* Social Icons */}
                                <div className="team-social mt-2">
                                    <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section >
    )
}

export default Team