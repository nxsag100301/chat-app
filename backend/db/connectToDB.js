import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('Connected to DB')
  } catch (error) {
    console.log('Err connecting to DB', error.message)
  }
}

export default connectToMongoDB
