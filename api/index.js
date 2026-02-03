import { connectDB } from "../db/db.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    return res.status(200).json({
      success: true,
      message: "✅ API & DB both working",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
