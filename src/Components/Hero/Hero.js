import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="enter your keyword.." />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
