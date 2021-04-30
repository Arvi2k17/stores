import * as express from 'express'
import {Server,createServer} from 'http'
import * as colors from 'colors';

export class AppServer {
	private readonly PORT = process.env.PORT || 25001;

	private app : express.Application;

	private server : Server;

	constructor() {
		this.initServer()
	}

	private async initServer(){
		this.CreateServer()
		await this.addRoutes();
		// await this.dbSetup();

		this.listen()
	}

	private CreateServer() {
		const cors =require('cors');
		const fileUpload = require('express-fileupload');

		this.app = express();
		
		this.app.use(cors());
		this.app.options('*', cors());

		this.app.use(
			fileUpload({
				createParentPath:true
			})
		)

		this.server = createServer(this.app)
	}

	private async addRoutes() {
		// const startupCtrl: StartupController = new StartupController();
	
		this.app.get('/', (req, res) => {
		  res.send({ message: `Welcome to Service Middleware App!` });
		});
	}

	private listen (){
		this.server.listen(this.PORT, () => {
			console.log(colors.green(`Server listening on http://localhost:${this.PORT}`));
		  });
	}

	public getApp(): express.Application {
		return this.app;
	  }
}