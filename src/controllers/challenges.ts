import { Request, Response } from "express";

import challengeStore from "../store/challenges";
import response from "../helpers/response";
import { IChallenge } from "interfaces/challenge";

class ChallengeController {
  public async allChallenges(req: Request, res: Response): Promise<void> {
    try {
      //PAGINADO
      const page = req.query.page ? Number(req.query.page) : undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const offset = page && limit ? (page - 1) * limit : undefined;

      //FILTRO EN BUSQUEDA
      const status = req.query.status ? Number(req.query.status) : undefined;
      const referente = req.query.referente
        ? Number(req.query.referente)
        : undefined;

      const challenges = await challengeStore.findAllChallenges(
        offset,
        limit,
        status,
        referente
      );
      if (challenges.length !== 0) {
        return response.success(
          res,
          "Challenges encontrados correctamente",
          200,
          challenges
        );
      }
      return response.error(res, "Challenges no encontrados", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }

  public async oneChallenge(req: Request, res: Response): Promise<void> {
    try {
      const idch = parseInt(req.params.id);
      const challenge = await challengeStore.findOneChallenge(idch);
      if (challenge !== undefined) {
        return response.success(
          res,
          "Challenge encontrado correctamente",
          200,
          challenge
        );
      }
      return response.error(res, "Challenge no encontrado", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }

  public async addChallenge(req: Request, res: Response): Promise<void> {
    try {
      const newChallenge: IChallenge = req.body;

      if (newChallenge.status_id === undefined) {
        newChallenge.status_id = 1;
      }

      const challenge = await challengeStore.addOneChallenge(newChallenge);

      return response.success(res, "Challenge cargado correctamente", 200, {
        challenge,
      });
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }

  public async removeChallenge(req: Request, res: Response): Promise<void> {
    try {
      const idch = parseInt(req.params.id);

      const challengeDelete = await challengeStore.removeOneChallenge(idch);

      if (challengeDelete !== undefined) {
        return response.success(
          res,
          "Challenge eliminado correctamente",
          200,
          null
        );
      }

      return response.error(res, "Challenge a eliminar no encontrado", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }
}

export default new ChallengeController();
