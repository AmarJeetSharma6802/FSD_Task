import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));

const db_Name = process.env.DB_ATLES

const connectDB = async () => {
  try {
    await mongoose.connect(db_Name, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Atlas connected');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};;
connectDB();

const User = mongoose.model('userData', {
    name: String,
    email: String,
});

// const findUsers = async () => {
//   const users = await User.find({ username: { $regex: /^je/, $options: 'i' } });
//   console.log(users);
// };


app.get("/userDetails",async(req,res)=>{
    const userDetails = await User.find({}).select("name email");
  res.json(userDetails);

})


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
