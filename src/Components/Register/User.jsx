import { assets } from "../../assets/assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        number: "",
        email: "",
        state: "",
        city: "",
        password: "",
        confirmpassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Form Submitted Successfully");
    };

    return (

        <section className="py-5 bg-primary-subtle  " style={{ height: "100vh" }}>

            <div className="container-fluid px-4">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-lg-5 mb-5 mb-lg-0 text-black">

                        <h1 className="fw-bold mb-3">
                            Super Charge your business by <br />
                            making your growth partner !
                        </h1>

                        <p className="mb-4 text-danger fs-5 fw-bold">
                            Trusted by over 45,000 travel agents worldwide
                        </p>

                        <div className="row text-center">

                            <div className="col-4">
                                <i className="fa-solid fa-earth-europe fs-2"></i>
                                <h3 className="fw-bold">80</h3>
                                <p className="fw-bold text-dark">Countries</p>
                            </div>

                            <div className="col-4">
                                <i className="fa-solid fa-hotel fs-2"></i>
                                <h3 className="fw-bold">43,000+</h3>
                                <p className="fw-bold text-dark">Hotels</p>
                            </div>

                            <div className="col-4">
                                <i className="fa-solid fa-city fs-2"></i>
                                <h3 className="fw-bold">800+</h3>
                                <p className="fw-bold text-dark">Cities</p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="col-lg-5 ms-lg-auto">

                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4 p-lg-5">

                                <h4 className="fw-bold mb-3">
                                    Sign in or create an account
                                </h4>

                                <p className="mb-4">
                                    Already have an account?{" "}
                                    <NavLink to="/ClickHere" className="text-primary">
                                        Log in
                                    </NavLink>
                                </p>

                                {/* FORM */}
                                <form onSubmit={handleSubmit}>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name="firstname"
                                                value={formData.firstname}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                name="lastname"
                                                value={formData.lastname}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                name="number"
                                                maxLength="10"
                                                value={formData.number}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <select
                                                className="form-select"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select State</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="West Bengal">West Bengal</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Kerala">Kerala</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <select
                                                className="form-select"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select City</option>
                                                <option value="Puri">Puri</option>
                                                <option value="Bhubaneswar">Bhubaneswar</option>
                                                <option value="Cuttack">Cuttack</option>
                                                <option value="Bhadrak">Bhadrak</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Jaipur">Jaipur</option>
                                                <option value="Lucknow">Lucknow</option>
                                                <option value="Kanpur">Kanpur</option>
                                                <option value="Tokyo">Tokyo</option>
                                                <option value="Paris">Paris</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name="confirmpassword"
                                                value={formData.confirmpassword}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-2"
                                    >
                                        Sign Up
                                    </button>

                                </form>

                                <p className="text-center mt-3 small">
                                    By signing up, you agree to our Terms & Privacy Policy.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default User;