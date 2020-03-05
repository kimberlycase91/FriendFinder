var allFriends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(allFriends);
    })

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        allFriends.push(newFriend);
        res.json(newFriend);
    })
}
