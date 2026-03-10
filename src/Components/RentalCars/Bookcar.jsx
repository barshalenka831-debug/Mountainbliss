import { useState } from "react"
import { assets } from "../../assets/assets"
import Navbar from "../Navbar/Navbar"
import Subscribe from "../Footer/Subscribe"
import Footer from "../Footer/Footer"

const Bookcar = () => {
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
    const cars = [
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },
        {
            Image: assets.car1,
            Name: "Mercedes-Benz E-Class",
            Price: "$699"
        },

    ]
    return (
        <div>
            <Navbar variant="dark" />
            <section className="layout-pt-md layout-pb-lg  mt-30">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-xl-3 col-lg-4 lg:d-none">
                            <aside className="sidebar y-gap-40">
                                <div className="sidebar__item -no-border">
                                    <div className="px-20 py-20 bg-white border-light rounded-4">
                                        <h5 className="text-18 fw-500 mb-10">Search Rental</h5>

                                        <div className="row y-gap-20 pt-20">
                                            <div className="col-12">
                                                <div className="px-20 py-10 bg-white border-light rounded-4">

                                                    <div className="searchMenu-loc  js-form-dd js-liverSearch">

                                                        <div data-x-dd-click="searchMenu-loc">

                                                            <div className="text-15 text-light-1 ls-2 lh-16">

                                                                <div className="position-relative">

                                                                    <div onClick={() => setOpenLocation(!openLocation)} style={{ cursor: "pointer" }}>
                                                                        <h4 className="text-15 fw-500 ls-2 lh-16">Pick up location</h4>
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
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="px-20 py-10 bg-white border-light rounded-4">

                                                    <div className="searchMenu-loc  js-form-dd js-liverSearch">

                                                        <div data-x-dd-click="searchMenu-loc">

                                                            <div className="text-15 text-light-1 ls-2 lh-16">
                                                                <div className="position-relative">

                                                                    <div onClick={() => setCloseLocation(!closeLocation)} style={{ cursor: "pointer" }}>
                                                                        <h4 className="text-15 fw-500 ls-2 lh-16">Drop off location</h4>
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
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="px-20 py-10 bg-white border-light rounded-4">

                                                    <div className="searchMenu-date  js-form-dd js-calendar js-calendar-el">

                                                        <div data-x-dd-click="searchMenu-date">

                                                            <div className="capitalize text-15 text-light-1 ls-2 lh-16">
                                                                <div className="position-relative">

                                                                    <div onClick={() => setOpenDate(!openDate)} style={{ cursor: "pointer" }}>
                                                                        <h4 className="text-15 fw-500 ls-2 lh-16">Pick up</h4>
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
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="px-20 py-10 bg-white border-light rounded-4">

                                                        <div className="searchMenu-date  js-form-dd js-calendar js-calendar-el">

                                                            <div data-x-dd-click="searchMenu-date">

                                                                <div className="capitalize text-15 text-light-1 ls-2 lh-16">
                                                                    <div className="position-relative">

                                                                        <div onClick={() => setOpenDropDate(!openDropDate)} style={{ cursor: "pointer" }}>
                                                                            <h4 className="text-15 fw-500 ls-2 lh-16">Drop off</h4>
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
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="px-20 py-10 bg-white border-light rounded-4">

                                                        <div className="searchMenu-guests  js-form-dd js-form-counters">

                                                            <div data-x-dd-click="searchMenu-guests">

                                                                <div className="text-15 text-light-1 ls-2 lh-16">
                                                                    <div className="position-relative">

                                                                        <div onClick={() => setOpenGuests(!openGuests)} style={{ cursor: "pointer" }}>
                                                                            <h4 className="text-15 fw-500 ls-2 lh-16">Passenger (optional)</h4>
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
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-warning w-100 py-2">
                                                        🔍 Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar__item -no-border">
                                        <h5 className="text-18 fw-500 mb-3">Location (Heathrow Airport)</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Airport (meet &amp; greet)</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Airport (shuttle) </div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item mt-3">
                                        <h5 className="text-18 fw-500  mt-2">Car Category</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Small</div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>
                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Medium</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Large</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Premium</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="text-15 ml-10">SUV</div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__item mt-2">
                                        <h5 className="text-18 fw-500 mb-10 mt-2">Price</h5>
                                        <div className="row x-gap-10 y-gap-30">
                                            <div className="col-12">
                                                <div className="js-price-rangeSlider">
                                                    <div className="text-14 fw-500"></div>

                                                    <div className="d-flex justify-between mb-20">
                                                        <div className="text-15 text-dark-1">
                                                            <input type="range"  style={{width:"200px"}}/>
                                                        </div>
                                                    </div>

                                                    <div className="px-5">
                                                        <div className="js-slider"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Supplier</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Avis</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Budget</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Sixt</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Europcar</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center mb-2">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10 ">Enterprise</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10 mt-2">Car Specifications</h5>
                                        <div className="sidebar-checkbox">
                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="text-15 ml-10">With air conditioning</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Automatic transmission</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Manual transmission</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">2 doors</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center mb-2">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">4 doors</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10 mt-2">Mileage/Kilometres</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Limited</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center mb-2">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="text-15 ml-10 ">Unlimited</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Transmission</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Automatic</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center mb-2">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Manual</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Fuel Policy</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Full to full</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="col-xl-9 col-lg-8">
                            <div className="row y-gap-10 items-center justify-between">
                                <div className="col-auto">
                                    <div className="text-18"><span className="fw-500">3,269 properties</span> in Europe</div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-auto">
                                            <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                                <i className="fa-solid fa-up-down text-14 mr-10"></i>
                                                Sort
                                            </button>
                                        </div>

                                        <div className="col-auto d-none lg:d-block">
                                            <button data-x-click="filterPopup" className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                                <i className="icon-up-down text-14 mr-10"></i>
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="filterPopup bg-white" data-x="filterPopup" data-x-toggle="-is-active">
                                <aside className="sidebar -mobile-filter">
                                    <div className="-icon-close">
                                        <i className="icon-close"></i>
                                    </div>

                                    <div className="sidebar__item -no-border">
                                        <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                           
                                                        </div>

                                                        <div className="text-15 ml-10">Airport (meet &amp; greet)</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Airport (shuttle) </div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Car Category</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Small</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Medium</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Large</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Premium</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">SUV</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item pb-30">
                                        <h5 className="text-18 fw-500 mb-10">Price</h5>
                                        <div className="row x-gap-10 y-gap-30">
                                            <div className="col-12">
                                                <div className="js-price-rangeSlider">
                                                    <div className="text-14 fw-500"></div>

                                                    <div className="d-flex justify-between mb-20">
                                                        <div className="text-15 text-dark-1">
                                                            <span className="js-lower"></span>
                                                            -
                                                            <span className="js-upper"></span>
                                                        </div>
                                                    </div>

                                                    <div className="px-5">
                                                        <div className="js-slider"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Supplier</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Avis</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Budget</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Sixt</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Europcar</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Enterprise</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10">Car Specifications</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">With air conditioning</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Automatic transmission</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Manual transmission</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$21</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">2 doors</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$78</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between ">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center ">
                                                        <div className="form-checkbox  ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>
                                                        <div className="text-15 ml-10 ">4 doors</div>
                                                    </div>
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$679</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item">
                                        <h5 className="text-18 fw-500 mb-10 mt-2">Mileage/Kilometres</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Limited</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Unlimited</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item ">
                                        <h5 className="text-18 fw-500 mb-10 mt-2 ">Transmission</h5>
                                        <div className="sidebar-checkbox">

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Automatic</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Manual</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$45</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="sidebar__item ">
                                        <h5 className="text-18 fw-500 mb-10 ">Fuel Policy</h5>
                                        <div className="sidebar-checkbox">
                                            <div className="row y-gap-10 items-center justify-between">
                                                <div className="col-auto">

                                                    <div className="d-flex items-center">
                                                        <div className="form-checkbox ">
                                                            <input type="checkbox" name="name" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check"></div>
                                                            </div>
                                                        </div>

                                                        <div className="text-15 ml-10">Full to full</div>

                                                    </div>

                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 text-light-1">$92</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </aside>
                            </div>

                            <div className="mt-30 mb-30 border-top-light"></div>

                            <div className="row y-gap-20">

                                <div className="row">
                                    {cars.map((car, index) => (
                                        <div key={index} className="col-lg-4 col-sm-6">
                                            <div className="carCard -type-1 d-block rounded-4">

                                                <div className="carCard__image">
                                                    <div className="cardImage ratio border-light ratio-6:5">
                                                        <div className="cardImage__content">
                                                            <img
                                                                className="rounded-4 col-12 border"
                                                                src={car.Image}
                                                                alt={car.CarName}
                                                            />
                                                        </div>

                                                        <div className="cardImage__wishlist">
                                                            <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                                <i className="fa-regular fa-heart text-12"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="carCard__content mt-10">
                                                    <div className="d-flex items-center lh-14 mb-2">
                                                        <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                                        <div className="text-14 text-light-1 uppercase">Luxury</div>
                                                    </div>

                                                    <h4 className="text-dark-1 text-18 lh-16 fw-500">
                                                        {car.CarName}
                                                        <span className="text-15 text-light-1 fw-400"> or similar</span>
                                                    </h4>

                                                    <div className="row x-gap-20 y-gap-10 items-center pt-2">
                                                        <div className="col-auto">
                                                            <div className="d-flex items-center text-14 text-dark-1">
                                                                <i className="fa-solid fa-user mr-10"></i>
                                                                <div className="lh-14">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="d-flex items-center text-14 text-dark-1">
                                                                <i className="fa-solid fa-person-walking-luggage mr-10"></i>
                                                                <div className="lh-14">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="d-flex items-center text-14 text-dark-1">
                                                                <i className="fa-solid fa-car me-2"></i>
                                                                <div className="lh-14">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="d-flex items-center text-14 text-dark-1">
                                                                <i className="fa-solid fa-gauge-high mr-10"></i>
                                                                <div className="lh-14">Unlimited</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex items-center mt-20">
                                                        <div className="flex-center bg-yellow-1 rounded-4 size-30 text-12 fw-600 text-dark-1">
                                                            4.8
                                                        </div>
                                                        <div className="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                                        <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                                                    </div>

                                                    <div className="mt-2">
                                                        <div className="text-light-1">
                                                            <span className="fw-500 text-dark-1">{car.price}</span> total
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Bookcar

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