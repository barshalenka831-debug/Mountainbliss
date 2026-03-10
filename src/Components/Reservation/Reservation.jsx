import Navbar from "../Navbar/Navbar"
const Reservation = () => {
    return (
        <div>
            <Navbar variant="dark" />
            <section className="container hotellist">
                <div className="container">
                    <div className="row x-gap-40 y-gap-30 items-center">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500">1
                                    <i className="icon-check text-16 text-white"></i>
                                </div>
                                <div className="text-18 fw-500 ml-10">Your selection</div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="w-full h-1 bg-border"></div>
                        </div>

                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500">2</div>
                                <div className="text-18 fw-500 ml-10">Your details</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="w-full h-1 bg-border"></div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500">3</div>
                                <div className="text-18 fw-500 ml-10">Final step</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default Reservation
