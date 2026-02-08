from src.encoder import SubitEncoder
from src.decoder import SubitDecoder
from src.fsm import SubitFSM
import json
import time

# Basic SUBIT‑64 cycle demonstration:
# encode → decode → transition → loop

encoder = SubitEncoder()
decoder = SubitDecoder()

# Initial phases (A–F)
axes = {"A": 1, "B": 0, "C": 1, "D": 0, "E": 0, "F": 1}

# FSM transitions for demonstration
transitions = {
    37: {"observe": 5, "act": 41},
    41: {"observe": 9, "act": 45},
    9: {"observe": 1, "act": 13}
}

fsm = SubitFSM(transitions)

state = encoder.encode(axes)

for step in range(3):
    decoded = decoder.decode(state)
    print(f"\nCycle {step}")
    print("Current state:", state)
    print("Decoded phases:", decoded)

    event = "act" if step % 2 == 0 else "observe"
    next_state = fsm.next(state, event)

    print("Event:", event)
    print("Next state:", next_state)

    state = next_state
    time.sleep(0.5)

print("\nDone.")
