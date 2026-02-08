# SUBIT‑64 Protocol
![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)
![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)
![Protocol](https://img.shields.io/badge/protocol-SUBIT--64-black.svg)

SUBIT‑64 is a compact six‑axis bit protocol for representing semantic states, transitions, and deterministic system behavior.  
Each state is a 6‑bit integer from 0 to 63.  
Each axis corresponds to a single bit: **A, B, C, D, E, F**.

The Python SDK provides canonical encoding, decoding, and a deterministic finite‑state machine.

---

## Python SDK

### Installation

The SDK has no external dependencies. Import directly from the repository:

```python
from subit64 import encode, decode, FSM
```

---

## Encoding

```python
value = encode({"A": 1, "B": 0, "C": 1, "D": 0, "E": 0, "F": 1})
print(value)  # 37
```

---

## Decoding

```python
axes = decode(37)
print(axes)
# {'A': 1, 'B': 0, 'C': 1, 'D': 0, 'E': 0, 'F': 1}
```

---

## Finite State Machine

The FSM maps a current state and event to a next state.

```python
fsm = FSM({37: {"act": 41}})
next_state = fsm.next(37, "act")
print(next_state)  # 41
```

If a transition is undefined, the FSM returns the current state.

---

## Repository Structure

```
subit-agent-protocol/
│
├── subit64/          # Python SDK
│   ├── __init__.py
│   ├── encoder.py
│   ├── decoder.py
│   ├── fsm.py
│   └── types.py
│
├── schemas/          # JSON schemas
├── examples/         # Python examples
├── docs/             # Documentation
├── test_sdk.py       # Smoke test
├── README.md
└── CHANGELOG.md
```

---

## JSON Schemas

The `schemas/` directory contains the official protocol schemas:

- `state.schema.json`
- `event.schema.json`
- `transition.schema.json`

These ensure compatibility across implementations.

---

## Testing

Run the smoke test:

```
python3 test_sdk.py
```

---

## License

MIT.

## Version

Protocol version: 1.1  
Status: active development

