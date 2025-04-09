import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connectDb() {
  if (cached.conn) return cached.conn;
  if (!createCSPHeader.promise) {
    cached.promice = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose);
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.error("Error connecting to MongoDb :", error);
  }
  return cached.conn;
}
