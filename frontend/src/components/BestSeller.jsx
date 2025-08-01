import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestSeller);
    console.log(products);

    console.log(bestProducts)
    setBestSeller(bestProducts.slice(0, 7));
  }, [products]);

  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-10">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          BestSelling, Premium & Asthetic items by Our Trusted Dealers
        </p>
      </div>

      <div className="flex overflow-x-scroll gap-2 py-10 ">
        {bestSeller.map((item, i) => (
          <ProductItem
            id={item._id}
            key={i}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
