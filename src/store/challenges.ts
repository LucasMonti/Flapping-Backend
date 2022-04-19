import Challenge from "../models/Challenge";
import User from "../models/User";
import Status from "../models/Status";

import { IChallenge } from "../interfaces/challenge";

class ChallengeStore {
  public async findAllChallenges(): Promise<IChallenge[]> {
    try {
      const challenges = await Challenge.findAll({
        include: [
          {
            model: User,
            as: "referente",
            attributes: ["name", "email"],
          },
          {
            model: Status,
            as: "status",
            attributes: ["name"],
          },
        ],
      });

      return challenges;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar todos los challenges");
    }
  }

  public async findOneChallenge(id: number): Promise<IChallenge> {
    try {
      const challenge = await Challenge.findAll({
        where: { challenge_id: id },
        include: [
          {
            model: User,
            as: "referente",
            attributes: ["name", "email"],
          },
          {
            model: Status,
            as: "status",
            attributes: ["name"],
          },
        ],
      });
      return challenge[0];
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar un challenge");
    }
  }

  public async addOneChallenge(
    challenge: IChallenge
  ): Promise<IChallenge | undefined> {
    try {
      const newChallenge = await Challenge.create(challenge);
      return newChallenge;
    } catch (error) {
      throw new Error("Error al cargar un nuevo desafio");
    }
  }

  public async removeOneChallenge(id: number): Promise<string | undefined> {
    try {
      const challengeDeleted = await Challenge.destroy({
        where: {
          challenge_id: id,
        },
      });

      if (challengeDeleted !== 0) {
        return "Challenge borrado";
      }
      return;
    } catch (error) {
      throw new Error("Error al eliminar un challenge por su id");
    }
  }
}

export default new ChallengeStore();
