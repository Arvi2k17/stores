import * as express from 'express'
import {Server,createServer} from 'http'


export class AppServer {
	private readonly PORT = process.env.PORT || 25001;

	private app = express.application;

	private server = Server;

	constructor() {

	}

	private CreateServer() {
		const cors =require('cors')
	}
}