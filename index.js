const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const PORT = 5000;

const app = express(); //instance

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('error', error.message);
        process.exit(1);
    }
};


//use all middlewares
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/seller'))
app.use('/api', require('./routes/buyer'))


connectDB(); //calling




app.listen(PORT, function(){
    console.log('application is running on http:localhost:5000');
    
})