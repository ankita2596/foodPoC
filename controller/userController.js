const user = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class control{

    constructor(){

    }
    signUp(req,res){

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                res.status(500).json({
                    "status" : "error",
                    "error" : {
                        "errorcode" : "501",
                        "message"   : "Internal server error"
                    }
                });
            }     
        });  
            const newUser = new user({
                username: req.body.username,
                emailId: req.body.emailId,
                password: hash
            });
            newUser.save()
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        "status" : "error",
                        "error" : {
                            "errorcode" : "500",
                            "message": "Could not create new user"
                        }
                        
                    });
                });
            

    };
}