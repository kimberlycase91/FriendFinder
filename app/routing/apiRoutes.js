var friends = require("../data/friends");
var htmlRoutes = require("../routing/htmlRoutes");

console.log(friends)
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var matchedFriend = [];
        var newFriend = req.body;
        var totalDifference = 0;
        for (var i = 0; i < friends.length; i++) {
            var friendsData = friends[i];
            totalDifference = 0;
            for (var j = 0; j < friendsData.scores.length; j++) {
                totalDifference += Math.abs(newFriend.scores[j] - friendsData.scores[j]);
            }
            matchedFriend.push({
                name: friendsData.name,
                photo: friendsData.photo,
                totalDifference: totalDifference
            });
        }
        
        matchedFriend.sort(function (a, b) {
            return parseFloat(a.totalDifference) - parseFloat(b.totalDifference);
        })
        res.json(matchedFriend[0]);
    });
}
