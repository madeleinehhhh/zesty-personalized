import React, { useState } from "react";
import "./styles.css";

import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

// refactor to use import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
// import arrowLeft from "./assets/arrow-left.svg";
// import arrowRight from "./assets/arrow-right.svg";

const imgs = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const rightClick = () => {
    if (currentImg === imgs.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg((currentImg) => currentImg + 1);
    }
  };
  const leftClick = () => {
    if (currentImg === 0) {
      setCurrentImg(imgs.length - 1);
    } else {
      setCurrentImg((currentImg) => currentImg - 1);
    }
  };

  const handleImgLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <main className={`color${currentImg + 1} background${currentImg + 1}`}>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br />
          by Ella Fielding
        </h2>
      </header>
      <figure>
        {numLoaded < imgs.length && (
          <Loading calculatedWidth={(numLoaded / imgs.length) * 100} />
        )}
        <nav id="nav-arrow">
          <button id="arrow-left" type="button" onClick={leftClick}>
            <p className={`color${currentImg + 1}`}>&lt;</p>
          </button>
          <button id="arrow-right" type="button" onClick={rightClick}>
            <p className={`color${currentImg + 1}`}>&gt;</p>
          </button>
        </nav>

        <figcaption className={`color${currentImg + 1}`}>
          {currentImg + 1} / {imgs.length}
        </figcaption>
        {imgs.map((imageURL, index) => (
          <img
            src={imageURL}
            alt=""
            key={imageURL}
            onLoad={handleImgLoad}
            className={currentImg === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </main>
  );
};

export default App;
