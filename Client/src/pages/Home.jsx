import React from "react";
import SpecialProduct from "./SpecialProduct";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import Banner from "../components/Banner";
import OurServices from "./OurServices";
const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialProduct/>
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;