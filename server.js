const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");
const corsOptions = { origin: "http://localhost:8081"};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

//explorers
app.get('/explorers', async (req, res) => {
  const allExplorers =  await prisma.explorer.findMany({});
  res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
  };
  const message = 'Explorer creado.';
  await prisma.explorer.create({data: explorer});
  return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.update({
    where: {
      id: id
    },
    data: {
      mission: req.body.mission
    }
  })
  return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.delete({where: {id: id}});
  return res.json({message: "Eliminado correctamente"});
});

//explorers_2
app.get('/explorers_2', async (req, res) => {
  const allExplorers =  await prisma.Explorer_2.findMany({});
  res.json(allExplorers);
});

app.get('/explorers_2/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.Explorer_2.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers_2', async (req, res) => {
  const explorer = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification,
  };
  const message = 'Explorer creado.';
  await prisma.Explorer_2.create({data: explorer});
  return res.json({message});
});

app.put('/explorers_2/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.Explorer_2.update({
    where: {
      id: id
    },
    data: {
      name: req.body.name
    }
  })
  return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers_2/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.Explorer_2.delete({where: {id: id}});
  return res.json({message: "Eliminado correctamente"});
});

//MissionCommander
app.get('/missioncommander', async(req, res) => {
  const allMC = await prisma.MissionCommander.findMany({});
  res.json(allMC);
});

app.get('/missioncommander/:id', async(req, res) => {
  const id = req.params.id
  const MCbyId = await prisma.MissionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(MCbyId);
});

app.post('/missioncommander', async(req, res) => {
  const newMC ={
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack,
    currentEnrollments: req.body.currentEnrollments,
    hasAzureCertification: req.body.hasAzureCertification,
  };
  const message = 'Mission Commander agregado';
  await prisma.MissionCommander.create({data: newMC});
  return res.json(message);
});

app.put('/missioncommander/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  await prisma.MissionCommander.update({
    where:{
      id: id
    },
    data: {
      mainStack: req.body.mainstack
    }
  });
  return res.json({message: "Actualizado MainStack correctamente"});
});

app.delete('/missioncommander/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.MissionCommander.delete({where: {id:id}});
  return res.json({message: "Eliminado correctamente"})
})