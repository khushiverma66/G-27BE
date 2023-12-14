const mongoose = require('mongoose');

async function connectToMongo() {
  await mongoose.connect('mongodb+srv://khushi1742be21:admin@cluster0.mhvctee.mongodb.net/').
  then(()=>{console.log("connect to mongo")});
}

module.exports={connectToMongo}