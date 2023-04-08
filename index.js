
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
import bookingRouter from './routes/booking.route.js'
import roomRouter from './routes/room.route.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }); 
await client.connect(); 
console.log("Mongo is connected ✌️😊");

app.get("/", function (req, res) {
  res.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use(express.json())

// For creating Room 

// const room = [
//   {
//     "id": "1",
//     "fk": "11",
//     "roomName": "High",
//     "noOfSeats": "5",
//     "amentities": "Air Conditioner, Balcony, Smart TV, Telephone, Free Wifi, Iron Box, Water Heater",
//     "priceForeOneHour": "Rs.1000",
//     "status": "Booked"
//   },
//   {
//     "id": "2",
//     "fk": "12",
//     "roomName": "Medium",
//     "noOfSeats": "5",
//     "amentities": "Balcony, Smart TV, Telephone, Water Heater",
//     "priceForeOneHour": "Rs.500",
//     "status": "Booked"
//   },
//   {
//     "id": "3",
//     "fk": "13",
//     "roomName": "Low",
//     "noOfSeats": "5",
//     "amentities": "Balcony, Telephone, Water Heater",
//     "priceForeOneHour": "Rs.600",
//     "status": "Booked"
//   }
// ]

// // For Booking

// const booking = [
//   {
//     "id": "1",
//     "roomID": "10",
//     "customerName": "Abdul",
//     "date": "2022-11-10T15:21:16.321Z",
//     "startTime": "11:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": "2",
//     "roomID": "12",
//     "customerName": "Abdul",
//     "date": "2022-10-22T15:21:16.321Z",
//     "startTime": "10:00",
//     "endTime": "20:00"
//   },
//   {
//     "id": "3",
//     "roomID": "13",
//     "customerName": "Abdul",
//     "date": "2022-11-11T15:21:16.321Z",
//     "startTime": "09:00",
//     "endTime": "16:00"
//   }
// ]


app.use('/booking', bookingRouter)
app.use('/room', roomRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client }
