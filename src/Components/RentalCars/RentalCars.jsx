import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import CarDetails from "./CarDetails"
const RentalCars = () => {

  const [openLocation, setOpenLocation] = useState(false)
  const [closeLocation, setCloseLocation] = useState(false)
  const [location, setLocation] = useState("City or Airport")
  const [droplocation, setDroplocation] = useState("City or Airport")

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const [openDate, setOpenDate] = useState(false)
  const [openDropDate, setOpenDropDate] = useState(false)

  const [openGuests, setOpenGuests] = useState(false)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(1)

  return (
    <>
      <Navbar variant="dark" />
      <section className="pt-60">
        <div className="container">
          <div className="text-center mb-4 pt-4">
            <h1 className="fw-600"> Rental Cars</h1>
          </div>

          <div className="mainSearch border-light bg-white p-3 rounded-4">

            <div className="row g-3 align-items-end">

              {/* PICKUP LOCATION */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="position-relative">

                  <div onClick={() => setOpenLocation(!openLocation)} style={{ cursor: "pointer" }}>
                    <h6>Pick up location</h6>
                    <div className="text-muted">{location}</div>
                  </div>

                  {openLocation && (
                    <div className="shadow-2 bg-white px-20 py-20 rounded-4 position-absolute w-100 mt-2" style={{ zIndex: 1000 }}>                      <PickupOption city="London" country="United Kingdom" setLocation={setLocation} close={() => setOpenLocation(false)} />
                      <PickupOption city="New York" country="United States" setLocation={setLocation} close={() => setOpenLocation(false)} />
                      <PickupOption city="Paris" country="France" setLocation={setLocation} close={() => setOpenLocation(false)} />
                      <PickupOption city="Santorini" country="Greece" setLocation={setLocation} close={() => setOpenLocation(false)} />
                    </div>
                  )}

                </div>
              </div>

              {/* DROP LOCATION */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="position-relative">

                  <div onClick={() => setCloseLocation(!closeLocation)} style={{ cursor: "pointer" }}>
                    <h6>Drop off location</h6>
                    <div className="text-muted">{droplocation}</div>
                  </div>

                  {closeLocation && (
                    <div className="shadow-2 bg-white px-20 py-20 rounded-4 position-absolute w-100 mt-2" style={{ zIndex: 1000 }}>                      <DropoffOption city="London" country="United Kingdom" setLocation={setDroplocation} close={() => setCloseLocation(false)} />
                      <DropoffOption city="New York" country="United States" setLocation={setDroplocation} close={() => setCloseLocation(false)} />
                      <DropoffOption city="Paris" country="France" setLocation={setDroplocation} close={() => setCloseLocation(false)} />
                      <DropoffOption city="Madrid" country="Spain" setLocation={setDroplocation} close={() => setCloseLocation(false)} />
                    </div>
                  )}

                </div>
              </div>

              {/* PICKUP DATE */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">

                <div className="position-relative">

                  <div onClick={() => setOpenDate(!openDate)} style={{ cursor: "pointer" }}>
                    <h6>Pick up</h6>
                    <div className="text-muted">
                      {checkIn ? checkIn : "Select date"}
                    </div>
                  </div>

                  {openDate && (
                    <div className="shadow-2 bg-white px-20 py-20 rounded-4 position-absolute w-100 mt-2" style={{ zIndex: 1000 }}>                      <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                    </div>
                  )}

                </div>

              </div>

              {/* DROP DATE */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">

                <div className="position-relative">

                  <div onClick={() => setOpenDropDate(!openDropDate)} style={{ cursor: "pointer" }}>
                    <h6>Drop off</h6>
                    <div className="text-muted">
                      {checkOut ? checkOut : "Select date"}
                    </div>
                  </div>

                  {openDropDate && (
                    <div className="shadow-2 bg-white px-20 py-20 rounded-4 position-absolute w-100 mt-2" style={{ zIndex: 1000 }}>                      <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                    </div>
                  )}

                </div>

              </div>

              {/* PASSENGERS */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">

                <div className="position-relative">

                  <div onClick={() => setOpenGuests(!openGuests)} style={{ cursor: "pointer" }}>
                    <h6>Passengers (optional)</h6>
                    <div className="text-muted">
                      {adults} adults • {children} children • {rooms} rooms
                    </div>
                  </div>

                  {openGuests && (
                    <div className="shadow bg-white p-3 rounded position-absolute w-100">

                      <CounterRow title="Adults" count={adults} setCount={setAdults} min={1} />

                      <hr />

                      <CounterRow title="Children" count={children} setCount={setChildren} min={0} />

                      <hr />

                      <CounterRow title="Rooms" count={rooms} setCount={setRooms} min={1} />

                    </div>
                  )}

                </div>

              </div>

              {/* SEARCH BUTTON */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <button className="btn btn-warning w-100 py-2">
                  🔍 Search
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>
      <CarDetails />

    </>
  )
}

export default RentalCars


const PickupOption = ({ city, country, setLocation, close }) => (
  <div
    style={{ padding: "10px", cursor: "pointer" }}
    onClick={() => {
      setLocation(city)
      close()
    }}
  >
    <i className="fa-solid fa-location-dot"></i>
    {city} — {country}
  </div>
)

const DropoffOption = ({ city, country, setLocation, close }) => (
  <div
    style={{ padding: "10px", cursor: "pointer" }}
    onClick={() => {
      setLocation(city)
      close()
    }}
  >
    <i className="fa-solid fa-location-dot"></i>
    {city} — {country}
  </div>
)
const CounterRow = ({ title, count, setCount, min }) => (
  <div className="d-flex justify-content-between align-items-center">

    <span>{title}</span>

    <div className="d-flex align-items-center gap-2">

      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => count > min && setCount(count - 1)}
      >
        -
      </button>

      <span>{count}</span>

      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

    </div>

  </div>

)