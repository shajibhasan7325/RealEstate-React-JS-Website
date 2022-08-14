import React from "react";
import Best from "./Components/Best/Best";
import { Featured } from "./Components/Featured/Featured";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
