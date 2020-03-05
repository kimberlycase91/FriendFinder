var surveyData = require("..data/sur");

module.exports = function(app) {
    app.get("/api/results", function(req, res){
        res.json(surveyData);
    })
}