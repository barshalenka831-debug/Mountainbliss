
const CarDetails = () => {
    return (
        <div>

            <section class="layout-pt-md layout-pb-lg">
                <div class="container">
                    <div class="row y-gap-30">
                        <div class="col-xl-3 col-lg-4 lg:d-none">
                            <aside class="sidebar y-gap-40">
                                <div class="sidebar__item -no-border">
                                    <div class="flex-center ratio ratio-15:9 js-lazy">
                                        <button  class="button py-15 px-24 -blue-1 bg-white text-dark-1 absolute">
                                            <i class="icon-destination text-22 mr-10"></i>
                                            Show on map
                                        </button>
                                    </div>
                                </div>

                                <div class="sidebar__item -no-border">
                                    <h5 class="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Airport (meet &amp; greet)</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Airport (shuttle) </div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Car Category</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Small</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Medium</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Large</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$21</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Premium</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$78</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">SUV</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$679</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item pb-30">
                                    <h5 class="text-18 fw-500 mb-10">Price</h5>
                                    <div class="row x-gap-10 y-gap-30">
                                        <div class="col-12">
                                            <div class="js-price-rangeSlider">
                                                <div class="text-14 fw-500"></div>

                                                <div class="d-flex justify-between mb-20">
                                                    <div class="text-15 text-dark-1">
                                                        <span class="js-lower"></span>
                                                        -
                                                        <span class="js-upper"></span>
                                                    </div>
                                                </div>

                                                <div class="px-5">
                                                    <div class="js-slider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Supplier</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Avis</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Budget</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Sixt</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$21</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Europcar</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$78</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Enterprise</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$679</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Car Specifications</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">With air conditioning</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Automatic transmission</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Manual transmission</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$21</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">2 doors</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$78</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">4 doors</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$679</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Limited</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Unlimited</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Transmission</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Automatic</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Manual</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$45</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="sidebar__item">
                                    <h5 class="text-18 fw-500 mb-10">Fuel Policy</h5>
                                    <div class="sidebar-checkbox">

                                        <div class="row y-gap-10 items-center justify-between">
                                            <div class="col-auto">

                                                <div class="d-flex items-center">
                                                    <div class="form-checkbox ">
                                                        <input type="checkbox" name="name" />
                                                        <div class="form-checkbox__mark">
                                                            <div class="form-checkbox__icon icon-check"></div>
                                                        </div>
                                                    </div>

                                                    <div class="text-15 ml-10">Full to full</div>

                                                </div>

                                            </div>

                                            <div class="col-auto">
                                                <div class="text-15 text-light-1">$92</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </aside >
                        </div>
                    </div >
                </div >

            </section >

        </div >



    )
}

export default CarDetails
