import { useState } from "react";
import reviews from "./data";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="reviews py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-6  ">
            <h1 className="font-font-monospace ">Reviews</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
