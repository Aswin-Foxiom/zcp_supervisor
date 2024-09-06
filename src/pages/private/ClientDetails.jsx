import React from "react";
import Background from "../../components/common/Background";

function ClientDetails() {
  return (
    <div style={{ height: "100vh" }}>
      <section id="single-clothes-main" className="background1">
        <Background />
        <div className="main-content-wrap-single">
          <div className="position-relative">
            <div className="main-content-wrap container">
              <div className="single-clothes-wrap">
                {/* <div className="cloths-first-sec pt-16">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide single-clothes-slider"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="single-clothes-slide-img">
                          <img
                            src="/assets/images/single-clothes/slider-img1.png"
                            alt="clothes-img"
                          />
                        </div>
                        <div className="single-clothes-favourite">
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
                        <div className="single-clothes-sold">
                          <p>9,742 sold</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="single-clothes-slide-img">
                          <img
                            src="/assets/images/single-clothes/slider-img1.png"
                            alt="clothes-img"
                          />
                        </div>
                        <div className="single-clothes-favourite">
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
                        <div className="single-clothes-sold">
                          <p>9,742 sold</p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev single-slider-btn-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="white-arrow">
                        <img src="/assets/svg/left-arrow.svg" alt="back-btn" />
                      </span>
                    </button>
                    <button
                      className="carousel-control-next single-slider-btn-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="white-arrow">
                        <img
                          src="/assets/svg/right-arrow.svg"
                          alt="right-icon"
                        />
                      </span>
                    </button>
                  </div>
                </div> */}
                <div className="single-clothes-details pt-24">
                  <h1>Manoj</h1>
                  <div className="read-more-content pt-12">
                    <p className="des-txt2">
                      <span className="moretext">
                        1.3",120+ Sports Modes, 240 * 240 PX High Res with SpO2,
                        Heart Rate Monitoring &amp; IP67 Rating, Rs 100 Off on
                        UPI
                      </span>
                    </p>
                    <a className="moreless-button" href="javascript:void(0)">
                      Addresss Will Show here
                    </a>
                  </div>
                </div>
                <div className="single-clothes-review pt-24">
                  <div className="seller-sec-wrap">
                    <div className="overview-txt">
                      <h2
                        onClick={() =>
                          (window.location.href = "https://www.google.com/maps")
                        }
                      >
                        Click Here to Navigate Map
                      </h2>
                    </div>
                    {/* <div className="view-all-seller">
                      <a href="rating-review.html">
                        <p className="view-all-txt">
                          View all
                          <span>
                            <img
                              src="/assets/svg/right-arrow.svg"
                              alt="right-arrow"
                            />
                          </span>
                        </p>
                      </a>
                    </div> */}
                  </div>
                  {/* <div className="review-progress pt-12">
                    <div className="review-first-sec-wrap">
                      <div className="review-first-sec">
                        <p className="rev1-txt">4.8</p>
                        <p className="rev2-txt pt-4">out of 5</p>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="review-wrap">
                        <div className="review-star-content">
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                        </div>
                        <div className="progress-content">
                          <div className="progress-row" data-percentage={32}>
                            <div className="progress-bar" />
                            <div className="percentage">32%</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-wrap">
                        <div className="review-star-content">
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                        </div>
                        <div className="progress-content">
                          <div className="progress-row" data-percentage={62}>
                            <div className="progress-bar" />
                            <div className="percentage">62%</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-wrap">
                        <div className="review-star-content">
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                        </div>
                        <div className="progress-content">
                          <div className="progress-row" data-percentage={50}>
                            <div className="progress-bar" />
                            <div className="percentage">50%</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-wrap">
                        <div className="review-star-content">
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                        </div>
                        <div className="progress-content">
                          <div className="progress-row" data-percentage={40}>
                            <div className="progress-bar" />
                            <div className="percentage">40%</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-wrap">
                        <div className="review-star-content">
                          <img
                            src="/assets/svg/fill-star10.svg"
                            alt="yellow-star"
                          />
                        </div>
                        <div className="progress-content">
                          <div className="progress-row" data-percentage={30}>
                            <div className="progress-bar" />
                            <div className="percentage">30%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="additional-info pt-24">
                <div className="overview-txt">
                  <h2>Additional Info:</h2>
                </div>
                <div className="additional-info-content pt-12">
                  <div>Test Demo</div>
                  <div>Test Demo</div>
                </div>
                <div className="additional-info-content pt-4">
                  <div>Test Demo</div>
                  <div>Test Demo</div>
                </div>
                <div className="additional-info-content pt-4">
                  <div>Test Demo</div>
                  <div>Test Demo</div>
                </div>
                <div className="additional-info-content pt-4">
                  <div>Test Demo</div>
                  <div>Test Demo</div>
                </div>
                <div className="additional-info-content pt-4">
                  <div>Test Demo</div>
                  <div>Test Demo</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="size-sec position-relative pt-24">
            <div className="overview-txt container">
              <h2>Size:</h2>
            </div>
            <div className="clothes-size-sec pt-12">
              <div className="clothes-size">
                <input type="radio" id="size1" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size1">
                  X2S
                </label>
              </div>
              <div className="clothes-size">
                <input type="radio" id="size2" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size2">
                  XS
                </label>
              </div>
              <div className="clothes-size">
                <input type="radio" id="size3" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size3">
                  S
                </label>
              </div>
              <div className="clothes-size">
                <input type="radio" id="size4" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size4">
                  M
                </label>
              </div>
              <div className="clothes-size">
                <input
                  type="radio"
                  id="size5"
                  name="select-size"
                  defaultChecked
                />
                <label className="custom-radio-sel-size" htmlFor="size5">
                  L
                </label>
              </div>
              <div className="clothes-size">
                <input type="radio" id="size6" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size6">
                  XL
                </label>
              </div>
              <div className="clothes-size">
                <input type="radio" id="size7" name="select-size" />
                <label className="custom-radio-sel-size" htmlFor="size7">
                  X2L
                </label>
              </div>
            </div>
          </div> */}
          {/* <div className="color-sec position-relative pt-24">
            <div className="overview-txt container">
              <h2>Color:</h2>
            </div>
            <div className="cloths-color-sec pt-12">
              <div className="color-wrap">
                <label htmlFor="black" className="color1">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    className="col-deatils"
                    defaultChecked
                  />
                </label>
                <p>Black</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="white" className="color2">
                  <input
                    type="radio"
                    name="color"
                    id="white"
                    className="col-deatils"
                  />
                </label>
                <p>White</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="red" className="color3">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="col-deatils"
                  />
                </label>
                <p>Red</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="pink" className="color4">
                  <input
                    type="radio"
                    name="color"
                    id="pink"
                    className="col-deatils"
                  />
                </label>
                <p>Pink</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="purple" className="color5">
                  <input
                    type="radio"
                    name="color"
                    id="purple"
                    className="col-deatils"
                  />
                </label>
                <p>Purple</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="purple1" className="color6">
                  <input
                    type="radio"
                    name="color"
                    id="purple1"
                    className="col-deatils"
                  />
                </label>
                <p>Deep P</p>
              </div>
              <div className="color-wrap">
                <label htmlFor="indigo" className="color7">
                  <input
                    type="radio"
                    name="color"
                    id="indigo"
                    className="col-deatils"
                  />
                </label>
                <p>Indigo</p>
              </div>
            </div>
          </div> */}
          {/* <div className="you-may-like-sec position-relative pt-24">
            <div className="seller-sec-wrap container">
              <div className="overview-txt">
                <h2>You May Also Like</h2>
              </div>
              <div className="view-all-seller">
                <a href="clothes.html">
                  <p className="view-all-txt">
                    View all
                    <span>
                      <img
                        src="/assets/svg/right-arrow.svg"
                        alt="right-arrow"
                      />
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className="you-may-like-sec-wrap pt-12">
              <div className="you-may-like-sec-content">
                <div className="hot-week-content">
                  <div className="hot-top-content">
                    <div className="hot-deal-img">
                      <img
                        src="/assets/images/single-clothes/clothes1.png"
                        alt="clothes-img"
                      />
                    </div>
                    <div className="hot-week-favourite">
                      <a href="javascript:void(0);" className="item-bookmark">
                        <img
                          src="/assets/svg/unfill-heart.svg"
                          alt="unfill-heart"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hot-bottom-content pt-12">
                    <p>
                      FRATINI WOMAN by Shoppers Stop Solid V Neck Blended
                      Women's Midi Dress
                    </p>
                    <div className="hot-rating-sec pt-8">
                      <div className="hot-rate-price">
                        <span className>$3500.00</span>
                      </div>
                      <div className="hot-star-rate">
                        <span>
                          <img src="/assets/svg/fill-star.svg" alt="star-img" />
                        </span>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hot-week-content">
                  <div className="hot-top-content">
                    <div className="hot-deal-img">
                      <img
                        src="/assets/images/single-clothes/clothes2.png"
                        alt="clothes-img"
                      />
                    </div>
                    <div className="hot-week-favourite">
                      <a href="javascript:void(0);" className="item-bookmark">
                        <img
                          src="/assets/svg/unfill-heart.svg"
                          alt="unfill-heart"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hot-bottom-content pt-12">
                    <p>
                      Dennis Lingo Men's Checkered Slim Fit Casual Shirt with
                      Spread Collar
                    </p>
                    <div className="hot-rating-sec pt-8">
                      <div className="hot-rate-price">
                        <span className>$90.00</span>
                      </div>
                      <div className="hot-star-rate">
                        <span>
                          <img src="/assets/svg/fill-star.svg" alt="star-img" />
                        </span>
                        <span>5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hot-week-content">
                  <div className="hot-top-content">
                    <div className="hot-deal-img">
                      <img
                        src="/assets/images/single-clothes/clothes3.png"
                        alt="clothes-img"
                      />
                    </div>
                    <div className="hot-week-favourite">
                      <a href="javascript:void(0);" className="item-bookmark ">
                        <img
                          src="/assets/svg/unfill-heart.svg"
                          alt="unfill-heart"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hot-bottom-content pt-12">
                    <p>Jwalin Girl’s Georgette Asymmetric Calf Length Dress</p>
                    <div className="hot-rating-sec pt-8">
                      <div className="hot-rate-price">
                        <span className>$50.00</span>
                      </div>
                      <div className="hot-star-rate">
                        <span>
                          <img src="/assets/svg/fill-star.svg" alt="star-img" />
                        </span>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="single-clothes-bottom container">
            {/* <div className="single-increment">
              <div className="cloth-price-sec">
                <span className="price-sec1">Price:</span>
                <span className="price-sec2">$150.00</span>
              </div>
              <div className="cloths-increment-sec">
                <div className="product-incre">
                  <a href="javascript:void(0)" className="product__minus sub">
                    <span>
                      <img src="/assets/svg/minus-icon.svg" alt="minus-icon" />
                    </span>
                  </a>
                  <input
                    name="quantity"
                    type="text"
                    className="product__input"
                    defaultValue={1}
                  />
                  <a href="javascript:void(0)" className="product__plus add">
                    <span>
                      <img src="/assets/svg/plus-icon.svg" alt="plus-icon" />
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="sign-up-btn pt-16">
              <a href="/work">Start Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientDetails;
