import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import AOS from "aos"
import "aos/dist/aos.css"
const RecommendedCard = ({ title, location, slider, price, images }) => {
  return (
    <div className="hotelsCard -type-1">

      <div className="hotelsCard__image " data-aos="fade-up">
        <div className="cardImage ratio ratio-1:1">
          <div className="cardImage__content">

            {slider ? (
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                className="rounded-4 overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} className="col-12" alt="hotel" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                className="rounded-4 col-12"
                src={images}
                alt="hotel"
              />
            )}

          </div>

          <div className="cardImage__wishlist">
            <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
              <i className="fa-regular fa-heart text-12"></i>
            </button>
          </div>

        </div>
      </div>

      <div className="hotelsCard__content mt-10">
        <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
          {title}
        </h4>

        <p className="text-light-1 lh-14 text-14 mt-3">{location}</p>

        <div className="d-flex items-center mt-20">
          <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
            4.8
          </div>
          <div className="text-14 text-dark-1 fw-500 ml-10">
            Exceptional
          </div>
          <div className="text-14 text-light-1 ml-10">
            3,014 reviews
          </div>
        </div>

        <div className="mt-3">
          <div className="fw-500">
            Starting from <span className="text-blue-1">{price}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RecommendedCard