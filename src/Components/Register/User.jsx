import { assets } from "../../assets/assets";
import { useState } from "react"
import { NavLink } from "react-router-dom";
const User = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: "",
        agree: false,
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Form Submitted:");
    };
    return (


        <section className="layout-pt-lg layout-pb-lg bg-blue-2 " style={{
            backgroundImage: `url(${assets.bgregister})`, minHeight: "100vh",backgroundSize: "cover",
                backgroundPosition: "center",opacity:"25"
        }}>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                                <div className="row y-gap-20">
                                    <div className="col-12">
                                        <h1 className="text-22 fw-500">Sign in or create an account</h1>
                                        <p className="mt-10">Already have an account?
                                            <NavLink to="/ClickHere" className="text-blue-1">Log in</NavLink></p>
                                    </div>

                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="text" required name="firstname" onChange={handleChange} value={formData.firstname} />
                                            <label className="lh-1 text-14 text-light-1">First Name</label>
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="text" required name="lastname" onChange={handleChange} value={formData.lastname} />
                                            <label className="lh-1 text-14 text-light-1">Last Name</label>
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="tel" required name="number" maxLength="10" pattern="[0-9]{10}" onChange={handleChange} value={formData.number} />
                                            <label className="lh-1 text-14 text-light-1">Phone</label>
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="text" required name="email" onChange={handleChange} value={formData.email} />
                                            <label className="lh-1 text-14 text-light-1">Email</label>
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="password" required name="password" onChange={handleChange} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                                                title="Minimum 8 characters, at least 1 letter, 1 number and 1 special character" value={formData.password} />
                                            <label className="lh-1 text-14 text-light-1">Password</label>
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <div className="form-input ">
                                            <input type="password" required name="confirmpassword" onChange={handleChange} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                                                title="Minimum 8 characters, at least 1 letter, 1 number and 1 special character" value={formData.confirmpassword} />
                                            <label className="lh-1 text-14 text-light-1">Confirm Password</label>
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <div className="d-flex ">

                                            <div className="text-15 lh-15 text-light-1 ml-10">Email me exclusive Agoda promotions. I can opt out later as stated in the Privacy Policy.</div>

                                        </div>

                                    </div>

                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                                        >
                                            Sign In
                                        </button>

                                        {/* <input type="submit" className="button py-20 -dark-1 bg-blue-1 text-white">
                                            Sign In <div className="icon-arrow-top-right ml-15"></div>
                                        </input> */}

                                    </div>
                                </div>

                                <div className="row y-gap-20 pt-30">
                                    <div className="col-12">
                                        <div className="text-center px-30">By signing in, I agree to GoTrip Terms of Use and Privacy Policy.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section >

    )
}

export default User
