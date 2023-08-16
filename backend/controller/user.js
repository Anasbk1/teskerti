const {getAll,getOne,insert,update,dell}=require('../model/user.js');

module.exports={
    getAllUsers:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     getAll(callback)
    },
    getOneUser:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     getOne(req.params.id,callback)
    },
    insertUser:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     insert(req.body,callback);
    },
    updateUser:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     update(req.params.id,req.body,callback);
    },
    deleteUser:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     dell(req.params.id,callback)
    }
    
}