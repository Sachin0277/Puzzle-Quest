const dotenv = require('dotenv');
const mongoose = require("mongoose");

// mongoose.connect(`mongodb://localhost:27017/UserRegistration`).then(() => {
//     console.log('Connection successful');
// }).catch((error) => {
//     console.log('Error connecting to MongoDB:', error.message);
// });


mongoose.connect(
    'mongodb+srv://sachin0278:sachin0278@cluster0.c1oet2r.mongodb.net/UserRegistration'
).then(
    () => {console.log("connected ")
}).catch((e) => {
    console.log(e);
})

    
module.exports = {mongoose};