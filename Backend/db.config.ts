import mongoose from "mongoose";

export const connectDb = async () => {
  const URI = "mongodb://127.0.0.1:27017/test";
  await mongoose.connect(URI)
    .then(() => console.log('Database Connected!'))
    .catch(() => console.error('Error: Connection With Database Failed!'))
};


