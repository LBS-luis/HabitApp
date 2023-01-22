import * as os from 'os';
import { FastifyListenOptions } from 'fastify';

let ipv4: string 
const interfaces = os.networkInterfaces()

//percorre as chaves de ip da maquina até achar o ipv4
const getIpv4 = () => {Object.keys(interfaces).forEach((interfaceName: any) => {
  interfaces[interfaceName]?.forEach((address: any) => {
    if (address?.family === 'IPv4' && !address?.internal) {
      ipv4 = address?.address
    }})
})}




export default function environment(env: string):FastifyListenOptions {
  getIpv4() 

  let dynamicEnvironment = {
    port: 3333,
    host: 'localhost'
  } as FastifyListenOptions

  if (env == 'prod') {
    dynamicEnvironment = {
      port: 3333,
      host: ipv4
    }
  } else if (env == 'dev') {
    dynamicEnvironment = {
      port: 3333,
      host: 'localhost'
    }
  }

  return dynamicEnvironment 
}