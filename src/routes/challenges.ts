import { Router } from "express";

import challengeController from "../controllers/challenges";
import validateChallenge from "../middlewares/validate-challenge";
import validateId from "../middlewares/validate-id";

class ChallengeRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get(
      "/",
      validateChallenge.filtersFindChallenges,
      challengeController.allChallenges
    );
    this.router.get(
      "/:id",
      validateId.typeId,
      challengeController.oneChallenge
    );
    this.router.post(
      "/",
      validateChallenge.addChallenge,
      challengeController.addChallenge
    );
    this.router.delete(
      "/:id",
      validateId.typeId,
      challengeController.removeChallenge
    );
  }
}

export default new ChallengeRoutes().router;
