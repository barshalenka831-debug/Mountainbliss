import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <section
            className="position-relative d-flex align-items-center"
            style={{
                minHeight: "100vh",
                backgroundImage: `url(${assets.Slider})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            ></div>

            <div className="container position-relative z-1">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6 col-md-12 text-white mb-4 mb-lg-0">
                        <h5 className="text-warning">
                            Hotels and homes across 800 cities, 24+ countries
                        </h5>

                        <h2 className="fw-bold mt-3">
                            There’s a smarter way to Hotel around
                        </h2>

                        <p className="mt-3 fw-500 text-light">
                            Sign up with your phone number and get exclusive access to
                            discounts and savings on OYO stays and with our many travel
                            partners.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="col-lg-5 col-md-12 offset-lg-1">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">

                                <h5 className="text-danger text-center mb-3">
                                    Sign up & Get Offers
                                </h5>

                                <h4 className="fw-bold text-center">Login / Signup</h4>

                                <p className="text-muted text-center small">
                                    Please enter your phone number to continue
                                </p>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">+91</span>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter phone number"
                                        maxLength="10"
                                    />
                                </div>

                                <button className="btn btn-danger w-100 mb-3">
                                    Continue
                                </button>

                                <p className="text-center small text-primary">
                                    Prefer to Sign in with password instead?
                                    <NavLink to="/ClickHere" className="text-danger fw-500">Click here </NavLink>
                                </p>


                                <hr />

                                <p className="text-center">Or sign in as</p>

                                <div className="d-flex justify-content-center gap-4 pb-4">
                                    <NavLink to="/User" className="text-decoration-none fw-500 text-dark">
                                        Travel Agent <i class="fa-solid fa-angle-right"></i>
                                    </NavLink>
                                    <span>|</span>
                                    <NavLink to="/" className="text-decoration-none fw-500 text-dark">
                                        Customer <i class="fa-solid fa-angle-right"></i>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Register;