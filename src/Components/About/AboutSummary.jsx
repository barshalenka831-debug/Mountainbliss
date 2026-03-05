import React from 'react'
import { assets } from '../../assets/assets'
import Counter1 from './Counter/Counter1'
import Counter2 from './Counter/Counter2'
import Counter3 from './Counter/Counter3'
import Counter4 from './Counter/Counter4'

const AboutSummary = () => {
  return (
    <div>
      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-lg-5">
              <h2 className="text-50 fw-600">About GoTrip.com</h2>
              <p className=" fs-4 mt-3">These popular destinations have a lot to offer</p>

              <p className="text-dark-1 mt-6 lg:mt-40 md:mt-20 fs-5 fw-bold">
                London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that’s the envy of other global superpowers.
                <br/><br/>
                  Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge.
                </p>
                </div>

                <div className="col-lg-6">
                  <img src={assets.AboutPage} alt="image" className="rounded-4" />
                </div>
            </div>
          </div>
      </section>

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center">

              <div className="col-xl-3 col-6">
                <Counter1/>
              </div>

              <div className="col-xl-3 col-6">
                <Counter2/>
              </div>

              <div className="col-xl-3 col-6">
                <Counter3/>
              </div>

              <div className="col-xl-3 col-6">
               <Counter4/>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutSummary
