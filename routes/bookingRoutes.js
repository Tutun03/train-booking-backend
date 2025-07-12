const express= require('express');
const router=express.Router();
const Booking= require('../models/booking.js');
router.post('/book',async(req,res)=>{
    console.log("Incoming booking data:", req.body);
    try{
        const booking =new Booking(req.body);
        await booking.save();
        res.status(201).json({message: 'Booking saved successfully'});

    }
    catch(err)
    {
      res.status(500).json({error: err.message})
    }
});


router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports=router;