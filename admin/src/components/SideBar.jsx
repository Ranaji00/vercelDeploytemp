import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-sm md:text-[15px] ">
        <NavLink
          className="flex items-center hover:bg-[#054895] hover:text-white md:text-xl gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
          to="/add"
        >
          <img className="w-5 bg-white h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          className="flex items-center bg-white hover:bg-[#054895] hover:text-white md:text-xl gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
          to="/list"
        >
          <img className="w-5 bg-white  h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          className="flex  hover:bg-[#054895] hover:text-white md:text-xl items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
          to="/order"
        >
          <img className="w-5 bg-white h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
