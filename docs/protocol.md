# SUBIT Agent Protocol  
A canonical communication standard for semantic agents

The SUBIT Agent Protocol defines how agents represent, transmit, and interpret meaning using the 6‑bit SUBIT state space. It provides a minimal, deterministic, and interoperable structure for agent communication, coordination, and behavior modeling.

The protocol is technology‑agnostic and functions as a semantic layer that any agent architecture can implement.

---

## Semantic kernel

### Six axes  
Each axis is a binary tension. Together they form the 6‑bit kernel.

- internal / external  
- stable / changing  
- open / closed  
- active / passive  
- structured / chaotic  
- autonomous / dependent  

Each axis contributes one bit.  
A SUBIT‑state is a 6‑bit configuration of these tensions.

---

## SUBIT‑state

A SUBIT‑state is the atomic unit of the protocol.

### Definition  
A 6‑bit semantic configuration representing the structural condition of an agent, object, or process.

### Structure  
- `bits`: six binary values  
- `axes`: explicit polarity for each axis  
- `label`: canonical name of the state  
- `description`: short semantic definition  

### JSON schema (conceptual)  
```
{
  "state": "010110",
  "axes": {
    "internal_external": 0,
    "stable_changing": 1,
    "open_closed": 0,
    "active_passive": 1,
    "structured_chaotic": 1,
    "autonomous_dependent": 0
  },
  "label": "ArchetypeName",
  "description": "Canonical definition"
}
```

---

## SUBIT‑context

Any input—text, event, signal, environment—is normalized into a SUBIT‑state.

Context is always represented as a single 6‑bit state.

### Purpose  
- unify interpretation  
- remove ambiguity  
- provide a stable semantic baseline  

---

## SUBIT‑intent

Intent expresses what the agent aims to move toward.

### Definition  
A forward‑facing SUBIT‑state representing the agent’s semantic direction.

### Structure  
```
{
  "intent_state": "101001",
  "priority": 0.82,
  "confidence": 0.74
}
```

---

## SUBIT‑action

Action expresses what the agent is doing in response to context.

### Definition  
A SUBIT‑state representing the agent’s current maneuver.

### Structure  
```
{
  "action_state": "001111",
  "action_type": "move|ask|respond|wait|redirect",
  "parameters": {}
}
```

---

## SUBIT‑trajectory

A trajectory is a sequence of SUBIT‑states over time.

### Purpose  
- track evolution  
- detect escalation or stabilization  
- identify morphs  
- predict next states  

### Structure  
```
{
  "trajectory": ["010010", "010011", "110011"],
  "morph_type": "escalation|stabilization|transition",
  "length": 3
}
```

---

## Morphs

Morphs are dynamic patterns formed by transitions between states.

### Examples  
- escalation morph  
- de‑escalation morph  
- oscillation morph  
- stabilization morph  
- divergence morph  

Morphs allow agents to interpret not only static states but also semantic motion.

---

## Transition rules (FSM)

The protocol defines deterministic rules for transitions:

### Allowed transitions  
States differing by one or two bits.  
Represents natural semantic movement.

### Neutral transitions  
States differing by three bits.  
Represents reorientation.

### Forbidden transitions  
States differing by four or more bits.  
Represents semantic discontinuity.

### Purpose  
- maintain coherence  
- prevent erratic behavior  
- ensure predictable agent dynamics  

---

## Agent communication packet

Agents communicate using a unified packet structure.

```
{
  "context": { ...SUBIT-state... },
  "intent": { ...SUBIT-intent... },
  "action": { ...SUBIT-action... },
  "trajectory": { ...SUBIT-trajectory... },
  "timestamp": "ISO-8601"
}
```

This packet is the core of the protocol.

---

## Interoperability rules

### Determinism  
Every agent must interpret the same input into the same SUBIT‑state.

### Minimalism  
No additional fields may redefine the meaning of a SUBIT‑state.

### Canonical naming  
All 64 states must use the canonical labels defined in the Atlas.

### Fractal consistency  
SUBIT‑states must be valid at all scales: micro, meso, macro.

---

## Reference implementation requirements

A compliant implementation must include:

- encoder: input → SUBIT‑state  
- decoder: SUBIT‑state → description  
- trajectory engine: sequence → morph  
- packet builder: context + intent + action + trajectory  

These components ensure full protocol compatibility.

---

## Purpose of the protocol

The SUBIT Agent Protocol provides:

- a shared semantic language  
- predictable agent behavior  
- interpretable communication  
- cross‑system interoperability  
- minimal overhead (6 bits)  
- deterministic reasoning  

It functions as the semantic equivalent of traffic rules: a universal standard that allows heterogeneous agents to coordinate safely and coherently.

---
