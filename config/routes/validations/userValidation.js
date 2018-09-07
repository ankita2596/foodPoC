const validate = require('../model/userModel');

class userValidate{

    constructor(){

    }
    validateUpdate(req,res,next){
        if(!req.body.username){
            return res.status(400).send({
                "status" : "fail",
                "data" : {
                    "errorcode" : "400",
                    "message" : "username is required"
                }
            });
            
        }
        else                     if(!(req.body.password)){
            return res.status(400).send({
                "status" : "fail",
                "data" : {
                    "errorcode" : "400",
                    "message" : "password is required"
                }
            });
        };

    }
}