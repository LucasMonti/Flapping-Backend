import express, {Application} from 'express';
import db from "./db/connection";

export class App {

   private app: Application;


    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3002)
    }

    async dbConnection () {
        try {
            await db.authenticate();
            console.log('Database ON')
        } catch (error: any){
            throw new Error( error )
        }
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'))
    }
}
