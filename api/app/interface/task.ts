export interface ITask {
  id?: number,
  name: string,
  status: string,
  userId?: number,
}

export interface ITaskPublic {
  name: string,
  status: string,
  createdAt: Date,
}