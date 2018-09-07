const wiring = require('./wiring');

const getRoute = () => {
    const router = require('express').Router();
    const Wiring = new wiring();

    router.get('/user/repo/:username', (req,res) => {
        Wiring.gitHubcontroller().getRepository(req,res);
    });
    return router;
};
module.exports = getRoute;