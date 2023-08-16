const {getAll,getOne,insert,update,dell}=require('../model/ticket.js');

module.exports={
    getAlltickets:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     getAll(callback)
    },
    getOneticket:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     getOne(req.params.id,callback)
    },
    insertticket:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     insert(req.body,callback);
    },
    updateticket:function(req,res){
        const callback=(error,result)=>{
            if(error){
                res.send(error);
            }else{
                res.send(result);
            }
        }
     update(req.params.id,req.body,callback);
    },
    deleteticket:function(req,res){
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