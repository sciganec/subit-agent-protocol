export class SubitFSM {
  /**
   * Minimal deterministic FSM for 6‑bit SUBIT states.
   *
   * Transitions are defined as:
   *   { state: { event: next_state } }
   *
   * Rules:
   *   - state: number 0–63
   *   - event: string
   *   - next_state: number 0–63
   *   - undefined transitions return the current state
   */
  private transitions: Record<number, Record<string, number>>;

  constructor(transitions: Record<number, Record<string, number>>) {
    this.transitions = transitions;
  }

  next(state: number, event: string): number {
    const row = this.transitions[state];
    if (!row) return state;
    return row[event] ?? state;
  }
}
