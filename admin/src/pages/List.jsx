import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";


const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`,);
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        // backendUrl + "api/product/remove",
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-zinc-800">All Products Lists</p>
      <div className="flex  px-4 py-4 flex-col md:w-[70vw] w-[90vw] gap-3">
        {/* LIST TABLE TITLE */}

        <div className="hidden py-2 md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center  px-2 border text-lg bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        

        {/* PRODUCT LIST */}
        {list.map((item, i) => (
          <div
            key={i}
            className="grid gap-2 md:gap-3 border-zinc-500 shadow-2xl grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center  py-4 px-4 border text-sm"
          >


            <img className="w-16 " src={item.image[0]} alt="" />
            <p className="">{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {(item.price).toLocaleString('en-IN')}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right col-span-2 justify-end md:col-span-1 md:text-center text-xl text-red-600 pl-36 cursor-pointer"
            >
              <RiDeleteBin5Line/>
            </p>


          </div>
        ))}
      </div>
    </>
  );
};

export default List;
