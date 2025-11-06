const repo = require("../repositories/studyPlanRepository");
const errResp = require('../errors/error-response');

module.exports = {
    getAllStudyPlan : async function() {
        return await repo.findAll();
    }
}