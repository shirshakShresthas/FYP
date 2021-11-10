const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

  
//rotes
const NewCriteriaRoute=require('./routes/hotelroute');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const UserRoute=require('./routes/user');
//const categoryRoutes = require('./routes/category');
const trekking=require('./routes/trekking');
const booking=require('./routes/booking');
//enviornment variable or constants.
env.config();


// mongodb connection
// mongodb+srv://final:<password>@cluster0.rhrgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rhrgo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});

app.use('/uploads',express.static('uploads'));
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api',NewCriteriaRoute)
app.use('/api',trekking)
app.use('/api',booking)
app.use('/api/user',UserRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}
);

