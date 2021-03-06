const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
        username: 'ajolonauta',
        mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
        username: 'ajolonauta1',
        mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
        username: 'ajolonauta2',
        mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
        username: 'ajolonauta3',
        mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
        username: 'ajolonauta4',
        mission: 'Node'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

(async function main() {
  try {
    const woopa = await prisma.Explorer_2.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
        lang: 'javascript',
        missionCommander: 'woopaMC',
        enrollments: 1,
        hasCertification: true
      },
    });

    const woopa1 = await prisma.Explorer_2.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
        lang: 'java',
        missionCommander: 'woopaMC1',
        enrollments: 1,
        hasCertification: true
      },
    });

    console.log('2 registros insertados correctamente');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

(async function main() {
  try {
    const mc1 = await prisma.MissionCommander.upsert({
      where: { name: 'WoopaMC1' },
      update: {},
      create: {
        name: 'WoopaMC1',
        username: 'mc1',
        mainStack: 'node',
        currentEnrollments: true,
        hasAzureCertification: true
      },
    });

    const mc2 = await prisma.MissionCommander.upsert({
      where: { name: 'WoopaMC2' },
      update: {},
      create: {
        name: 'WoopaMC2',
        username: 'mc2',
        mainStack: 'java',
        currentEnrollments: true,
        hasAzureCertification: true
      },
    });

    console.log('2 registros insertados correctamente');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();