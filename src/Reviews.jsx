import React, { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import people from "./data";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div className="col-lg-6 text-center">
      <div className="d-flex align-items-center  flex-column row-gap-3  p-5">
        <div>
          <img
            src={image}
            alt={name}
            style={{ height: 75, width: 75 }}
            className="rounded-circle border-3 border-secondary-subtle border p-1"
          />
        </div>
        <h4 className="text-capitalize">{name}</h4>
        <p className="text-uppercase">{job}</p>
        <p className="">{text}</p>
        <div>
          <button className="btn btn-prev" onClick={prev}>
            <FaChevronCircleLeft />
          </button>
          <button className="btn btn-next" onClick={next}>
            <FaChevronCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
