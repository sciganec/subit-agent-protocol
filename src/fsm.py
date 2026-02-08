class SubitFSM:
    """
    Minimal deterministic FSM for 6‑bit SUBIT states.

    Transitions are defined as:
      { state: { event: next_state } }

    Rules:
      - state: integer 0–63
      - event: string
      - next_state: integer 0–63
      - undefined transitions return the current state
    """

    def __init__(self, transitions: dict):
        self.transitions = transitions

    def next(self, state: int, event: str) -> int:
        return self.transitions.get(state, {}).get(event, state)
