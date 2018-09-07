const User = require('../controller/userController');
const validation = require('../validations/userValidation');

const getRoute = () => {
    const router = require('express').Router();
    const Validation = new validation;
    const user = new User;

    router.post('/signUp',Validation.validateUpdate,(req,res,next)=> {
        user.signUp(req,res,next);
    });
    return router;
}
module.exports = getRoute;
