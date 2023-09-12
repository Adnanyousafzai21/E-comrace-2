import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Quantity from "./ui/Quantity";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart";
import { useSelector } from "react-redux";

const Product = () => {
  const dispatch= useDispatch()
  const param = useParams();
  const [result, setResult] = useState([]); 
  const [cart, setcart]=useState({
    id:"" ,
    title:"",
    price:"",
    img:""
  })
  // console.log(cart.id+"cart data")
  const addtocart = () => {
     dispatch(addToCart(cart))
  };

  const getdata = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/products/${param.id}`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        const firstProduct = data[0];
        setcart({
          id: firstProduct._id,
          title: firstProduct.title,
          price: firstProduct.price,
          img: firstProduct.image,
        });
      }
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="flex justify-center md:px-8 py-10 lg:px-20 width-[100%] ">
        {result.length > 0
          ? result.map((result) => (
              <div
                key={result?._id}
                className=" w-[90%] md:w-[80%]  flex md:px-10 flex-col sm:flex-row lg:justify-between justify-center  items-center gap-x-5 gap-y-7 py-20 max-w-[1500px] m-auto"
              >
                <div className="flex-1">
                  <img
                    src={result?.image}
                    alt="slug pic"
                    className="md:h-[350px] h-[300px] w-[270px] "
                    width={350}
                    height={270}
                  />
                </div>
                <div className="p-2 flex flex-col gap-y-2 flex-1 w-[100%] md:w-[80%]">
                  <p className="text-sky-500 font-medium">{result?.title}</p>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      // checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>
                    <span className=" line-clamp-3 text-base">
                      {result?.description}
                    </span>{" "}
                  </p>
                  {/* color and size */}
                  <div className="flex mt-2 items-center border-b-2 pb-2  border-gray-100 ">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                      <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex my-3">
                      Quantity:
                      <span className="ml-5">
                        <Quantity />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <div>
                      <span className="font-bold">${result?.price}</span>
                      <span className="ml-2 line-through font-semibold">
                        ${result?.price}
                      </span>
                    </div>
                    <Button
                      onClick={addtocart}
                      className="bg-sky-300 rounded text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300"
                    >
                      Add to Cart <ShoppingCart className="ml-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : " page not found"}
      </div>
    </>
  );
};
export default Product;
