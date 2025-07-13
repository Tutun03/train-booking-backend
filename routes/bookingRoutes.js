const express= require('express');

const Booking= require('../models/booking.js');
module.exports =function(io) {
  const router= express.Router();

router.post('/book',async(req,res)=>{
    console.log("Incoming booking data:", req.body);
    try{
        const booking =new Booking(req.body);
        await booking.save();
        io.emit("newBooking",booking); // <-- Emit to all connected clients
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

return router;
};