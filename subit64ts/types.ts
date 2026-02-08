export interface State {
  value: number;
}

export interface Intent {
  state: number;
  goal: string;
}

export interface Action {
  intent: Intent;
  command: string;
}
