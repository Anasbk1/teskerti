const express = require('express');
const cors = require('cors');
const user = require('./routes/user.js');
const ticket = require('./routes/ticket.js');
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/api',user)
app.use('/api',ticket)

app.listen(3001,()=>console.log('listening on port 3001'));

