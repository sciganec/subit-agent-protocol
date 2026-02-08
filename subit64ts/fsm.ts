export class FSM {
  constructor(private transitions: Record<number, Record<string, number>>) {}

  next(state: number, event: string): number {
    if (!this.transitions[state]) return state;
    return this.transitions[state][event] ?? state;
  }
}
