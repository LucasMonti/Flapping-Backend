import { Request, Response } from "express";

import challengeStore from "../store/challenges";
import response from "../helpers/response";
import { IChallenge } from "interfaces/challenge";

class ChallengeController {
  public async allChallenges(req: Request, res: Response): Promise<void> {
    try {
      const challenges = await challengeStore.findAllChallenges();
      if (challenges !== undefined) {
        return response.success(
          res,
          "Challenges encontrados correctamente",
          200,
          {
            challenges,
          }
        );
      }
      return response.error(res, "Challenges no encontrado", 404);
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }
  public async addChallenge(req: Request, res: Response): Promise<void> {
    try {
      const newChallenge: IChallenge = req.body;

      const challenge = await challengeStore.addOneChallenge(newChallenge);

      return response.success(res, "Challenge cargado correctamente", 200, {
        challenge,
      });
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }
}

export default new ChallengeController();
