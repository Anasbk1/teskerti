const {getAllUsers,getOneUser,insertUser,deleteUser,updateUser,login}=require('../controller/user');

const express = require('express');

const router = express.Router();

router.get('/user',getAllUsers);

router.get('/user/:email',getOneUser);

router.post('/user',insertUser);

router.post('/user/login/:email',login);

router.delete('/user/:id',deleteUser);

router.put('/user/:id',updateUser);

module.exports=router;