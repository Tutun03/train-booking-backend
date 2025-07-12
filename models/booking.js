const mongoose=require('mongoose');
const bookingSchema = new mongoose.Schema({
  name: String,
  trainNo: String,
  status: {
    type: String,
    default: 'Pending'
  }
});
module.exports=mongoose.model('Booking',bookingSchema);