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
              <h2 className="text-30 fw-600">About Mountainbliss</h2>
              <p className=" fs-4 mt-3">These popular destinations have a lot to offer</p>

              <p className="text-dark-1 mt-6 lg:mt-40 md:mt-20  fw-bold">
                Mountain Bliss began in our college days, inspired by the slow, beautiful rhythm of mountain travel. We believe travel doesn’t have to be expensive—because the journey itself is the real luxury. Life is more than work and one place; it’s about going out.
                <br /><br />
               Our homestays face the mountains, where fresh air, quiet mornings, and stunning views set the tone for your day. Life naturally slows down here, letting you breathe deeper, feel calmer, and truly connect with the mountains around you.
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
                <Counter1 />
              </div>

              <div className="col-xl-3 col-6">
                <Counter2 />
              </div>

              <div className="col-xl-3 col-6">
                <Counter3 />
              </div>

              <div className="col-xl-3 col-6">
                <Counter4 />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutSummary
