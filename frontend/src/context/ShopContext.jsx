import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); // { productId: quantity }
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1; // increment existing quantity
    } else {
      cartData[itemId] = 1; // new product with quantity 1
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          // backendUrl + "/api/cart/add",
           `${backendUrl}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
      } catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] -= 1;

      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          // backendUrl + "/api/cart/update",
           `${backendUrl}/api/cart/update`,
          { itemId, quantity: cartData[itemId] || 0 },
          { headers: { token } }
        );
      } catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        totalCount += cartItems[productId];
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity <= 0) {
      delete cartData[itemId]; // remove product if quantity zero or less
    } else {
      cartData[itemId] = quantity; // update quantity
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          // backendUrl + "/api/cart/update",
           `${backendUrl}/api/cart/update`,
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      const product = products.find((p) => p._id === productId);
      if (product && cartItems[productId] > 0) {
        totalAmount += product.price * cartItems[productId];
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get( `${backendUrl}/api/product/list`,);

      if (response.data.success) {
        console.log();
        
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const res = await axios.post(
        // backendUrl + "/api/cart/get",
         `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        setCartItems(res.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    removeFromCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
