type validStatus = 'pending' | 'inProgress' | 'done';

export const isValidStatus = (v: string): v is validStatus => {
  return ['pending', 'inProgress', 'done'].includes(v as validStatus);
};

export interface ITask {
  id?: number,
  name: string,
  status: validStatus,
  userId?: number,
}

export interface ITaskPublic {
  id: number,
  name: string,
  status: validStatus,
  createdAt: Date,
}
