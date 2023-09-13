
import React, { useState } from "react";
import frame from "/public/Frame 11.png";
import {Link}from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems =  useSelector((state) => state.cart.items);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between px-7 lg:px-20 py-4 items-center relative z-[100] max-w-[1500px] m-auto">

      <img src={frame} alt="logo " className="w-[170px]" />

      <ul className={`duration-500 lg:flex absolute lg:static lg:justify-center lg:mt-auto ${open?'mt-[360px] opacity-[100%]':'mt-[-380px] opacity-0 '} w-full left-0 gap-10  lg:gap-3 bg-white z-[10] py-5 lg:py-0 pl-11  lg:mt-auto lg:flex-row lg:w-auto lg:opacity-100 `}>
       <Link to={"/"}><li className="my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-100 cursor-pointer   lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 ">Home</li></Link> 
       <Link to={"/products"}><li className="my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-100 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 ">Products</li></Link> 
       <Link to={"/categorey/women"}><li className="my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-100 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 ">Categories</li></Link> 
       <Link to={"/contact"}><li className="my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-100 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 ">Contact us</li></Link> 
      </ul>
      <Link to={"/cart"}>
      <div className="relative w-8 h-8 bg-sky-100 rounded-full flex justify-center items-center ">
        <ShoppingCart className="w-4 h-4" />
        {cartItems.length > 0 ? <span className=" text-red-600 -mt-8 -mr-5 rounded-full bg-sky-500 w-5 font-semibold h-5 flex justify-center items-center p-2 absolute ">{cartItems.length}</span>:" "}
      </div>
      </Link>
      <div className=" lg:hidden text-sky-300">
       { open?<X onClick={()=>{setOpen(!open)}}/> :<Menu onClick={()=>{setOpen(!open)}}/>}
         
      </div>
    </div>
  );
};

export default Navbar;