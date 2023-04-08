const router  = express.Router()
import express from 'express'
import { getRoom, addRoom } from '../services/room.service.js'

router.get("/room", async function(req,res){
    const result = await getRoom()
    res.send(result)
})

router.post("/room", async function (req, res) {
    const data =  req.body;
    console.log(data)
    const result = await addRoom(data)
    res.send(result);
  });

  export default router


