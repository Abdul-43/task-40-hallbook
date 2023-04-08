const router  = express.Router()
import express from 'express'
import { getAllbookings, getBookingStatus, getCustomerStatus, addBookings, getRoomDetails } from '../services/booking.service.js'

router.get("/", async function(req,res){
    const result = await getAllbookings()
    res.send(result)
})

router.get("/status", async function(req,res){
    const result = await getBookingStatus()
      console.log(result)
    res.send(result)
})

router.get("/customerstatus", async function(req,res){
    const result = await getCustomerStatus()
      console.log(result)
    res.send(result)
})

router.post("/", async function (req, res) {

    const {id,roomID,customerName,date,startTime,endTime} =  req.body;
    const roomDetails = await getRoomDetails(date,startTime,endTime)
    console.log(roomDetails,"roomdetails")
    if(roomDetails){
        res.send({msg:"Already Booked"})
    }else{
        const result = await addBookings({
            id:id,
            roomID:roomID,
            customerName:customerName,
            date:date,
            startTime:startTime,
            endTime:endTime
        });
        res.send(result);
    }

  });


export default router
