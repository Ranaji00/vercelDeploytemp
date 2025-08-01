// import userModel from "../models/userModel.js";

// //ADD PRODUCT TO USER CART
// export const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId } = req.body;

//     const userData = await userModel.findById(userId);
//     const cartData = await userData.cartData;

//     if (cartData[itemId]) {
//       if (cartData[itemId]) {
//         cartData[itemId] += 1;
//       } else {
//         cartData[itemId] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId] = 1;
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Added to cart" });
//   } catch (e) {
//     console.log(e);
//     res.json({ success: false, message: e.message });
//   }
// };

// //UPDATE  USER CART
// export const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, quantity } = req.body;
//     const userData = await userModel.findById(userId);
//     const cartData = await userData.cartData;

//     cartData[itemId]= quantity;

//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Cart updated" });
//   } catch (e) {
//     console.log(e);
//     res.json({ success: false, message: e.message });
//   }
// };

// //GET USER CART
// export const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const userData = await userModel.findById(userId);
//     const cartData = await userData.cartData;

//     res.json({ success: true, cartData });
//   } catch (e) {
//     console.log(e);
//     res.json({ success: false, message: e.message });
//   }
//  };




import userModel from "../models/userModel.js";

//ADD PRODUCT TO USER CART
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {}; // Initialize if null

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

   await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to cart" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

//UPDATE  USER CART
export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    cartData[itemId] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart updated" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

//GET USER CART
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    const cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};
