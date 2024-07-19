const mongoose = require ('mongoose');

const url = "mongodb+srv://khantanveer6077:18040471804047@cluster0.rki85vw.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect(url)

.then((result) => {
   console.log('Connected to the mongodb');
  }).catch((err) => {
    console.error(err)
  });
  

  module.exports = mongoose;
   