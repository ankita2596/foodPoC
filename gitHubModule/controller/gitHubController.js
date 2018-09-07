const Github = require('github-api');
const lodash = require('lodash');

class gitHubController {

    constructor(){

    }
    getRepository(req,res){
        let username = req.params.username;
        const gh = new Github;
        let user = gh.getUser(username);
        var reposName = [];
        user.listRepos(function(err,repos){
            lodash.forEach(repos,function(repo){
                reposName.push(repo.name);
            });
            res.send(reposName);
        });

    }
}
module.exports = gitHubController;