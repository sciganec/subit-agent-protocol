# SUBIT‑64 Protocol
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Spec](https://img.shields.io/badge/spec-6--bit%20protocol-black)
![Language](https://img.shields.io/badge/lang-Python%20%7C%20TypeScript-green)
![Status](https://img.shields.io/badge/status-stable-brightgreen)

SUBIT‑64 is a minimal 6‑bit protocol for deterministic agent control. It defines a compact state model, a strict transition layer, and canonical JSON schemas that make agent behavior transparent, interoperable, and implementation‑agnostic.

---

## Overview

SUBIT‑64 models an agent using six binary phases:

- A — Perception  
- B — Evaluation  
- C — Intention  
- D — Planning  
- E — Action  
- F — Feedback  

Each phase is one bit. Combined, they form a 6‑bit integer from 0 to 63.  
This representation enables deterministic control loops, transparent debugging, and cross‑platform consistency.

---

## State Model

A SUBIT state is defined as:

value = F E D C B A (binary)

Examples:

- 0 → 000000  
- 5 → 000101  
- 63 → 111111  

The full state space contains 64 configurations.

---

## Encoding and Decoding

Encoding converts phase flags into a 6‑bit integer.  
Decoding performs the inverse.

Example:

A=1, B=0, C=1, D=0, E=0, F=1  
→ 100101₂ → 37

---

## FSM Layer

The finite state machine defines deterministic transitions:

(state, event) → next_state

Undefined transitions return the current state to ensure predictable evolution.

---

## SDK

SUBIT‑64 includes minimal Python and TypeScript SDKs that expose a unified public API for encoding, decoding, and deterministic state transitions.

### Python

```
pip install subit64
```

API:

```python
from subit64 import encode, decode, FSM

value = encode({"A":1, "B":0, "C":1, "D":0, "E":0, "F":1})
axes = decode(value)

fsm = FSM({37: {"act": 41}})
next_state = fsm.next(value, "act")
```

Structure:

```
subit64/
  __init__.py
  encoder.py
  decoder.py
  fsm.py
  types.py
```

### TypeScript

```
npm install subit64
```

API:

```ts
import { encode, decode, FSM } from "subit64";

const value = encode({ A:1, B:0, C:1, D:0, E:0, F:1 });
const axes = decode(value);

const fsm = new FSM({ 37: { act: 41 } });
const nextState = fsm.next(value, "act");
```

Structure:

```
subit64/
  index.ts
  encoder.ts
  decoder.ts
  fsm.ts
  types.ts
```

---

## Directory Structure

```
src/
  encoder.py
  encoder.ts
  decoder.py
  decoder.ts
  fsm.py
  fsm.ts

schemas/
  state.json
  intent.json
  action.json
  trajectory.json

docs/
  protocol.md
  states.md
  fsm.md
  examples.md
  glossary.md

examples/
  python/
    basic_cycle.py
  typescript/
    basic_cycle.ts
  json/
    sample_trajectory.json

mvp.py
mvp.ts
```

---

## Use Cases

- LLM‑based agents  
- planning and reasoning systems  
- robotics control loops  
- reinforcement learning agents  
- multi‑agent coordination  

SUBIT‑64 provides a minimal, interpretable, and deterministic backbone for agent state management.

---

## Version

Protocol version: 1.1  
Status: active development

