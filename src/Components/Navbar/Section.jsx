import { useState } from "react"
import { assets } from "../../assets/assets"
import "../Style.css"
import Navbar from "./Navbar"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Section = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,   // animation time
      once: true        // animation happens once
    });
  }, []);
  const [openLocation, setOpenLocation] = useState(false)
  const [location, setLocation] = useState("Where are you going?")
  const [openGuests, setOpenGuests] = useState(false)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(1)
  const [openDate, setOpenDate] = useState(false)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  return (
    <>
      <Navbar />

      <section className="masthead -type-1 z-5">
        <div className="masthead__bg">
          <img src={assets.Slider} alt="image" />
        </div>

        <div className="container "data-aos="fade-up">
          <div className="row justify-center">
            <div className="col-auto">

              <div className="text-center ">
                <h1 className="text-60 text-white">
                  Find Next Place To Stay
                </h1>
                <p className="text-white mt-10">
                 Over 174,000+ hotels and homes across 35+ countries
                </p>
              </div>

              <div className="mainSearch -w-900 bg-white px-20 py-20 rounded-100 mt-40">
                <div className="button-grid items-center">

                  {/* LOCATION */}
                  <div className="px-30 position-relative">
                    <div
                      onClick={() => setOpenLocation(!openLocation)}
                      style={{ cursor: "pointer" }}
                    >
                      <h4 className="text-15 fw-500">Location</h4>
                      <div className="text-15 text-light-1">
                        {location}
                      </div>
                    </div>
                    {openLocation && (
                      <div
                        className="shadow-2 bg-white px-20 py-20 rounded-4"
                        style={{
                          position: "absolute",
                          top: "70px",
                          width: "257px",
                          zIndex: 1000
                        }}
                      >
                        <LocationOption

                          city="London"
                          country="United Kingdom"
                          setLocation={setLocation}
                          close={() => setOpenLocation(false)}

                        />

                        <LocationOption
                          city="New York"
                          country="United States"
                          setLocation={setLocation}
                          close={() => setOpenLocation(false)}
                        /><LocationOption
                          city="Paris"
                          country="France"
                          setLocation={setLocation}
                          close={() => setOpenLocation(false)}
                        />

                        <LocationOption
                          city="Santorini"
                          country="Greece"
                          setLocation={setLocation}
                          close={() => setOpenLocation(false)}
                        />
                        <LocationOption
                          city="Odisha"
                          country="Puri"
                          setLocation={setLocation}
                          close={() => setOpenLocation(false)}
                        />
                      </div>

                    )}
                  </div>

                  {/* DATE */}
                  <div className="px-30 position-relative">
                    <div
                      onClick={() => setOpenDate(!openDate)}
                      style={{ cursor: "pointer" }}
                    >
                      <h4 className="text-15 fw-500">Check in - Check out</h4>
                      <div className="text-15 text-light-1">
                        {checkIn && checkOut
                          ? `${checkIn} - ${checkOut}`
                          : "Select dates"}
                      </div>
                    </div>
                    {openDate && (
                      <div
                        className="shadow-2 bg-white px-20 py-20 rounded-4"
                        style={{
                          position: "absolute",
                          top: "70px",
                          width: "257px",
                          zIndex: 1000
                        }}
                      >
                        <div className="mb-10">
                          <label className="text-14 fw-500">Check In</label>
                          <input
                            type="date"
                            className="form-control"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>

                        <div>
                          <label className="text-14 fw-500">Check Out</label>
                          <input
                            type="date"
                            className="form-control"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                  </div>

                  {/* GUESTS */}
                  <div className="px-30 position-relative">

                    <div
                      onClick={() => setOpenGuests(!openGuests)}
                      style={{ cursor: "pointer" }}
                    >
                      <h4 className="text-15 fw-500">Guests</h4>
                      <div className="text-15 text-light-1">
                        {adults} adults - {children} children - {rooms} room
                      </div>
                    </div>

                    {openGuests && (
                      <div
                        className="shadow-2 bg-white px-30 py-30 rounded-4"
                        style={{
                          position: "absolute",
                          top: "70px",
                          width: "260px",
                          zIndex: 1000
                        }}
                      >
                        <CounterRow
                          title="Adults"
                          count={adults}
                          setCount={setAdults}
                          min={1}
                        />

                        <div className="border-top-light mt-24 mb-24"></div>

                        <CounterRow
                          title="Children"
                          count={children}
                          setCount={setChildren}
                          min={0}
                        />

                        <div className="border-top-light mt-24 mb-24"></div>

                        <CounterRow
                          title="Rooms"
                          count={rooms}
                          setCount={setRooms}
                          min={1}
                        />
                      </div>
                    )}
                  </div>

                  {/* SEARCH BUTTON */}
                  <div className="button-item">
                    <button
                      className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white">
                        <i className="fa-solid fa-magnifying-glass text-20 mr-10"></i>
                      Search
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Section


const CounterRow = ({ title, count, setCount, min }) => {
  return (
    <div className="row justify-between items-center">
      <div>
        <div className="text-15 fw-500">{title}</div>
      </div>

      <div className="d-flex items-center">

        <button
          className="button -outline-blue-1 text-blue-1 size-38 rounded-4"
          onClick={() => count > min && setCount(count - 1)}
        >
          -
        </button>

        <div className="mx-3 text-15 fw-500">
          {count}
        </div>

        <button
          className="button -outline-blue-1 text-blue-1 size-38 rounded-4"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

      </div>
    </div>

  )
}
const LocationOption = ({ city, country, setLocation, close }) => {
  return (
    <div
      style={{
        padding: "10px",
        cursor: "pointer"
      }}
      onClick={() => {
        setLocation(city)
        close()
      }}
    >
      {/* Left Side (Icon + City + Country in one line) */}
      <div className="d-flex items-center gap-10">
        <i className="fa-solid fa-location-dot text-light-1"></i>

        <span className="fw-500">{city}</span>

        <span className="text-light-1 text-14">
          — {country}
        </span>
      </div>
    </div>
  )
}
