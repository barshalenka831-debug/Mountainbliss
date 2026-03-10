import { assets } from '../../assets/assets'
import RatingCounter from './RatingCounter'

const customerSays = () => {
    return (
        <div>
            <section className="layout-pt-lg layout-pb-lg bg-blue-2">
                <div className="container">
                    <div className="row y-gap-40 justify-between">
                        <div className="col-xl-5 col-lg-6">
                            <h2 className="text-30">What our customers are<br /> saying us?</h2>
                            <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
                                amet tempor nibh finibus et. Aenean eu enim justo.</p>

                            <div className="row y-gap-30 pt-60 lg:pt-40">
                               <RatingCounter/>

                                <div className="col-sm-5 col-6">
                                    <div className="text-30 lh-15 fw-600">4.88</div>
                                    <div className="text-light-1 lh-15">Overall rating</div>

                                    <div className="d-flex gap-2 items-center pt-10">
                                        <i className="fa-solid fa-star text-blue-1 text-10"></i>
                                        <i className="fa-solid fa-star text-blue-1 text-10"></i>
                                        <i className="fa-solid fa-star text-blue-1 text-10"></i>
                                        <i className="fa-solid fa-star text-blue-1 text-10"></i>
                                        <i className="fa-solid fa-star text-blue-1 text-10"></i>
                                       

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="overflow-hidden js-testimonials-slider-3" data-scrollbar>
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="row items-center x-gap-30 y-gap-20">
                                            <div className="col-auto">
                                                <img src={assets.Team5} alt="image" className="rounded-circle" style={{height:"100px",width:"100px",objectFit:"cover",}} />
                                            </div>

                                            <div className="col-auto">
                                                <h5 className="text-16 fw-500">Annette Black</h5>
                                                <div className="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                            </div>
                                        </div>

                                        <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in Gumbet. The
                                            area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to
                                            our requests.</p>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="row items-center x-gap-30 y-gap-20">
                                            <div className="col-auto">
                                                <img src="#" data-src="img/avatars/1.png" alt="image" className="js-lazy" />
                                            </div>

                                            <div className="col-auto">
                                                <h5 className="text-16 fw-500">Annette Black</h5>
                                                <div className="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                            </div>
                                        </div>

                                        <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in Gumbet. The
                                            area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to
                                            our requests.</p>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="row items-center x-gap-30 y-gap-20">
                                            <div className="col-auto">
                                                <img src="#" data-src="img/avatars/1.png" alt="image" className="rounded-circle" />
                                            </div>

                                            <div className="col-auto">
                                                <h5 className="text-16 fw-500">Annette Black</h5>
                                                <div className="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                            </div>
                                        </div>

                                        <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in Gumbet. The
                                            area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to
                                            our requests.</p>
                                    </div>

                                </div>

                                <div className="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
                                    <div className="text-dark-1 fw-500 js-current">01</div>
                                    <div className="slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar"></div>
                                    <div className="text-dark-1 fw-500 js-all">05</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default customerSays
