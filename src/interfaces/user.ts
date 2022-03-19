export interface IUser {
  user_id?: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  wallet_address: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  lastname?: string;
  password?: string;
  wallet_address?: string;
}
