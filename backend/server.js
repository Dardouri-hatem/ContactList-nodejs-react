const express = require('express');
const db = require('./config/database');
require('dotenv/config');
const verify = require('./middleware/verifyToken')
const Port = process.env.Port || 3000
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(cors());


app.use('/contacts',verify,require('./Routes/contactsRouter'));
app.use('/users',require('./Routes/usersRouter'))







app.listen(Port, (err)=>{
    if(err) console.log("Server is not Running")
    else console.log("Server is Running on Port : "+ Port)
})