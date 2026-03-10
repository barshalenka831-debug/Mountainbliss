import { assets } from "../../assets/assets"
import AOS from "aos"
import "aos/dist/aos.css"
const Deals = () => {
  return (
    <div>
      <section className="layout-pt-md layout-pb-md "data-aos="fade-up">
      <div className="container">
        <div className="row y-gap-20">
          <div  className="col-md-6">

            <div className="ctaCard -type-1 rounded-4 ">
              <div className="ctaCard__image ratio ratio-63:55">
                <img className="img-ratio js-lazy" src={assets.experience}alt="image"/>
              </div>

              <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">


                <h4 className="text-40 lg:text-26 text-white">Things to do on<br/> your trip</h4>

                <div className="d-inline-block mt-30">
                  <a className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1">Experiences</a>
                </div>
              </div>
            </div>

          </div>

          <div  className="col-md-6">

            <div className="ctaCard -type-1 rounded-4 ">
              <div className="ctaCard__image ratio ratio-63:55">
                <img className="img-ratio js-lazy" src={assets.experience1}alt="image"/>
              </div>

              <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">

                <div className="text-15 fw-500 text-white mb-10">Enjoy Summer Deals</div>


                <h4 className="text-40 lg:text-26 text-white">Up to 70% Discount!</h4>

                <div className="d-inline-block mt-30">
                  <a className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Deals
