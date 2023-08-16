const {getAllUsers,getOneUser,insertUser,deleteUser,updateUser}=require('../controller/user');

const express = require('express');

const router = express.Router();

router.get('/user',getAllUsers);

router.get('/user/:id',getOneUser);

router.post('/user',insertUser);

router.delete('/user/:id',deleteUser);

router.put('/user/:id',updateUser);

module.exports=router;