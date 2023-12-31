import React, { Fragment } from "react";
import AboutUs from "../components/Home/AboutUs";
import Faq from "../components/Home/Faq";
import Home from "../components/Home/Home";
import Gallary from "../components/Home/Gallary";
import Background from "../components/Background/Background";
import { TabChange } from "../utils/dynamic-title-function.js"

const HomePage = () => {
  TabChange('Elsoc | NIT Hamirpur')
  return (
    <Fragment>
      <Background />
      <Home />
      <div className="bg-black bg-opacity-70">
        <AboutUs />
        <Gallary />
        <Faq />
      </div>
    </Fragment>
  );
};

export default HomePage;
