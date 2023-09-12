import React from "react";
import Myproject from "/public/ecomrce.png";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
const Hero = () => {
  return (
    <div className="bg-sky-100">
      <div className="   flex flex-col gap-y-10 justify-center items-center py-20 md:flex-row md:py-20 md:px-20 max-w-[1500px] m-auto">
        <div className=" flex-1">
          <Badge className="bg-sky-200 text-sky-700 ">70%</Badge>
          <h1 className="scroll-m-20 text-3xl sm:text-4xl my-3">
            New Season Arrival
          </h1>
          <p>Enjoy all new trends in the world.</p>
          <Button className=" duration-500 bg-sky-300 rounded text-sm group text-white h-[40px] w-auto] hover:bg-white hover:text-sky-300 hover:border border-sky-700 mt-7 px-10 ">
            <ShoppingBag className="mr-7 duration-400 group-hover:animate-bounce" />{" "}
            Shop now
          </Button>
        </div>
        <div className="">
          <div className="h-[300px] w-[300px] bg-sky-200 relative md:mx-[25px] w-150 rounded-full ">
            <img
              src={Myproject}
              alt="hero img"
              className=" absolute mt-5 ml-[-10px] w-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
