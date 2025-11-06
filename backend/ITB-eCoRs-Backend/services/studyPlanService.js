const repo = require("../repositories/studyPlanRepository");
const errResp = require('../errors/error-response');

module.exports = {
    getAllStudyPlan : async function() {
    try {
        const plans = await repo.findAll();

        if(!plans || !plans.length === 0) {
            return errResp.notFoundError('all','studyPlans');
        }
        return plans;
    } catch (err) {
        console.log('Error:',err.message);

        return err.status ? err : errResp.internal('Failed to get all study plan.');
        }
    }
}