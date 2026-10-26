import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.uri);
    console.log(`Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`database connection Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
