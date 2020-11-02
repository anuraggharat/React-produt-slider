import { useState } from "react";
import "./App.css";
import product1 from "./assets/product1.jpg";
import { data } from "./Data";

function App() {
  const [count, setCount] = useState(0);
  console.log(data);

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
      <div className="col-6">
        <img
          src={product1}
          className="product-image"
          alt="product"
          width="100%"
          height="100%"
        />
      </div>
      <div className="col-6 content">
        <div className="container">
          <p>MARCH</p>
          <div className="row space-around">
            <div className="col-2">
              <a className="text-grey">PREVIOUS</a>
            </div>
            <div className="col-8">
              <h1>FABULOUS FACE WASH</h1>
            </div>
            <div className="col-2">
              <a className="text-grey">NEXT</a>
            </div>
          </div>
          <div className="col">
            <p>Normal to Dry Skin</p>
            <h4>$39.00</h4>
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
