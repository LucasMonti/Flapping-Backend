import { App } from "./app";

import config from "./config/config";

async function main() {
  const app = new App(config.PORT);
  await app.dbConnection();
  app.listen();
}

main();
