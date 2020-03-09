var friends = require("../data/friends");
var htmlRoutes = require("../routing/htmlRoutes");

console.log(friends)
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(friends);
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(friends);
        console.log("looking for match");
        console.log(friends);
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
        console.log(matchedFriend);
        
        matchedFriend.sort(function (a, b) {
            return parseFloat(a.totalDifference) - parseFloat(b.totalDifference);
        })
        console.log(matchedFriend[0]);
        console.log(friends)
        // friends.push(newFriend);
        res.json(matchedFriend[0]);
    });
}
