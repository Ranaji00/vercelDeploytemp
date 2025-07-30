


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

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [colname , setcolname] =useState('Collection');

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(""); // single selected category now (string)
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle category (single select)
  const toggleCategory = (value) => {
    if (category === value) {
      // If clicked same category, deselect it (optional)
      setCategory("");
    } else {
      setCategory(value);
    }
  };

  // Your existing toggle for subCategory (multi-select)
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((p) => p.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((p) => [...p, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      productsCopy = productsCopy.filter((item) => item.category === category);
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
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


    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">



      {/* FILTER OPTIONS */}

      <div className="min-w-full">

        
        {/* <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p> */}
        {/* CATEGORY FILTER WITH IMAGES (single select) */}

        <div
          className={`border border-gray-300 px-2 py-1 md:block`}>


        <p className="mb-3 text-xl font-medium">CATEGORIES</p>
          <div className="flex gap-2 justify-center items-center overflow-x-scroll md:gap-8">


            
            
            {categoryOptions.map(({ name, img }) => {
              const isSelected = category === name;
              return (

                <img
                  key={name}
                  src={img}
                  alt={name}
                  className={`cursor-pointer w-20 mb-1 py-1  md:w-40 object-contain  ${
                    isSelected
                      ? "border-b-zinc-800 border-b-4 opacity-100"
                      : "border-transparent opacity-80 hover:opacity-90"
                  }`}
                  onClick={() =>{  toggleCategory(name)
                     setcolname(name)} }

                  title={name}
                />
              );
            })}
          </div>
        </div>




        {/* SUBCATEGORIES FILTER (unchanged) */}
        {/* <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"laptopasc"}
                onChange={toggleSubCategory}
              />{" "}
              laptop accesories
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Smartphoneasc"}
                onChange={toggleSubCategory}
              />{" "}
              smartphone accesories
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Consoleasc"}
                onChange={toggleSubCategory}
              />{" "}
              console accesories
            </p>
          </div>
        </div> */}




      {/* RIGHT SIDE */}
      <div className="flex-1 w-full">
        <div className="flex justify-between text-base sm:text-3xl mt-4 mb-4">
         
          <Title text1={"All"} text2={colname} />

          {/* PRODUCT SORT */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
            >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, i) => (
            <ProductItem
            key={i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
          </div>
  );
};

export default Collection;
