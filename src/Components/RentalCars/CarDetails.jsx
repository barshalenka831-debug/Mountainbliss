import { assets } from "../../assets/assets"

const CarDetails = () => {
    return (

        <section className="layout-pt-md layout-pb-lg">
            <div className="container">
                <div className="row y-gap-30">
                    <div className="col-xl-3 col-lg-4 lg:d-none">
                        <aside className="sidebar y-gap-40">
                            <div className="sidebar__item -no-border">
                                <div className="flex-center ratio ratio-15:9 js-lazy position-relative">

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.3091685860454!2d85.82517647523754!3d20.323760081154944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzI1LjUiTiA4NcKwNDknMzkuOSJF!5e1!3m2!1sen!2sin!4v1772712070262!5m2!1sen!2sin"
                                        style={{ width: "100%", height: "450px", border: "0" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                    ></iframe>

                                    <i className="fa-solid fa-map-location"></i>   Show on map


                                </div>
                            </div>
                            <div className="sidebar__item -no-border">
                                <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
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
                                                    <span>$200 - $1300</span><br />
                                                    <input type="range" style={{ width: "250px" }} />
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

                                    <div className="row y-gap-10 items-center justify-between">
                                        <div className="col-auto">

                                            <div className="d-flex items-center">
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
                                <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
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

                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-8">
                        <div class="row y-gap-10 items-center justify-between">
                            <div class="col-auto">
                                <div class="text-18"><span class="fw-500">3,269 properties</span> in Europe</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="row x-gap-20 y-gap-20">
                                <div class="col-auto">
                                    <button class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                        <i className="fa-solid fa-up-down text-14 mr-10"></i>
                                        Sort
                                    </button>
                                </div>

                                <div class="col-auto d-none lg:d-block">
                                    <button data-x-click="filterPopup" class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                        <i class="icon-up-down text-14 mr-10"></i>
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <div className="col-xl-9 col-lg-8">
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
                                <div data-x-click="filterPopup" className="-icon-close">
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

                                        <div className="row y-gap-10 items-center justify-between">
                                            <div className="col-auto">

                                                <div className="d-flex items-center">
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
                                    <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
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

                            </aside>
                        </div>

                        <div className="mt-30"></div>

                        <div className="row y-gap-30">

                            <div className="col-12">

                                <div className="border-top-light pt-30">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-md-auto">
                                            <div className="relative d-flex">

                                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                                    <div className="cardImage__content">

                                                        <img className="rounded-4 col-12" src={assets.car1} alt="image"/>


                                                    </div>

                                                    <div className="cardImage__wishlist">
                                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                            <i className="icon-heart text-12"></i>
                                                        </button>
                                                    </div>


                                                </div>


                                                <div className="absolute h-full col-12 d-flex items-end px-10 py-15">
                                                    <img src={assets.car2}alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="d-flex flex-column h-full justify-between">
                                                <div className="">
                                                    <div className="row x-gap-5 items-center">
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="size-3 rounded-full bg-light-1"></div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">SUV</div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-18 lh-16 fw-500 mt-5">
                                                        Mercedes-Benz E-className <span className="text-15 text-light-1">or similar</span>
                                                    </h3>
                                                </div>

                                                <div className="col-lg-7 mt-20">
                                                    <div className="row y-gap-5">

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-user-2"></i>
                                                                <div className="text-14 ml-10">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-luggage"></i>
                                                                <div className="text-14 ml-10">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Unlimited</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Air conditioning</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Full to full</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-20">
                                                    <div className="d-flex items-center">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                    </div>

                                                    <div className="d-flex items-center mt-5">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-right md:text-left">
                                            <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                                                <div className="col-auto">
                                                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                                                    <div className="text-14 lh-14 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">4.8</div>
                                                </div>
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">US$72</div>
                                            <div className="text-14 text-light-1 mt-5">Total</div>


                                            <a href="#" className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24">
                                                View Detail <div className="icon-arrow-top-right ml-15"></div>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">

                                <div className="border-top-light pt-30">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-md-auto">
                                            <div className="relative d-flex">

                                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                                    <div className="cardImage__content">


                                                        <div className="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                                            <div className="swiper-wrapper">

                                                                <div className="swiper-slide">
                                                                    <img className="col-12" src={assets.car3}alt="image" />
                                                                </div>

                                                                <div className="swiper-slide">
                                                                    <img className="col-12" src={assets.car4}alt="image" />
                                                                </div>

                                                                <div className="swiper-slide">
                                                                    <img className="col-12" src={assets.car5}alt="image" />
                                                                </div>

                                                            </div>

                                                            <div className="cardImage-slider__pagination js-pagination"></div>

                                                            <div className="cardImage-slider__nav -prev">
                                                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                                                    <i className="icon-chevron-left text-10"></i>
                                                                </button>
                                                            </div>

                                                            <div className="cardImage-slider__nav -next">
                                                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                                                    <i className="icon-chevron-right text-10"></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="cardImage__wishlist">
                                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                            <i className="icon-heart text-12"></i>
                                                        </button>
                                                    </div>


                                                </div>


                                                <div className="absolute h-full col-12 d-flex items-end px-10 py-15">
                                                    <img src={assets.car6} alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="d-flex flex-column h-full justify-between">
                                                <div className="">
                                                    <div className="row x-gap-5 items-center">
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="size-3 rounded-full bg-light-1"></div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">SUV</div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-18 lh-16 fw-500 mt-5">
                                                        Mercedes-Benz E-className <span className="text-15 text-light-1">or similar</span>
                                                    </h3>
                                                </div>

                                                <div className="col-lg-7 mt-20">
                                                    <div className="row y-gap-5">

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-user-2"></i>
                                                                <div className="text-14 ml-10">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-luggage"></i>
                                                                <div className="text-14 ml-10">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Unlimited</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Air conditioning</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Full to full</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-20">
                                                    <div className="d-flex items-center">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                    </div>

                                                    <div className="d-flex items-center mt-5">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-right md:text-left">
                                            <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                                                <div className="col-auto">
                                                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                                                    <div className="text-14 lh-14 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">4.8</div>
                                                </div>
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">US$72</div>
                                            <div className="text-14 text-light-1 mt-5">Total</div>


                                            <a href="#" className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24">
                                                View Detail <div className="icon-arrow-top-right ml-15"></div>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">

                                <div className="border-top-light pt-30">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-md-auto">
                                            <div className="relative d-flex">

                                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                                    <div className="cardImage__content">

                                                        <img className="rounded-4 col-12" src={assets.car8}alt="image" />


                                                    </div>

                                                    <div className="cardImage__wishlist">
                                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                            <i className="icon-heart text-12"></i>
                                                        </button>
                                                    </div>


                                                </div>


                                                <div className="absolute h-full col-12 d-flex items-end px-10 py-15">
                                                    <img src={assets.car2} alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="d-flex flex-column h-full justify-between">
                                                <div className="">
                                                    <div className="row x-gap-5 items-center">
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="size-3 rounded-full bg-light-1"></div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">SUV</div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-18 lh-16 fw-500 mt-5">
                                                        Mercedes-Benz E-className <span className="text-15 text-light-1">or similar</span>
                                                    </h3>
                                                </div>

                                                <div className="col-lg-7 mt-20">
                                                    <div className="row y-gap-5">

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-user-2"></i>
                                                                <div className="text-14 ml-10">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-luggage"></i>
                                                                <div className="text-14 ml-10">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Unlimited</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Air conditioning</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Full to full</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-20">
                                                    <div className="d-flex items-center">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                    </div>

                                                    <div className="d-flex items-center mt-5">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-right md:text-left">
                                            <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                                                <div className="col-auto">
                                                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                                                    <div className="text-14 lh-14 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">4.8</div>
                                                </div>
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">US$72</div>
                                            <div className="text-14 text-light-1 mt-5">Total</div>


                                            <a href="#" className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24">
                                                View Detail <div className="icon-arrow-top-right ml-15"></div>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">

                                <div className="border-top-light pt-30">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-md-auto">
                                            <div className="relative d-flex">

                                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                                    <div className="cardImage__content">

                                                        <img className="rounded-4 col-12" src={assets.car2}alt="image" />


                                                    </div>

                                                    <div className="cardImage__wishlist">
                                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                            <i className="icon-heart text-12"></i>
                                                        </button>
                                                    </div>


                                                </div>


                                                <div className="absolute h-full col-12 d-flex items-end px-10 py-15">
                                                    <img src={assets.car3} alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="d-flex flex-column h-full justify-between">
                                                <div className="">
                                                    <div className="row x-gap-5 items-center">
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="size-3 rounded-full bg-light-1"></div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">SUV</div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-18 lh-16 fw-500 mt-5">
                                                        Mercedes-Benz E-className <span className="text-15 text-light-1">or similar</span>
                                                    </h3>
                                                </div>

                                                <div className="col-lg-7 mt-20">
                                                    <div className="row y-gap-5">

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-user-2"></i>
                                                                <div className="text-14 ml-10">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-luggage"></i>
                                                                <div className="text-14 ml-10">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Unlimited</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Air conditioning</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Full to full</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-20">
                                                    <div className="d-flex items-center">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                    </div>

                                                    <div className="d-flex items-center mt-5">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-right md:text-left">
                                            <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                                                <div className="col-auto">
                                                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                                                    <div className="text-14 lh-14 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">4.8</div>
                                                </div>
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">US$72</div>
                                            <div className="text-14 text-light-1 mt-5">Total</div>


                                            <a href="#" className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24">
                                                View Detail <div className="icon-arrow-top-right ml-15"></div>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">

                                <div className="border-top-light pt-30">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-md-auto">
                                            <div className="relative d-flex">

                                                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                                                    <div className="cardImage__content">

                                                        <img className="rounded-4 col-12" src={assets.car6}alt="image" />


                                                    </div>

                                                    <div className="cardImage__wishlist">
                                                        <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                            <i className="icon-heart text-12"></i>
                                                        </button>
                                                    </div>


                                                </div>


                                                <div className="absolute h-full col-12 d-flex items-end px-10 py-15">
                                                    <img src={assets.car7} alt="image" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="d-flex flex-column h-full justify-between">
                                                <div className="">
                                                    <div className="row x-gap-5 items-center">
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">Heathrow Airport</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="size-3 rounded-full bg-light-1"></div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-14 text-light-1">SUV</div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-18 lh-16 fw-500 mt-5">
                                                        Mercedes-Benz E-className <span className="text-15 text-light-1">or similar</span>
                                                    </h3>
                                                </div>

                                                <div className="col-lg-7 mt-20">
                                                    <div className="row y-gap-5">

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-user-2"></i>
                                                                <div className="text-14 ml-10">4</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-luggage"></i>
                                                                <div className="text-14 ml-10">1</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Automatic</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Unlimited</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-transmission"></i>
                                                                <div className="text-14 ml-10">Air conditioning</div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="d-flex items-center">
                                                                <i className="icon-speedometer"></i>
                                                                <div className="text-14 ml-10">Full to full</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-20">
                                                    <div className="d-flex items-center">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 ml-10">Free Amendments</div>
                                                    </div>

                                                    <div className="d-flex items-center mt-5">
                                                        <i className="icon-check text-10"></i>
                                                        <div className="text-14 fw-500 text-green-2 ml-10">Free Cancellation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-auto text-right md:text-left">
                                            <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                                                <div className="col-auto">
                                                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                                                    <div className="text-14 lh-14 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">4.8</div>
                                                </div>
                                            </div>

                                            <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">US$72</div>
                                            <div className="text-14 text-light-1 mt-5">Total</div>


                                            <a href="#" className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24">
                                                View Detail <div className="icon-arrow-top-right ml-15"></div>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="border-top-light mt-30 pt-30">
                            <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div className="col-auto md:order-1">
                                    <button className="button -blue-1 size-40 rounded-full border-light">
                                        <i className="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div className="col-md-auto md:order-3">
                                    <div className="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div className="col-auto">

                                            <div className="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div className="text-center mt-30 md:mt-10">
                                        <div className="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div className="col-auto md:order-2">
                                    <button className="button -blue-1 size-40 rounded-full border-light">
                                        <i className="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default CarDetails
