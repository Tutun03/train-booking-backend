const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://aniketacharya30:wbVvMkWIB7YNfqTZ@cluster0.mongodb.net/trainbookings?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', bookingRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});