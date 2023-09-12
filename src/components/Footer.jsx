// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-sky-100 py-8 w-max-[1500px]">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-20 ">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-sky-300 ">About Us</h3>
              <p className="text-sm text-gray-600 mt-2">
                We are a leading e-commerce store providing high-quality products
                to our customers.
              </p>
            </div>
  
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-sky-300">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/categories">Categories</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-sky-300">Contact Us</h3>
              <p className="text-sm text-gray-600 mt-2">
                Email: info@example.com
              </p>
              <p className="text-sm text-gray-600">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-600">
           Created by <span className="text-sky-500">Adnan Rafiq Yousafzai</span> 
            © Copyright 2023. All rights reserved.
          </div>

      </footer>
    );
  };
  
  export default Footer;
  