const gitHubcontroller = require('./controller/gitHubController');

class Wiring{
    constructor(){

    }
    gitHubcontroller(){
        return gitHubcontroller();
    }
}
module.exports = Wiring;