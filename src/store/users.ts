import User from "../models/User";

//Ver el tipado de las promesas de acuerdo a lo que devulevan

class UserStore {
  public async findOneUser(id: string): Promise<void> {
    try {
      //Busca con sequelize un usuario por su id
    } catch (error) {
      //Atrapa el error
    }
  }

  public async updateOneUser(id: string): Promise<void> {
    try {
      //Busca con sequelize un usuario por su id y lo actualiza
    } catch (error) {
      //Atrapa el error
    }
  }

  //ver los parametros que se les pasan
  public async removeOneUser(id: string): Promise<void> {
    try {
      //Busca con sequelize un usuario por su id y lo elimina
    } catch (error) {
      //Atrapa el error
    }
  }
}

export default new UserStore();
