// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProduct from "../components/RelatedProduct";

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     const product = products.find((item) => item._id === productId);
//     if (product) {
//       setProductData(product);
//       setImage(product.image[0]);
//     }
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* PRODUCT SECTION */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* PRODUCT IMAGES */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.image.map((item, i) => (
//               <img
//                 src={item}
//                 key={i}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt={`product-img-${i}`}
//                 onClick={() => setImage(item)}
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img src={image} className="w-full h-auto" alt="selected-product" />
//           </div>
//         </div>

//         {/* PRODUCT INFO */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl my-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} className="w-3.5" src={assets.star_icon} alt="star" />
//             ))}
//             <img className="w-3.5" src={assets.star_dull_icon} alt="star" />
//             <p className="pl-2">(122)</p>
//           </div>
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

//           <button
//             className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6"
//             onClick={() => addToCart(productData._id)}
//           >
//             ADD TO CART
//           </button>

//           <hr className="mt-8 sm:w-4/5" />

//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original Product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* DESCRIPTION AND REVIEW SECTION */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border px-5 py-3 text-sm">Description</b>
//           <p className="border px-5 py-3 text-sm">Reviews (122)</p>
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Repudiandae dolor, consequuntur totam nostrum praesentium
//             distinctio accusamus assumenda architecto alias veritatis autem.
//           </p>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos
//             deleniti corrupti dolore commodi deserunt, dicta ipsam ex nemo
//             animi.
//           </p>
//         </div>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <RelatedProduct
//         category={productData.category}
//         subCategory={productData.subCategory}
//       />
//     </div>
//   ) : (
//     <div className="opacity-0">Loading...</div>
//   );
// };

// export default Product;




import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  // Get current quantity in cart for this product
  const quantity = cartItems[productId] || 0;

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* PRODUCT SECTION */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* PRODUCT IMAGES */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, i) => (
              <img
                src={item}
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`product-img-${i}`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="selected-product" />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl my-2">{productData.name}</h1>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="w-3.5" src={assets.star_icon} alt="star" />
            ))}
            <img className="w-3.5" src={assets.star_dull_icon} alt="star" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          {/* Add to Cart / Quantity Controls */}
          {quantity === 0 ? (
            <button
              className="bg-[#054895] text-white px-8 py-3 text-sm active:bg-gray-700 mt-6"
              onClick={() => addToCart(productData._id)}
            >
              ADD TO CART
            </button>
          ) : (<>
            <div className="flex mt-4  items-center gap-4 ">

              <div className="flex gap-4">



                <button
                  className="bg-gray-300  text-black px-3 py-1 rounded"
                  onClick={() => removeFromCart(productData._id)}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="bg-gray-300 text-black px-3 py-1 rounded"
                  onClick={() => addToCart(productData._id)}
                >
                  +
                </button>
              </div>

              <Link to={'/cart'}>
                <button className="bg-[#054895] text-white px-8 py-3 text-sm active:bg-gray-700 ">
                  Buy Now
                </button></Link>
            </div>


          </>
          )}

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION AND REVIEW SECTION */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae dolor, consequuntur totam nostrum praesentium
            distinctio accusamus assumenda architecto alias veritatis autem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos
            deleniti corrupti dolore commodi deserunt, dicta ipsam ex nemo
            animi.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;

