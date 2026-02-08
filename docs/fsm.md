# SUBIT FSM

The SUBIT finite state machine defines how an agent transitions between 6‑bit technical states.  
Each state encodes which operational phases are active, and the FSM specifies how events move the agent from one configuration to another.

---

## Structure

The FSM is defined as a mapping:

(state, event) → next_state

States are integers in the range 0–63.  
Events are arbitrary strings defined by the implementation.

The FSM does not prescribe a specific loop; it provides a deterministic transition layer on top of the 6‑bit model.

---

## Operational Phases

A — Perception  
B — Evaluation  
C — Intention  
D — Planning  
E — Action  
F — Feedback

Each phase corresponds to a bit in the state value.

---

## Agent Cycle

A typical agent loop can be expressed through the six phases:

Perception → Evaluation → Intention → Planning → Action → Feedback → Perception

The FSM may implement this cycle directly or define alternative transition structures depending on the system’s requirements.

---

## Transition Table

Transitions are defined as nested mappings:

{
  state: {
    event: next_state
  }
}

If a transition is not defined for a given (state, event) pair, the agent remains in the current state.

---

## Determinism

The FSM is strictly deterministic:

- one state at a time  
- one event at a time  
- one resulting next state  

No concurrency, branching, or probabilistic transitions are included in the protocol.

---

## Usage

The FSM layer enables:

- controlled agent behavior  
- predictable state evolution  
- transparent debugging  
- consistent integration across implementations  

The FSM operates purely on 6‑bit states and does not interpret the semantics of events or actions.
