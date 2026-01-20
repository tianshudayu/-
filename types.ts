export enum AppState {
  START = 'START',
  ANIMATING = 'ANIMATING',
  RESULT = 'RESULT'
}

export interface UserData {
  name: string;
  amount: string;
  date: string;
}