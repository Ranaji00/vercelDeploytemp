import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, description, price }) => {
  console.log()
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} >
    <div  className="text-gray-700 leading-3 w-64 py-2 px-2  border-2 relative cursor-pointer">
      <div className="overflow-hidden flex justify-center w-64 ">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 w-40 h-32 object-contain transition ease-in-out"
        />
      </div>
      <p className="pt-2 pb-1 text-lg">{name}</p>
      <p className="text-md font-light ">{description}</p>
      <p className="text-lg font-medium">
        {currency}
        {price}
      </p>
      <Link to={`/cart/`}><div className="border-2 px-2 py-2 mt-2 w-24 rounded-lg text-white bg-[#054895]">Buy now</div></Link>
    </div >
      </Link>
  );
};

export default ProductItem;
