import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const id in cartItems) {
        if (cartItems[id] > 0) {
          tempData.push({
            _id: id,
            quantity: cartItems[id],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, i) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              className=" py-6 md:py-4 px-6 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={i}
            >
              <div className="flex items-start gap-6">
                <img
                  src={productsData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div>
                  <p className="text-sm md:text-xl font-medium">
                    {productsData.name}
                  </p>
                  <p className="text-xs sm:text-lg font-medium">
                    {productsData.description}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-lg font-bold">
                      {currency}
                      {productsData.price}
                    </p>
                  </div>
                </div>
              </div>


            <div>
              <span>QUANT: </span>
              <input
                className="border max-w-10 ml-2 text-lg font-bold sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        Number(e.target.value)
                      )
                }
                
              />

            </div>
            
              <img
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt=""
                onClick={() => updateQuantity(item._id, 0)}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end mt-20">

        <div className="w-full px-10 md:px-0 sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-xs md:text-sm my-8 px-4 md:px-8 py-3"
              onClick={() => navigate("/place-order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
