import '../Style.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { assets } from '../../assets/assets'
import Deals from '../Recommended/Deals'

const Rooms = () => {
  return (
    <section className="layout-pt-lg layout-pb-md" data-aos="zoom-in-down">
      <div className="container">

        {/* Section Title */}
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title fw-bold">Popular Destinations</h2>
              <p className="sectionTitle__text fw-bold">
                Travelling with partners or groups builds deeper bonds through shared moments, challenges, and laughter.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="pt-20 sm:pt-20 position-relative">

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >

            <SwiperSlide>
              <CityCard city="Hotels" image={assets.Hotel1} />
            </SwiperSlide>

            <SwiperSlide>
              <CityCard city="Apartments" image={assets.Hotel2} />
            </SwiperSlide>

            <SwiperSlide>
              <CityCard city="Resorts" image={assets.Hotel3} />
            </SwiperSlide>

            <SwiperSlide>
              <CityCard city="Villas" image={assets.Hotel4} />
            </SwiperSlide>

            <SwiperSlide>
              <CityCard city="Cabins" image={assets.Hotel5} />
            </SwiperSlide>

          </Swiper>

          {/* Navigation Buttons */}
          <button className="custom-prev section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none">
            <i className="fa-solid fa-arrow-left text-dark"></i>
          </button>

          <button className="custom-next section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none">
            <i className="fa-solid fa-arrow-right text-dark"></i>
          </button>

        </div>
      </div>
      <Deals />
    </section>

  )
}

export default Rooms


//  City Card Component
const CityCard = ({ city, image }) => {
  return (
    <div className="citiesCard -type-1 d-block rounded-4">
      <div className="citiesCard__image ratio ratio-3:4">
        <img src={image} alt={city} style={{ objectFit: "cover" }} />
      </div>

      <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
        <div className="citiesCard__bg"></div>

        <div className="citiesCard__top">
          <div className="text-14 text-white">
            14 Hotel - 22 Cars - 18 Tours - 95 Activity
          </div>
        </div>

        <div className="citiesCard__bottom">
          <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
            {city}
          </h4>
        </div>
      </div>
    </div>
  )
}