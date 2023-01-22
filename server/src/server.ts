import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"
import environment from './lib/environment'


const app = Fastify()

app.register(cors)
app.register(appRoutes)

//prod = http://192.168.15.14:3333
//dev = http://localhost:3333
const env = 'prod'
const opt = environment(env)

app.listen(opt).then(() => {
  console.log(`HTTP server running on environment: ${env}`)
  console.log(`Adress: http://${opt.host+':'+opt.port}`)
})