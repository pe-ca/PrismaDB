# PrismaDB

Practica 3 Semana 5 Launch X

## Comandos utiles

1. `npx prisma migrate dev --name init`: implementa los cambios realizados en `schema.prisma`
2. `node prisma/seed.js`: ejecuta la insercion de datos a la base
3. `node server.js`: monta el servidor en localhost:3000

## Dependencias
- Prisma (ORM)
- Express
- postgreSQL

## Endpoints

|Metodo|Endpoint|Request|Response|
|:--|:--|:--|:--|
|get|`/explorers`||lista de explorers con todos sus datos|
|get|`/explorers_2`||lista de explorers con todos sus datos|
|get|`/explorers/:id`|`:id` id de explorer|todos los datos de un explorer|
|get|`/explorers_2/:id`|`:id` id de explorer|todos los datos de un explorer|
|post|`/explorers`||crea un nuevo explorer|
|post|`/explorers_2`||crea un nuevo explorer|
|put|`/explorers/:id`|`:id` id de explorer|actualiza el campo mission del explorer|
|put|`/explorers_2/:id`|`:id` id de explorer|actualiza el campo name del explorer|
|delete|`/explorers/:id`|`:id` id de explorer|elimina un explorer|
|delete|`/explorers_2/:id`|`:id` id de explorer|elimina un explorer|