import Http, { RequestListener } from "http";
import Koa from "koa";

/**
 * @class Server
 */
export class Server {
	private app: Koa;
	private httpServer: Http.Server;
	private port: number;

	constructor(port: number) {
		this.port = Number(port);
		this.app = new Koa();

		const requestListener: RequestListener = this.app.callback();

		this.httpServer = new Http.Server(requestListener);
	}

	public run(): Promise<void> {
		return new Promise<void>(async (resolve) => {
			await this.configure();

			this.httpServer.listen(this.port, () => {
				resolve();
			});
		});
	}

	public stop(): Promise<void> {
		return new Promise<void>(async (resolve) => {
			if (!this.isRunning) {
				resolve();

				return;
			}

			this.httpServer.close(() => {
				resolve();
			});
		});
	}

	public get instance(): Http.Server {
		return this.httpServer;
	}

	public get isRunning(): boolean {
		return this.httpServer.listening;
	}

	private async configure(): Promise<void> {

	}
}
