import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import "../Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ variant = "transparent" }) => {

  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State for sticky navbar
  const [sticky, setSticky] = useState(false);


  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      className={`header js-header
        ${menuOpen ? "is-menu-opened" : ""}
        ${sticky ? "navbar-sticky" : ""}
        ${variant === "dark" ? "navbar-dark" : ""}
        ${variant === "light" ? "navbar-light" : ""}
      `}
    >
      <div
        data-anim="fade"
        className="header__container container-fluid px-3 px-lg-4"
      >
        <div className="row justify-content-between align-items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="col-6 col-lg-auto">
            <div className="d-flex items-center">

              {/* -------- Logo -------- */}
              <NavLink to="/" className="header-logo mr-20">
                <img src={assets.Logo} alt="logo icon" />
              </NavLink>


              {/* -------- Navigation Menu -------- */}
              <div
                className={`header-menu ${menuOpen ? "is-menu-active" : ""}`}
                data-x="mobile-menu"
              >

                {/* Mobile Overlay */}
                <div
                  className="mobile-overlay"
                  onClick={() => setMenuOpen(false)}
                ></div>


                <div className="header-menu__content">

                  {/* Close Button (Mobile) */}
                  <div className="mobile-menu-close d-lg-none">
                    <button
                      className="close-btn"
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>


                  <div className="mobile-bg js-mobile-bg"></div>


                  {/* -------- Menu Links -------- */}
                  <div className="menu js-navList">
                    <ul className="menu__nav text-white -is-active">

                      <li className="menu-item">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Home
                        </NavLink>
                      </li>


                      <li>
                        <NavLink
                          to="/home/Destination"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Destinations
                        </NavLink>
                      </li>


                      <li>
                        <NavLink
                          to="/hotellist"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Hotel List
                        </NavLink>
                      </li>


                      <li>
                        <NavLink
                          to="/home/aboutus"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          About Us
                        </NavLink>
                      </li>


                      <li>
                        <NavLink
                          to="/bookcar"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Car Service
                        </NavLink>
                      </li>


                      <li>
                        <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </div>


                  {/* Mobile Footer */}
                  <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer"></div>

                </div>
              </div>

            </div>
          </div>
          {/* ================= RIGHT SIDE ================= */}
          <div className="col-auto">
            <div className="d-flex items-center">

              {/* Desktop Button */}
              <div className="d-none d-lg-flex items-center ml-20 is-menu-opened-hide">
                <NavLink
                  to="/register"
                  className="button px-30 fw-400 text-14 border-white -outline-white text-white ml-20 signup"
                >
                  Sign In / Register
                </NavLink>
              </div>


              {/* Mobile Icons */}
              <div className="d-flex d-lg-none x-gap-20 items-center pl-30 text-white">

                {/* Login Icon */}
                <div>
                  <NavLink
                    to="/login"
                    className="d-flex items-center icon-user text-inherit text-22"
                  ></NavLink>
                </div>


                {/* Mobile Menu Button */}
                <div>
                  <button
                    className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;