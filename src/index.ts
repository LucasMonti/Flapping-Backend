import {App} from "./app";

async function main() {
    const app = new App(3002);
    await app.dbConnection();
    await app.listen();
}

main();
