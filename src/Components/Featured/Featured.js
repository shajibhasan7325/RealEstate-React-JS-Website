import React from "react";
import "./Featured.css";
import House1 from "../../assets/house1.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import kitchen from "../../assets/kitchen.jpg";
import bath from "../../assets/bath1.jpg";

import House2 from "../../assets/house2.jpg";
import bed3 from "../../assets/bed3.jpg";
import bed4 from "../../assets/bed4.jpg";
import livingRoom from "../../assets/living-room.jpg";
import bath2 from "../../assets/bath2.jpg";

export const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected listings by City, State, & Zip based on views.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={bed1} alt="" />
        <img src={bed2} alt="" />
        <img src={kitchen} alt="" />
        <img src={bath} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">BeadRoom</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">BathRoom:</p>
                <p>7</p>
              </div>
            </div>

            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>565474</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$12556/Mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.
          </p>
          <button className="btn">view listing</button>
        </div>
      </div>

      {/* section */}

      <div className="container">
        <img className="order-2" src={bed3} alt="" />
        <img className="order-3" src={bed4} alt="" />
        <img className="span-3 image-grid-row-2 order-1" src={House2} alt="" />
        <img className="order-4" src={livingRoom} alt="" />
        <img className="order-5" src={bath2} alt="" />
        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.{" "}
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details span-3 order-6">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">BeadRoom</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">BathRoom:</p>
                <p>7</p>
              </div>
            </div>

            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>565474</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$12556/Mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
