import React from "react";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import Subscribe from "../Footer/Subscribe";
import Footer from "../Footer/Footer";

const Blog = () => {

  const Articles = [
    {
      Image: assets.Blog1,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog2,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog3,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog4,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog5,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog6,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
    {
      Image: assets.Blog7,
      Description: "10 European ski destinations you should visit this winter",
      Date: "April 06, 2025",
    },
  ];

  return (
    <div>
      <Navbar variant="dark" />

      <section className="layout-pt-md layout-pb-lg mt-5">

        <div className="container">

          {/* SECTION TITLE */}
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className="sectionTitle__text mt-3">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
            </div>
          </div>


          {/* TABS BUTTONS */}
          <div className="row justify-content-center g-2 mt-4">

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Art and culture
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Beaches
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Adventure travel
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Explore
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Family holidays
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Air travel
              </button>
            </div>

            <div className="col-auto">
              <button className="tabs__button text-14 fw-500 px-20 py-10 rounded-1 bg-light-2">
                Food and drink
              </button>
            </div>

          </div>


          {/* BLOG CARDS */}
          <div className="row g-4 mt-4">

            {Articles.map((article, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">

                <a href="/" className="blogCard -type-1 d-block">

                  <div className="blogCard__image">
                    <div className="ratio ratio-4x3 rounded-3 overflow-hidden">
                      <img
                        src={article.Image}
                        alt="blog"
                        className="img-fluid w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <h4 className="text-dark-1 text-18 fw-500">
                      {article.Description}
                    </h4>

                    <div className="text-light-1 text-15 mt-2">
                      {article.Date}
                    </div>
                  </div>

                </a>

              </div>
            ))}

          </div>

        </div>

      </section>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Blog;