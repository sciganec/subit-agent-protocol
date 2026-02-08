# SUBIT Agent Protocol

SUBIT Agent Protocol defines a minimal, technical 6‑phase operational model for AI agents.  
Each phase is represented as a binary flag, forming a 6‑bit state (0–63).  
The protocol is implementation‑agnostic and provides a universal control layer for agent systems.

---

## Technical Axes

The protocol defines six binary operational phases:

A — Perception  
B — Evaluation  
C — Intention  
D — Planning  
E — Action  
F — Feedback

Each phase is either inactive (0) or active (1).  
The combined configuration forms a 6‑bit integer.

Bit order:

bit0 = A (Perception)  
bit1 = B (Evaluation)  
bit2 = C (Intention)  
bit3 = D (Planning)  
bit4 = E (Action)  
bit5 = F (Feedback)

---

## State Model

A SUBIT state is a 6‑bit integer in the range 0–63.  
It encodes which operational phases are currently active.

Examples:

000000 → 0  
000101 → 5 (Perception + Intention)  
111111 → 63 (all phases active)

---

## Encoder and Decoder

The encoder converts a dictionary of phase flags into a 6‑bit integer.  
The decoder performs the inverse transformation.

Both implementations are provided in Python and TypeScript.

---

## FSM Layer

The protocol includes a minimal finite state machine abstraction.  
Transitions are defined as mappings from `(state, event)` to `next_state`.  
The FSM does not prescribe a specific agent loop but supports any transition structure built on top of the 6‑bit model.

---

## JSON Schemas

The following canonical schemas are included:

state.json — 6‑bit state  
intent.json — state + goal  
action.json — intent + command  
trajectory.json — sequence of states

These schemas ensure consistent serialization across implementations.

---

## Integration

The protocol is suitable for:

- LLM‑based agents  
- planning systems  
- reinforcement learning agents  
- robotics control loops  
- hybrid multi‑agent systems  

The 6‑bit model provides a compact, interpretable, and deterministic representation of agent state.

---

## Version

Protocol version: 1.0  
Status: stable
