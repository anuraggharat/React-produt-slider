import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./Data";
import { CSSTransition } from "react-transition-group";
import AOS from "aos";
function App() {
  const [count, setCount] = useState(0);
  const [inProp, setInProp] = useState(false);
  const next = () => {
    if (count === 4) {
      setCount(0);
      setInProp(true);
    } else {
      setCount(count + 1);
      setInProp(true);
    }
  };
  const prev = () => {
    if (count === 0) {
      setCount(4);
      setInProp(true);
    } else {
      setCount(count - 1);
      setInProp(true);
    }
  };

  useEffect(() => {
    setInProp(false);
  }, [count]);

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
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
          <img
            src={data[count].image}
            className="product-image"
            alt="product"
          />
        </CSSTransition>
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
              <CSSTransition in={inProp} timeout={200} classNames="my-node">
                <h1>{data[count].name}</h1>
              </CSSTransition>
            </div>
            <div className="col-2">
              <a className="text-grey" onClick={() => next()}>
                NEXT
              </a>
            </div>
          </div>
          <div className="col">
            <p>Normal to Dry Skin</p>
            <CSSTransition in={inProp} timeout={200} classNames="my-node">
              <h1>{data[count].cost}</h1>
            </CSSTransition>
          </div>
          <div className="col mt-3">
            <p className="text-grey">INGREDIENTS</p>
            <h6>LAVENDER CLAY, WHITE STEM, CHANDMILE SAND</h6>
          </div>
          <div className="row btns">
            <button onClick={() => setInProp(true)}>ADD TO CART</button>
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
