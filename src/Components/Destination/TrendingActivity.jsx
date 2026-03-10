import React from 'react'
import { assets } from '../../assets/assets'

const TrendingActivity = () => {
  const Activities = [
    {
      Image: assets.Activities1,
      Time: "6+ hours",
      describtion: "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip",
      location: "Westminster Borough, London",
      price: "US$72",

    },
    {
      Image: assets.Activities2,
      Time: "6+ hours",
      describtion: "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip",
      location: "Westminster Borough, London",
      price: "US$72",

    },
    {
      Image: assets.Activities3,
      Time: "6+ hours",
      describtion: "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip",
      location: "Westminster Borough, London",
      price: "US$72",

    },
    {
      Image: assets.Activities4,
      Time: "6+ hours",
      describtion: "Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip",
      location: "Westminster Borough, London",
      price: "US$72",

    },

  ]
  return (
    <div>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-3 sm:mt-0">Mountain Hikes, Farm walks, Waterfall Lawn Games, Sunrise & Sunset views Stargazing, Mountain Bike Park, Bonfire, Camping, Experience</p>
              </div>
            </div>
            <div className="col-auto">
            </div>
          </div>

          <div className="row y-gap-30 pt-20 ">
            {Activities.map((Activities, Index) => (

              <div key={Index} className="col-xl-3 col-lg-3 col-sm-6">
                <div className="activityCard -type-1 rounded-4 ">
                  <div className="activityCard__image">

                    <div className="cardImage ratio ratio-1:1">
                      <div className="cardImage__content">

                        <img className="rounded-4 col-12" src={Activities.Image} alt="image" />
                      </div>

                      <div className="cardImage__wishlist">
                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i className="fa-regular fa-heart text-12"></i>
                        </button>
                      </div>
                      <div className="cardImage__leftBadge">
                        {/* <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                        LIKELY TO SELL OUT*
                      </div> */}
                      </div>

                    </div>

                  </div>

                  <div className="activityCard__content mt-10">
                    <div className="text-14 lh-14 text-light-1 mb-3">{Activities.Time}</div>

                    <h4 className="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                      <span>{Activities.describtion}</span>
                    </h4>

                    <p className="text-light-1 text-14 lh-14 mt-3">{Activities.location}</p>

                    <div className="row justify-between items-center pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <i className="fa-solid fa-star text-10 text-warning mr-5"></i>

                          <div className="text-14 text-light-1">
                            <span className="text-15 text-dark-1 fw-500">4.82</span>
                            <em/> 94 reviews
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          From <span className="text-16 fw-500 text-dark-1">{Activities.price}</span>
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

export default TrendingActivity
