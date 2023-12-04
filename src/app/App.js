import React from "react";
import image from "./assets/1.jpg";

function App() {
  return (
    <>
      <div id="content" className="no-bottom no-top">
        <div className="float-text">
          <div className="de_social-icons">
            <i className="fa fa-facebook fa-lg"></i>
            <i className="fa fa-twitter fa-lg"></i>
            <i className="fa fa-instagram fa-lg"></i>
          </div>
        </div>

        <div className="slider-overlay"></div>

        <div id="slidecaption">
          <img src={image} alt="" />
        </div>

        <div className="container">
          <div id="prevthumb"></div>
          <div id="nextthumb"></div>

          <a id="prevslide" href="12" className="load-item"></a>
          <a id="nextslide" href="12" className="load-item"></a>

          <div id="progress-back" className="load-item">
            <div id="progress-bar"></div>
          </div>
          <div id="controls-wrapper" className="load-item">
            <div id="controls">
              <a href="12" id="play-button">
                <span id="pauseplay" className="play"></span>
              </a>

              <div id="slidecounter">
                <span className="slidenumber"></span> /
                <span className="totalslides"></span>
              </div>

              <ul id="slide-list"></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
