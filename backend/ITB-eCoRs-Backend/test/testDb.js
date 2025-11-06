const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
    const allPlans = await prisma.study_plans.findMany();
    console.log('📋 Study Plans:');
    console.table(allPlans);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
