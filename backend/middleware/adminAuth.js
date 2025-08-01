import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized! Login again.",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ FIX: Correctly check the email property of the decoded object
    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Not Authorized! Login again.",
      });
    }

    next();
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

export default adminAuth;