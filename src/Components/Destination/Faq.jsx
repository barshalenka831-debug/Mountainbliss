import React, { useState } from "react"
import '../Style.css'
const Faq = () => {

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What do I need to hire a car?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      question: "How old do I have to be to rent a car?",
      answer:
        "Most companies require drivers to be at least 21 years old."
    },
    {
      question: "Can I book a hire car for someone else?",
      answer:
        "Yes, but the main driver must provide their license and identification."
    },
    {
      question: "How do I find the cheapest car hire deal?",
      answer:
        "Compare prices across multiple providers and book early."
    },
    {
      question: "What should I look for when choosing a car?",
      answer:
        "Consider fuel efficiency, passenger capacity, and luggage space."
    }
  ]

  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">

        <div className="row y-gap-20">
          
          <div className="col-lg-4">
            <h2 className="text-30 fw-500">
              FAQs about <br /> London
            </h2>
          </div>

          <div className="col-lg-8">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="accordion__item px-20 py-20 border-light rounded-4 mb-15"
              >

                {/* Question */}
                <div
                  className="accordion__button d-flex items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >

                  <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                    {activeIndex === index ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </div>

                  <div className="text-dark-1 fw-500">
                    {faq.question}
                  </div>

                </div>

                {/* Answer */}
                {activeIndex === index && (
                  <div className="pt-20 pl-60">
                    <p className="text-15">{faq.answer}</p>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Faq