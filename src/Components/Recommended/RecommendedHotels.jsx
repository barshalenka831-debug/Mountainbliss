import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import HotelCard from "./RecommendedCard"
import Subscribe from "../Footer/Subscribe"
import Footer from "../Footer/Footer"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Best from "./Best"
import { assets } from "../../assets/assets"

const RecommendedHotels = () => {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">

        {/* Section Header */}
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title fw-bold ">Recommended</h2>
              <p className="sectionTitle__text fs-5">
                Interdum et malesuada fames ac ante ipsum
              </p>
            </div>
          </div>
        </div>

        {/* Main Slider */}
        <div className="pt-40 sm:pt-20 position-relative">

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              nextEl: ".hotels-next",
              prevEl: ".hotels-prev",
            }}
            pagination={{
              el: ".hotels-pagination",
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >

            <SwiperSlide>
              <HotelCard className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500"
                images={assets.Hotel5}
                title="The Montcalm At Brewery London City"
                location="Westminster Borough, London"
                price="$699"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HotelCard
                images={assets.Hotel4}

                title="Staycity Aparthotels Deptford Bridge Station"
                location="Ciutat Vella, Barcelona"
                price="$799"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HotelCard
                images={assets.Hotel3}

                title="The Westin New York at Times Square"
                location="Manhattan, New York"
                price="$899"

              />
            </SwiperSlide>

            <SwiperSlide>
              <HotelCard
                images={assets.Hotel2}
                title="DoubleTree by Hilton Hotel New York"
                location="Vaticano Prati, Rome"
                price="$1899"

              />
            </SwiperSlide>

          </Swiper>

          {/* Bottom Navigation */}
          <div className="d-flex x-gap-15 items-center justify-center pt-40">

            <button className="hotels-prev d-flex items-center text-24 arrow-left-hover">
              <i className="icon icon-arrow-left"></i>
            </button>

            <div className="hotels-pagination pagination -dots text-border"></div>

            <button className="hotels-next d-flex items-center text-24 arrow-right-hover">
              <i className="icon icon-arrow-right"></i>
            </button>

          </div>

        </div>
      </div>
      <Best />
       <Subscribe/>
      <Footer/>
    </section>
  )
}

export default RecommendedHotels