var surveyData = require("..data/surveyData");

module.exports = function(app) {
    app.get("/api/results", function(req, res){
        res.json(surveyData);
    })
}