import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { assets } from "../../assets/assets"
import "../Style.css"

const DestinationNear = () => {

  const Destinations = [
    { Image: assets.Near1, Place: "London, UK" },
    { Image: assets.Near2, Place: "Paris, France" },
    { Image: assets.Near3, Place: "Rome, Italy" },
    { Image: assets.Near4, Place: "Barcelona, Spain" },
    { Image: assets.Near5, Place: "Berlin, Germany" },
    { Image: assets.Near6, Place: "Amsterdam, Netherlands" },
    { Image: assets.Near7, Place: "Zurich, Switzerland" },
  ]

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">

        <div className="row y-gap-20">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title fw-bold">Destinations near London</h2>
              <p className="sectionTitle__text mt-3 sm:mt-0">
                These popular destinations have a lot to offer
              </p>
            </div>
          </div>
        </div>

        <div className="pt-20 position-relative">

          {/* Custom Arrows */}
          <button className="custom-prev swiper-arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button className="custom-next swiper-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}

            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".custom-prev"
              swiper.params.navigation.nextEl = ".custom-next"
            }}

            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next"
            }}

            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 5 }
            }}
          >

            {Destinations.map((Destination, index) => (
              <SwiperSlide key={index}>
                <a className="citiesCard -type-2">

                  <div className="citiesCard__image rounded-4 ratio ratio-1:1">
                    <img
                      className="img-ratio rounded-4"
                      src={Destination.Image}
                      alt={Destination.Place}
                    />
                  </div>

                  <div className="citiesCard__content mt-3">
                    <h4 className="text-18 lh-13 fw-500 text-dark-1">
                      {Destination.Place}
                    </h4>

                    <div className="text-14 text-light-1">
                      4,090 properties
                    </div>
                  </div>

                </a>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </section>
  )
}

export default DestinationNear