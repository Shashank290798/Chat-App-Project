const express= require('express');

const chat =express();

const cors = require('cors');

const bodyparser =require('body-parser');

const sequelize = require('./util/database');

const userRoutes = require('./routes/chat');

const user = require('./models/user');

chat.use(cors());

chat.use(bodyparser.json());

chat.use(userRoutes);

sequelize
.sync()
// .sync({force:true})
.then(result =>{
    chat.listen(3000);
})
.catch(err =>{
    console.log(err)
})