import Fastify from "fastify"
import cors from '@fastify/cors'
import prisma from "lib/prisma"
import appRoutes from "lib/routes"

const app = Fastify()


app.register(cors)
app.register(appRoutes)
const port = { port: 3333 } // server port



app.listen(port) //server setup
   .then(() => console.log(`HTTP server running on http://localhost:${port.port}`))