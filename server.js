const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const http = require("http");
const { Server }= require("socket.io");
const app = express();
const server= http.createServer(app);
const io= new Server(server,{
  cors:{
    origin: "*",
  }
})
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://aniketacharya30:RqadgAgLW5UuXjp4@cluster0.eecxnyp.mongodb.net/trainbookings?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  //socket logic 
io.on("connection", (socket)=>{
  console.log("New client connected");
})
app.use("/api", bookingRoutes(io)); // pass io to the route!

app.listen(5000, () => {
  console.log('Server started on port 5000');
});