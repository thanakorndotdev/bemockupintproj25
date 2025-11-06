const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
    findAll: async function() {
        const rows = await prisma.study_plans.findMany();
        return rows.map((r) => ({
            id: r.id,
            planCode: r.plan_code,
            nameEng: r.name_eng,
            nameTh: r.name_th,
        }));
    },
};