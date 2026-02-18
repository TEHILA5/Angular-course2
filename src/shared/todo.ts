export enum TodoStatus {
  NotDone = 'NotDone',
  InProgress = 'InProgress',
  Done = 'Done'
}

export interface Todo {
  id: string;
  title: string;
  date: any;
  status: TodoStatus;
}