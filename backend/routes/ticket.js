const {getAlltickets,getOneticket,insertticket,deleteticket,updateticket}=require('../controller/ticket.js');

const express = require('express');

const router = express.Router();

router.get('/ticket',getAlltickets);

router.get('/ticket/:id',getOneticket);

router.post('/ticket',insertticket);

router.delete('/ticket/:id',deleteticket);

router.put('/ticket/:id',updateticket);

module.exports=router;