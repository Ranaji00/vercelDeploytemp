import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex py-3 items-center mb-3 px-[4%] justify-between">
      <div className="">
        <span className="font-bold game text-xl md:text-3xl ">BYTE</span>
        <span className="text-blue-600 font-bold text-xl md:text-2xl">CART</span>
        <span className="text-zinc-600 text-base md:text-lg">admin console</span>
      </div>
      <button
        onClick={() => setToken("")}
        className="bg-[#054895] text-white px-7 py-3 hover:bg-white transition-color duration-[890] hover:text-[#fc5151] hover:border-2 border-zinc-500 rounded-3xl w-18 text-xs md:text-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
