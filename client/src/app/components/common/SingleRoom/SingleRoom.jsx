import React from "react";

const SingleRoom = (props) => {
  return (
    <>
    <div className="bg-single"></div>
      <div id="content-absolute">
        <section id="subheader" className="no-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h4 className=" zoomIn animated">Luxury</h4>
                <h1 className=" zoomIn animated">Suite</h1>
              </div>
            </div>
          </div>
        </section>

        <section
          id="section-main"
          className="no-bg no-top  fadeInUp animated"
          aria-label="section-menu"
          data--delay="1.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-content-overlay">
                  <>Slider</>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-room-details de-flex">
                        <div className="de-flex-col">
                          <img src="images/ui/user.svg" alt="" />4 Guests
                        </div>
                        <div className="de-flex-col">
                          <img src="images/ui/floorplan.svg" alt="" />
                          70 ft
                        </div>
                        <div className="de-flex-col">
                          <img src="images/ui/bed.svg" alt="" />
                          $79 / Night
                        </div>
                        <div className="de-flex-col">
                          <a href="booking.html" className="btn-main">
                            <span>Book Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h3>Room Overview</h3>
                      <p>
                        Indulge in opulence in our premium suites, where refined
                        design meets unparalleled luxury. These exquisite
                        accommodations boast separate living and dining areas, a
                        fully equipped kitchenette, and a private balcony or
                        terrace with stunning vistas. Pamper yourself in the
                        lavish bathroom, unwind in the plush seating area, and
                        enjoy personalized services to make your stay truly
                        exceptional. At our hotel, we strive to create an
                        environment that exceeds your expectations. From the
                        moment you step through our doors until the time you bid
                        farewell, we are committed to delivering unparalleled
                        hospitality and ensuring that your stay is nothing short
                        of extraordinary. Enjoy access to our state-of-the-art
                        fitness center, rejuvenate in our spa and wellness
                        facilities, savor exquisite culinary delights in our
                        on-site restaurants, and benefit from our attentive
                        concierge services.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h3>Room Facilities</h3>
                      <ul className="ul-style-2">
                        <li>48 HD TV with more than 60 channels</li>
                        <li>Coffee and tea makers</li>
                        <li>Hot cold bathing</li>
                        <li>High comfortable mattress bed</li>
                        <li>Hight quality bed sheets</li>
                        <li>Free WIFI internet connection</li>
                        <li>Connecting room by request</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="no-top pl20 pr20">
          <div className="subfooter">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  © Copyright 2023 - Seaside Hotel by{" "}
                  <span className="id-color">Designesia</span>
                </div>
                <div className="col-md-6 text-right">
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-rss fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" id="back-to-top"></a>
        </footer>
      </div>
    </>
  );
};

export default SingleRoom;
