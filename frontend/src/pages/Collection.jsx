import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import headphone from '../assets/headTrans.png';
import console from '../assets/ps5tp.png';
import mobile from '../assets/iphonetp.png';
import laptop from '../assets/mcbok.png';
import tablet from "../assets/ipadtp.png";
import camera from "../assets/camtp.png";
import Footer from "../components/Footer";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [colname, setColname] = useState('Gadgets');
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleCategory = (value) => {
    setCategory((prev) => (prev === value ? "" : value));
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let tempProducts = [...products];

    if (showSearch && search.trim()) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }

    if (subCategory.length > 0) {
      tempProducts = tempProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(tempProducts);
  };

  const sortProducts = () => {
    let sorted = [...filteredProducts];
    if (sortType === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      applyFilter(); // Reapply filter if "relevant"
      return;
    }
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch, category, subCategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  const categoryOptions = [
    { name: "Headphone", img: headphone },
    { name: "Laptop", img: laptop },
    { name: "Console", img: console },
    { name: "Smartphone", img: mobile },
    { name: "Tablet", img: tablet },
    { name: "Camera", img: camera },
  ];

  return (
    <>
      <div className="flex px-16 flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-full">
          <div className={`border border-gray-300 px-2 py-1 md:block`}>
            <p className="mb-3 text-xl font-medium">CATEGORIES</p>
            <div className="flex gap-2 justify-center items-center overflow-x-scroll md:gap-8">
              {categoryOptions.map(({ name, img }) => {
                const isSelected = category === name;
                return (
                  <div key={name} className="flex flex-col gap-4 justify-center items-center">
                    <span>{name}</span>
                    <img
                      src={img}
                      alt={name}
                      className={`cursor-pointer w-20 mb-1 py-1 md:w-40 object-contain ${
                        isSelected
                          ? "border-b-zinc-800 border-b-4 opacity-100"
                          : "border-transparent opacity-80 hover:opacity-90"
                      }`}
                      onClick={() => {
                        toggleCategory(name);
                        setColname(name);
                      }}
                      title={name}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex justify-between text-base sm:text-3xl mt-4 mb-4">
              <Title text1={"All"} text2={colname} />
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border-2 mt-8 border-gray-300 text-sm px-2"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            <div className="flex py-10 flex-wrap gap-12 w-full justify-center">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, i) => (
                  <ProductItem
                    key={i}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))
              ) : (
                <p className="text-center w-full text-gray-500">No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;
