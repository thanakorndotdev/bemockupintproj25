const service = require("../services/studyPlanService");

module.exports = {
    list: async function (req, res){
        const studyPlans = await service.getAllStudyPlan();
        res.json(studyPlans);
    }
}