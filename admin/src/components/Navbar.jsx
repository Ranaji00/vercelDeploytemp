import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <div>
        <span className="font-bold text-3xl ">BYTE </span>
        <span className="text-blue-600 font-bold text-3xl">CART</span>
        <span className="text-zinc-600">admin console</span>
      </div>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
