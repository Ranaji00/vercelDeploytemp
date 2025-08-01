import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
  if (!token) return;

  try {
    const res = await axios.post(
      `${backendUrl}/api/order/userorders`,
      {},
      { headers: { token } }
    );

    console.log("📦 API Response:", res.data); // 👈 add this

    if (res.data.success && res.data.orders.length > 0) {
      let allOrdersItem = [];

      res.data.orders.forEach((order) => {
        console.log("📄 Order:", order); // 👈 debug each order

        order.items.forEach((item) => {
          allOrdersItem.push({
            ...item,
            status: order.status,
            payment: order.payment,
            paymentMethod: order.paymentMethod,
            date: order.date,
          });
        });
      });

      console.log("🛒 All Items:", allOrdersItem); // 👈 debug mapped items

      setOrderData(allOrdersItem.reverse());
    } else {
      setOrderData([]);
    }
  } catch (error) {
    console.error("❌ Order loading error:", error);
    toast.error("Failed to load orders.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (<>
    <div className="border-t h-[100vh] pt-16 px-16 pb-16">
      
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading your orders...</p>
      ) : orderData.length === 0 ? (
        <p className="text-gray-400 text-center">No orders found.</p>
      ) : (
        orderData.map((item, i) => (
          <div
            key={i}
            className="py-4 px-4 border-t border-2 shadow-2xl border-zinc-500  border-b text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-start gap-6 text-sm">
              {item.image && item.image.length > 0 ? (
                <img
                  src={item.image[0]}
                  className="w-16 sm:w-20"
                  alt={item.name || "Product Image"}
                />
              ) : (
                <div className="w-16 sm:w-20 bg-gray-200 text-center">No Image</div>
              )}
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Date: {new Date(item.date).toDateString()}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Payment: {item.paymentMethod}
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    <Footer/>


</>
  );
};

export default Orders;
