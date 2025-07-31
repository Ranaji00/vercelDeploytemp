import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, description, price }) => {
  console.log()
  const { currency } = useContext(ShopContext);



  return (
    <Link to={`/product/${id}`}  className="py-4 px-2">
    <div  className="text-zinc-700 h-72 leading-3 w-64 border-black py-1 px-2 shadow-lg  shadow-black relative cursor-pointer">
      <div className="overflow-hidden flex justify-center w-64 ">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 w-40  h-[8.3rem] object-contain transition ease-in-out"
        />
      </div>
      <p className="pt-2 text-black pb-1 text-lg">{name}</p>
      <p className="text-xs h-8 tracking-tighter leading-3 font-medium ">{description}</p>
      <p className="text-lg text-black font-medium">
        {currency}
        {price}
       <span className="line-through ml-4">{currency}{price+134}</span> 
      </p>
      <Link to={`/product/${id}`}><div className=" px-2 py-3 text-center hover:text-[#054895] transition-all duration-[890] hover:border-zinc-600 border-2 hover:bg-white mt-1 w-24 rounded-lg text-white bg-[#054895]">Buy now</div></Link>
    </div >
      </Link>
  );
};

export default ProductItem;
