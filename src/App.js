import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./Data";
import AOS from "aos";
function App() {
  const [count, setCount] = useState(0);

  const next = () => {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const prev = () => {
    if (count === 0) {
      setCount(4);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <div className="nav">
        <div>
          <h1>HOT</h1>
        </div>
        <div>
          <p>CLOSE</p>
        </div>
      </div>
      <div className="col-6 product-image-container">
        <img
          src={data[count].image}
          className="product-image"
          alt="product"
          width="75%"
          height="75%"
        />
      </div>
      <div className="col-6 content">
        <div className="container">
          <p>MARCH</p>
          <div className="row">
            <div className="col-2">
              <a className="text-grey" onClick={() => prev()}>
                PREVIOUS
              </a>
            </div>
            <div className="col-8">
              <h1>{data[count].name}</h1>
            </div>
            <div className="col-2">
              <a className="text-grey" onClick={() => next()}>
                NEXT
              </a>
            </div>
          </div>
          <div className="col">
            <p>Normal to Dry Skin</p>
            <h4>{data[count].cost}</h4>
          </div>
          <div className="col mt-3">
            <p className="text-grey">INGREDIENTS</p>
            <h6>LAVENDER CLAY, WHITE STEM, CHANDMILE SAND</h6>
          </div>
          <div className="row btns">
            <button>ADD TO CART</button>
            <button>ADD TO SUBSCRIPTION</button>
          </div>
          <div className="col mt-5">
            <a>SUBSCRIBE</a>
            <p className="text-grey">FOR EVERY MONTH KIT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
