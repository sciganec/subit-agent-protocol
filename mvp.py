from src.encoder import SubitEncoder
from src.decoder import SubitDecoder
from src.fsm import SubitFSM
import json

# Initial SUBIT‑64 axes (A–F)
axes = {"A": 1, "B": 0, "C": 1, "D": 0, "E": 0, "F": 1}

encoder = SubitEncoder()
decoder = SubitDecoder()

# Encode → 6‑bit integer
value = encoder.encode(axes)

# Decode back into phase flags
decoded = decoder.decode(value)

# FSM transitions
transitions = {
    37: {          # 100101₂
        "observe": 5,
        "act": 41
    }
}

fsm = SubitFSM(transitions)

# Apply an event
next_state = fsm.next(value, "act")

# Serialize result
payload = {
    "state": {"value": value},
    "next_state": {"value": next_state},
    "decoded": decoded
}

print(json.dumps(payload, indent=2))
