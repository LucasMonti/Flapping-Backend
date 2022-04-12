import Challenge from "../models/Challenge";
import User from "../models/User";
import Status from "../models/Status";

import { IChallenge } from "../interfaces/challenge";

class ChallengeStore {
  public async findAllChallenges(): Promise<IChallenge[] | undefined> {
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

      if (challenges) {
        return challenges;
      }
      return;
    } catch (error) {
      console.log(error);

      throw new Error("Error al buscar todos los challenges");
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
}

export default new ChallengeStore();
