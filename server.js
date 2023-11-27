import { fastify  } from "fastify";
// import { DatabaseMemory } from "./database-memory.js"
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres()

server.post("/videos", async (request, reply) => {  
    const { title, description, duration } = request.body;

   await database.create({
        title,
        description,
        duration
    })
    
    return reply.status(201).send()
})


server.get("/videos", async (request) => {
    const search = request.query.search;
    const videos = await database.list(search);
    return videos; //por padrão aq o status vai ser 200
})


server.put("/videos/:id", async (request, reply) => {
    const videoID = request.params.id;
    const { title, description, duration } = request.body;

    await database.update(videoID, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})


server.delete("/videos/:id", async (request,reply) => {
    const videoID = request.params.id;

    await database.delete(videoID);
    return reply.status(204).send()
})

server.listen({
    host:'0.0.0.0',
    port: process.env.PORT ?? 3000
})