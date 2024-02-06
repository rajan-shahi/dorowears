import "./App.css";
import Contact from "./components/Contact";
import FeaturedCollection from "./components/FeaturedCollection";
import HeroSection from "./components/HeroSection";
import NewProduct from "./components/NewProduct";
import Sales from "./components/Sales";
import Shop from "./components/Shop";
import TopSells from "./components/TopSells";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden">
      <HeroSection />

      <NewProduct />
      <Sales />
      <Shop />
      <TopSells />
      <FeaturedCollection />
      <Contact />
    </div>
  );
}

export default App;
