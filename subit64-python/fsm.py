class FSM:
    def __init__(self, transitions):
        self.transitions = transitions

    def next(self, state: int, event: str) -> int:
        if state not in self.transitions:
            return state
        return self.transitions[state].get(event, state)
