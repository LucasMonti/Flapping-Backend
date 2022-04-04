import { Router } from "express";

import challengeController from "../controllers/challenges";

class ChallengeRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", challengeController.allChallenges);
    this.router.post("/", challengeController.addChallenge);
  }
}

export default new ChallengeRoutes().router;
