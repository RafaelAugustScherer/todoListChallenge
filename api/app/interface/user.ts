export interface IUser {
  id?: number,
  username: string,
  password: string,
}

export interface IUserPublic {
  id: number,
  usermane: string,
}

export interface IUserQuery {
  id?: number,
  username?: string,
}