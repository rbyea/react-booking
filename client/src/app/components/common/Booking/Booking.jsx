import React from "react";

const Booking = (props) => {
  return (
    <>
    <div className="bg-booking"></div>
      <div id="content-absolute">
        <section id="subheader" className="no-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  className=" zoomIn animated"
                >
                  Booking
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section
          id="section-main"
          className="no-bg no-top  fadeInUp animated"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="de-content-overlay">
                  <form name="contactForm" id="contact_form" method="post">
                    <div id="step-1" className="row">
                      <div className="col-md-12 mb10">
                        <h4>Choose Date</h4>
                        <input
                          type="text"
                          id="date-picker"
                          className="form-control"
                          name="date"
                          value=""
                        />

                        <div className="guests-n-rooms">
                          <div className="row">
                            <div className="col-md-4">
                              <h4>Adult</h4>
                              <div className="de-number">
                                <span className="d-minus">-</span>
                                <input type="text" value="1" />
                                <span className="d-plus">+</span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <h4>Children</h4>
                              <div className="de-number">
                                <span className="d-minus">-</span>
                                <input type="text" value="0" />
                                <span className="d-plus">+</span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <h4>Room</h4>
                              <div id="d-room-count" className="de-number">
                                <span className="d-minus">-</span>
                                <input id="room-count" type="text" value="1" />
                                <span className="d-plus">+</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="select-room">
                      <h4>Select Room</h4>
                      <select
                        name="Room Type"
                        id="room-type"
                        className="form-control"
                      >
                        <option value="Standart Room">Standart Room</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Premier Room">Premier Room</option>
                        <option value="Family Suite">Family Suite</option>
                        <option value="Luxury Suite">Luxury Suite</option>
                        <option value="President Suite">President Suite</option>
                      </select>
                    </div>

                    <div id="step-2" className="row">
                      <h4>Enter your details</h4>

                      <div className="col-md-6">
                        <div id="name_error" className="error">
                          Please enter your name.
                        </div>
                        <div>
                          <input
                            type="text"
                            name="Name"
                            id="name"
                            className="form-control"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>

                        <div id="email_error" className="error">
                          Please enter your valid E-mail ID.
                        </div>
                        <div>
                          <input
                            type="email"
                            name="Email"
                            id="email"
                            className="form-control"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>

                        <div id="phone_error" className="error">
                          Please enter your phone number.
                        </div>
                        <div>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Your Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="message_error" className="error">
                          Please enter your message.
                        </div>
                        <div>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>

                    </div>
                  </form>
                  <div id="success_message" className="success">
                    Your reservation has been sent successfully.
                  </div>
                  <div id="error_message" className="error">
                    Sorry, error occured this time sending your message.
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

export default Booking;
