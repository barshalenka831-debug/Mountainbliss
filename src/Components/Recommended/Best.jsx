import { assets } from "../../assets/assets"

const Best = () => {
    return (
        <div>
            <section className="layout-pt-md layout-pb-lg">
                <div data-anim-wrap className="container">
                    <div className="row y-gap-20 justify-between">

                        <div className="col-lg-3 col-sm-6">

                            <div className="featureIcon -type-1 ">
                                <div className="d-flex justify-center">
                                    <img src={assets.Shield}alt="image" style={{height:"50px"}} className="js-lazy"/>
                                </div>

                                <div className="text-center mt-30">
                                    <h4 className="text-18 fw-500">Best Price Guarantee</h4>
                                    <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                        </div>

                        <div  className="col-lg-3 col-sm-6">

                            <div className="featureIcon -type-1 ">
                                <div className="d-flex justify-center">
                                    <img src={assets.onlineBooking} style={{height:"50px"}} alt="image" className="js-lazy"/>
                                </div>

                                <div className="text-center mt-30">
                                    <h4 className="text-18 fw-500">Easy & Quick Booking</h4>
                                    <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                        </div>

                        <div  className="col-lg-3 col-sm-6">

                            <div className="featureIcon -type-1 ">
                                <div className="d-flex justify-center">
                                    <img src={assets.Customerservice} style={{height:"50px"}} alt="image" className="js-lazy"/>
                                </div>

                                <div className="text-center mt-30">
                                    <h4 className="text-18 fw-500">Customer Care 24/7</h4>
                                    <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Best
