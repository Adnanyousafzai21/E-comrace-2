import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Contact from "./Contact";
import Categbtn from "./ui/Categbtn";


const Home = () => {
  return (
    <div>
      <Hero />
      <Categbtn/>
      <Contact />
     
    </div>
  );
};

export default Home;
