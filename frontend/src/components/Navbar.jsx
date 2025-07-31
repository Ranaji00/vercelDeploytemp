import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoLogOutSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoHome } from "react-icons/io5";import { BsSmartwatch } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";
import { FaMailBulk } from "react-icons/fa";







const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    showSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    userName
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex relative z-10 md:px-16 item-center justify-between py-5 font-medium px-4 ">
      <Link to={"/"}>
        <div className="font-bold text-2xl">

          {/* naye fonts add karne hai  */}
          <span className="game text-3xl md:text-4xl font-normal ">BYTE</span><span className="text-blue-800 text-2xl font-bold md:text-3xl">CART</span>



        </div>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>GADGETS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className=" ">

        <div className="flex items-center gap-6">
          {/* search gola */}
          <Link to={"/collection"}>
            <img
              src={assets.search_icon}
              className="md:w-6 w-4 cursor-pointer"
              onClick={() => { setShowSearch(!showSearch) }}
              alt=""
            />

          </Link>


          {/* pofrile icon  */}

          <div className="group relative   ">
            <img
              src={assets.profile_icon}
              className="md:w-6 transition-all duration-700  w-4 cursor-pointer"
              alt=""
              onClick={() => (token ? null : navigate("/login"))}
            />
            {/* DROPDOWN */}
            {token && (
              <div className="group-hover:block transition-all duration-700  hidden h-fit  md:w-44 rounded-lg border-2 bg-[#054895]  absolute dropdown-menu right-0  z-10">
                <div className="flex flex-col gap-1   text-white rounded">
                  <p
                    className="cursor-pointer px-6 py-3 w-full hover:text-[rgb(5,72,149)] md:text-lg hover:bg-white flex gap-4 items center">
                    <span className="text-3xl"><FaUserCircle /></span><span>{userName || "login"}  </span>
                  </p>
                  <p

                    onClick={() => navigate("/orders")}
                    className="cursor-pointer px-6 py-3 hover:text-[#054895] hover:bg-white  flex gap-4 items center"
                  >
                    <span className="text-2xl"><ImCart /></span><span>Orders</span>

                  </p>



                  <p onClick={logout} className="cursor-pointer px-6 py-3 hover:text-red-500 hover:bg-white  flex gap-4 items center">
                    <span className="text-2xl"><IoLogOutSharp /></span><span>Logout</span>

                  </p>
                </div>

              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 md:w-7" alt="" />

            {getCartCount() > 0 ? <p className="absolute right-[-8px] bottom-[-8px] w-4  h-4 md:w-6 md:h-6  flex justify-center items-center bg-black text-white aspect-square rounded-full text-[8px] md:font-bold md:text-[10px]">
              {getCartCount()}
            </p> : ""}


          </Link>

          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
            alt=""
          />
        </div>

        {/* SIDEBAR MENU FOR SMALL SCREEN */}
        {/* <div
          className={`fixed top-0 md:hidden right-0 bottom-0 transition-all ${visible ? "translate-x" : "translate-x-full"
            }`}
        > */}



        <div className={`flex ${visible ? "" : "translate-x-full"} text-white backdrop-brightness-50  backdrop-blur-md fixed transition-all duration-700 z-30  flex-col top-0 right-0 w-64 h-screen   text-2xl font-semibold`}>
          <div className={` h-screen ${visible ? "" : "translate-x-full"} transition--all duration-700 top-0 right-0 w-64 absolute backdrop-opacity-0 backdrop-blur-2xl bg-transparent  -z-20`}></div>
          <div
            onClick={() => setVisible(false)}
            className="flex gap-8 items-center p-3 cursor-pointer"
          >
            <span className="text-lg "><ImCross /></span>
            <p className="game text-3xl">BYTE<span className="text-2xl text-[rgb(5,72,149)]">CART</span></p>
          </div>

          <div className="flex flex-col text-2xl font-normal">

            <Link
              onClick={() => setVisible(false)}
              to={"/"}
              className="py-2 flex gap-4  items-center  pl-6 border"
            >
              <span className="">
                <IoHome />
              </span >
              <span className="">HOME</span>

            </Link>


            <Link
              onClick={() => setVisible(false)}
              to={"/collection"}
              className="py-2  flex gap-4 items-center  pl-6 border"
            >
              <span className=" ">
                <AiFillProduct />
                
              </span >
              <span className="">GADGETS</span>
            </Link>
            <Link
              onClick={() => setVisible(false)}
              to={"/about"}
              className="py-2 flex gap-4 items-center  pl-6 border"
            >
              <span className="">
                <TfiComments />
              </span >
              <span className="">ABOUT ME</span>
            </Link>
            <Link
              onClick={() => setVisible(false)}
              to={"/contact"}
              className="py-2 flex gap-4 items-center  pl-6 border"
            >
              <span className="">
                <FaMailBulk />
              </span >
              <span className="">CONTACT ME</span> 
            </Link>



          </div>
        </div>




        {/* </div> */}
      </div>

    </div>
  );
};

export default Navbar;
