import React from "react";
import Background from "../../components/common/Background";

function Dashboard() {
  return (
    <section
      id="homescreen-main"
      className="background1"
      style={{ height: "100vh" }}
    >
      <Background />
      <div className="homecreen1-content">
        <div className="container">
          <div className="homescreen1-wrap position-relative">
            <div className="homescreen-title pt-24">
              <h1>Dashboard</h1>
              <p className="text-start pt-8">Your dashboard datas shows here</p>
            </div>
            {/* <div className="homescree-searchbar pt-24">
              <div className="search-wrap">
                <div className="input-group search-page-searchbar ">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="form-control search-text"
                    id="search-input"
                  />
                </div>
                <div className="search-bar">
                  <div className="search-btn">
                    <a href="javascript:void(0)">
                      <img
                        src="/assets/svg/search-icon.svg"
                        alt="search-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="homescreen-category position-relative pt-24">
          <h2 className="text-center">All Categories</h2>
          <div className="homescreen-details pt-16">
            <a href="category1.html">
              <div className="homescreen-category-main">
                <div className="category-img">
                  <img
                    src="/assets/images/homescreen1/category1.png"
                    alt="category-img"
                  />
                </div>
                <div className="category-txt pt-12">
                  <h3>Cosmetics</h3>
                  <p className="pt-4 text-center">286 Items</p>
                </div>
              </div>
            </a>
            <a href="category1.html">
              <div className="homescreen-category-main">
                <div className="category-img">
                  <img
                    src="/assets/images/homescreen1/category2.png"
                    alt="category-img"
                  />
                </div>
                <div className="category-txt pt-12">
                  <h3>Clothes</h3>
                  <p className="pt-4 text-center">1856 Items</p>
                </div>
              </div>
            </a>
            <a href="category1.html">
              <div className="homescreen-category-main">
                <div className="category-img">
                  <img
                    src="/assets/images/homescreen1/category3.png"
                    alt="category-img"
                  />
                </div>
                <div className="category-txt pt-12">
                  <h3>Electronics</h3>
                  <p className="pt-4 text-center">845 Items</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="homescreen-shopping position-relative pt-24">
          <div className="shopping-img">
            <div className="homepage-overlay" />
            <img
              className="waves-img"
              src="/assets/svg/vector.svg"
              alt="waves-img"
            />
            <img
              className="shopping-bg-img"
              src="/assets/images/homescreen1/shopping-img.png"
              alt="shopping-img"
            />
            <p className="img-txt">
              “Happiness is not in money, but in shopping.”
            </p>
          </div>
        </div>
        <div className="logo-slider">
          <div className="logos logos2">
            <div className="logos-slide logos-slide2">
              <div className="marquee__content">
                <div className="marquee-img-main">
                  <p>FITNESS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>TOYS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>SPORTS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p> OFFICE PRODUCTS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>FASHION</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="logos logos1">
            <div className="logos-slide">
              <div className="marquee__content">
                <div className="marquee-img-main">
                  <p>CLOTHES</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>ELECTRONICS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>HEALTH CARE</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>CLOTHES</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
                <div className="marquee-img-main">
                  <p>ELECTRONICS</p>
                  <img
                    className="marquue-flower"
                    src="/assets/images/homescreen1/flower-svg.svg"
                    alt="flower"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seller-sec position-relative pt-24">
          <div className="seller-sec-wrap container">
            <div className="seller-title">
              <h2>Best Sellers</h2>
            </div>
            <div className="view-all-seller">
              <a href="best-seller.html">
                <p className="view-all-txt">
                  View all
                  <span>
                    <img src="/assets/svg/right-arrow.svg" alt="right-arrow" />
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="seller-sec-content pt-16">
            <div className="seller-slide cloth-redirect">
              <div className="seller-slide-top-content">
                <img
                  src="/assets/images/homescreen1/seller1.png"
                  alt="seller-img"
                />
                <div className="home-page-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark active "
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
                <div className="seller-txt-sec">
                  <p className="sale-txt">Sale</p>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="seller-name">Shor summer dress</h3>
                <div className="seller-bottom-price pt-8">
                  <div className="seller-bottom-price1 ">
                    <span className="seller-price-txt1 color-red">$680.00</span>
                    <span className="seller-price-txt2">$800.00</span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">5.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="seller-slide electronic-redirect">
              <div className="seller-slide-top-content">
                <img
                  src="/assets/images/homescreen1/seller2.png"
                  alt="seller-img"
                />
                <div className="home-page-favourite">
                  <a href="javascript:void(0);" className="item-bookmark ">
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="seller-name">Body Massager Gun</h3>
                <div className="seller-bottom-price pt-8">
                  <div className="seller-bottom-price1 ">
                    <span className="seller-price-txt1 color-red">$80.00</span>
                    <span className="seller-price-txt2">$800.00</span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">5.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="seller-slide cloth-redirect">
              <div className="seller-slide-top-content">
                <img
                  src="/assets/images/homescreen1/seller1.png"
                  alt="seller-img"
                />
                <div className="home-page-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark active "
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
                <div className="seller-txt-sec">
                  <p className="sale-txt">Sale</p>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="seller-name">Shor summer dress</h3>
                <div className="seller-bottom-price pt-8">
                  <div className="seller-bottom-price1 ">
                    <span className="seller-price-txt1 color-red">$680.00</span>
                    <span className="seller-price-txt2">$800.00</span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen-third-sec position-relative container pt-24">
          <div className="homescreen-third-wrapper">
            <div className="homescreen-third-wrapper-content">
              <div className="special-offer1">
                <h2>30% OFF</h2>
                <h3 className="pt-4">Today’s Special!</h3>
                <p className="pt-12">
                  Get a discount for every order, Only valid for today!
                </p>
                <div className="home1-shop-now-btn mt-12">
                  <a href="shoes.html">Shop Now</a>
                </div>
              </div>
              <div className="homescreen1-offer-img ">
                <img
                  src="/assets/images/homescreen1/offer2.png"
                  alt="offer-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen1-featured position-relative pt-24">
          <div className="seller-sec-wrap container">
            <div className="seller-title">
              <h2>Featured Products</h2>
            </div>
            <div className="view-all-seller">
              <a href="feature-product.html">
                <p className="view-all-txt">
                  View all
                  <span>
                    <img src="/assets/svg/right-arrow.svg" alt="right-arrow" />
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="homescreen1-featured-bottom pt-16">
            <div className="featured-slide electronic-redirect">
              <div className="featured-slide-top redirect-electronic">
                <img
                  src="/assets/images/homescreen1/featured1.png"
                  alt="featured-img"
                />
                <div className="home-page-featured-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabIndex={-1}
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="featured-name">
                  Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green){" "}
                </h3>
                <div className="seller-bottom-price">
                  <div className="seller-bottom-price1">
                    <span className="seller-price-txt1 color-red">
                      $3500.00
                    </span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">4.6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-slide electronic-redirect">
              <div className="featured-slide-top redirect-electronic">
                <img
                  src="/assets/images/homescreen1/featured2.png"
                  alt="featured-img"
                />
                <div className="home-page-featured-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabIndex={-1}
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="featured-name">
                  Full Body Mini Massager Gun (15 Mins Auto Off Timer,
                  CRSH006MRA028201, Dark Blue){" "}
                </h3>
                <div className="seller-bottom-price">
                  <div className="seller-bottom-price1">
                    <span className="seller-price-txt1 color-red">$90.00</span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">5.0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-slide electronic-redirect">
              <div className="featured-slide-top">
                <img
                  src="/assets/images/homescreen1/featured3.png"
                  alt="featured-img"
                />
                <div className="home-page-featured-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabIndex={-1}
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="featured-name">
                  NIVEA Sun Lotion, SPF 50, with UVA &amp; UVB Protection, Water
                  Resistant Sunscreen for Men &amp; Women, 125 ml
                </h3>
                <div className="seller-bottom-price">
                  <div className="seller-bottom-price1">
                    <span className="seller-price-txt1 color-red">$50.00</span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">4.6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-slide electronic-redirect">
              <div className="featured-slide-top redirect-electronic">
                <img
                  src="/assets/images/homescreen1/featured1.png"
                  alt="featured-img"
                />
                <div className="home-page-featured-favourite">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabIndex={-1}
                  >
                    <img
                      src="/assets/svg/unfill-heart.svg"
                      alt="unfill-heart"
                    />
                  </a>
                </div>
              </div>
              <div className="seller-slide-bottom-content pt-12">
                <h3 className="featured-name">
                  Samsung Galaxy A14 5G (8 GB RAM, 128 GB ROM, Light Green){" "}
                </h3>
                <div className="seller-bottom-price">
                  <div className="seller-bottom-price1">
                    <span className="seller-price-txt1 color-red">
                      $3500.00
                    </span>
                  </div>
                  <div className="seller-bottom-price1">
                    <span className="seller-star">
                      <img src="/assets/svg/fill-star.svg" alt="star-img" />
                    </span>
                    <span className="seller-price-txt3 color-black">4.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen1-choose-brand position-relative pt-24">
          <div className="seller-sec-wrap container">
            <div className="seller-title">
              <h2>Choose Brands</h2>
            </div>
            <div className="view-all-seller">
              <a href="choose-brand.html">
                <p className="view-all-txt">
                  View all
                  <span>
                    <img src="/assets/svg/right-arrow.svg" alt="right-arrow" />
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="brands-bottom pt-16">
            <div className="brand-slide">
              <div className="brands-img">
                <img
                  src="/assets/images/homescreen1/brand1.png"
                  alt="brand-img"
                />
              </div>
              <div className="brands-content pt-8">
                <p>Nike</p>
              </div>
            </div>
            <div className="brand-slide">
              <div className="brands-img">
                <img
                  src="/assets/images/homescreen1/brand2.png"
                  alt="brand-img"
                />
              </div>
              <div className="brands-content pt-8">
                <p>Samsung</p>
              </div>
            </div>
            <div className="brand-slide">
              <div className="brands-img">
                <img
                  src="/assets/images/homescreen1/brand3.png"
                  alt="brand-img"
                />
              </div>
              <div className="brands-content pt-8">
                <p>Intel</p>
              </div>
            </div>
            <div className="brand-slide">
              <div className="brands-img">
                <img
                  src="/assets/images/homescreen1/brand1.png"
                  alt="brand-img"
                />
              </div>
              <div className="brands-content pt-8">
                <p>Nike</p>
              </div>
            </div>
            <div className="brand-slide">
              <div className="brands-img">
                <img
                  src="/assets/images/homescreen1/brand2.png"
                  alt="brand-img"
                />
              </div>
              <div className="brands-content pt-8">
                <p>Samsung</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen1-shop-now position-relative pt-24">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel slide-shop-now2"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active show-now2-custom-btn"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                className="show-now2-custom-btn"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                className="show-now2-custom-btn"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="shop-now2-sec">
                  <div className="container">
                    <div className="homescreen-seventh-wrapper">
                      <h3>
                        20% Off on Jackets
                        <br /> This Season
                      </h3>
                      <p className="pt-8">
                        Get a discount for every course order!
                        <br />
                        Only valid for today!
                      </p>
                      <div className="home1-shop-now-btn mt-32">
                        <a href="clothes.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="shop-now2-sec">
                  <div className="container">
                    <div className="homescreen-seventh-wrapper">
                      <h3>
                        20% Off on Jackets <br /> This Season
                      </h3>
                      <p className="pt-8">
                        Get a discount for every course order!
                        <br />
                        Only valid for today!
                      </p>
                      <div className="home1-shop-now-btn mt-32">
                        <a href="clothes.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="shop-now2-sec">
                  <div className="container">
                    <div className="homescreen-seventh-wrapper">
                      <h3>
                        20% Off on Jackets <br /> This Season
                      </h3>
                      <p className="pt-8">
                        Get a discount for every course order!
                        <br />
                        Only valid for today!
                      </p>
                      <div className="home1-shop-now-btn mt-32">
                        <a href="clothes.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homescreen1-arrivals position-relative">
          <div className="seller-sec-wrap container pt-24">
            <div className="seller-title">
              <h2>New Arrivals</h2>
            </div>
            <div className="view-all-seller">
              <a href="new-arrival.html">
                <p className="view-all-txt">
                  View all
                  <span>
                    <img src="/assets/svg/right-arrow.svg" alt="right-arrow" />
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="homescreen1-arrival-bottom">
            <div className="homescreen-eight-bottom-full pt-16">
              <ul
                className="nav nav-pills mb-3"
                id="homepage1-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active custom-home1-tab-btn"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-clothes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-clothes"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Clothes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-electronics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-electronics"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Electronics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-cosmetics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-cosmetics"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Cosmetics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-fitness-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-fitness"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Fitness
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane show active"
                  id="pills-all"
                  role="tabpanel"
                  tabIndex={0}
                >
                  <div className="container">
                    <div className="homepage1-tab-details">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival1.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Fire-Boltt Phoenix Smart Watch with Bluetooth
                                Calling 1.3",120+ Sports Modes, 240 * 240 PX
                                High Res with SpO2, Heart Rate Monitoring &amp;
                                IP67 Rating, Rs 100 Off on UPI
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$150.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-electronic.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival2.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                All-in-One PC 12th Gen Intel Core i5-1235U
                                24-inch(60.5 cm) FHD Anti Glare Desktop (8GB
                                RAM/512GB/Win 11/Wireless Keyboard and Mouse
                                Combo/MSO/IR Privacy Camera/Jet Black)
                                24-cb1907in
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$850.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-electronic.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival3.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Western Dresses for Women | Short A-Line Dress
                                for Girls | Maxi Dress for Women
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark active"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$80.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival4.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Girl's Alloy Rose Gold Plated Dual Heart Pendant
                                for mom with Crystal Stones white colour
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$450.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival5.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Baby Gift Pack Series,Pack of 1 set,white, Baby
                                Gift Pack Series,Pack of 1 set,white
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$65.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-clothes"
                  role="tabpanel"
                  tabIndex={0}
                >
                  <div className="container">
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival3.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Western Dresses for Women | Short A-Line Dress
                                for Girls | Maxi Dress for Women
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark active"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$80.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-electronics"
                  role="tabpanel"
                  tabIndex={0}
                >
                  <div className="container">
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival2.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                All-in-One PC 12th Gen Intel Core i5-1235U
                                24-inch(60.5 cm) FHD Anti Glare Desktop (8GB
                                RAM/512GB/Win 11/Wireless Keyboard and Mouse
                                Combo/MSO/IR Privacy Camera/Jet Black)
                                24-cb1907in
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$850.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-electronic.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-cosmetics"
                  role="tabpanel"
                  tabIndex={0}
                >
                  <div className="container">
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival4.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Girl's Alloy Rose Gold Plated Dual Heart Pendant
                                for mom with Crystal Stones white colour
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$450.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-fitness"
                  role="tabpanel"
                  tabIndex={0}
                >
                  <div className="container">
                    <div className="homepage1-tab-details mt-16">
                      <div className="homepage1-tab-details-wrapper">
                        <div className="home1-tab-img">
                          <img
                            src="/assets/images/homescreen1/arrival5.png"
                            alt="watch-img"
                          />
                        </div>
                        <div className="home1-tab-details">
                          <div className="home1-tab-details-full">
                            <div>
                              <p className="tab-home1-txt1">
                                Baby Gift Pack Series,Pack of 1 set,white, Baby
                                Gift Pack Series,Pack of 1 set,white
                              </p>
                            </div>
                            <div>
                              <div className="home-page-arrival-favourite">
                                <a
                                  href="javascript:void(0);"
                                  className="item-bookmark"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="/assets/svg/unfill-heart.svg"
                                    alt="unfill-heart"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="tab-home1-txt2 pt-12">$65.00</h3>
                          </div>
                          <div className="rating-homescreen1">
                            <div className="orange-star-tab pt-8">
                              <span>
                                <img
                                  src="/assets/svg/fill-star.svg"
                                  alt="star-img"
                                />
                              </span>
                              <span className="tab-home1-txt3">4.8</span>
                            </div>
                            <div className="shop-now-btn">
                              <a href="single-clothes.html">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Dashboard;
