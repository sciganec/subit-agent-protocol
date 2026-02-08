# Examples

## Encoding

Input axes:

A = 1  
B = 0  
C = 1  
D = 0  
E = 0  
F = 1

Binary layout (F E D C B A):

1 0 0 1 0 1 → 100101₂ → 37

Result:

encode({"A":1, "B":0, "C":1, "D":0, "E":0, "F":1}) = 37

---

## Decoding

Input value:

37 → 100101₂

Decoded axes:

A = 1  
B = 0  
C = 1  
D = 0  
E = 0  
F = 1

Result:

decode(37) = {"A":1, "B":0, "C":1, "D":0, "E":0, "F":1}

---

## FSM Transitions

Transition table:

{
  0: { "tick": 1 },
  1: { "tick": 3 }
}

Examples:

fsm.next(0, "tick") → 1  
fsm.next(1, "tick") → 3

If a transition is not defined, the state remains unchanged.

---

## Trajectory Example

A simple trajectory of states:

[0, 1, 5, 13, 29]

Meaning:

0  → no phases active  
1  → Perception  
5  → Perception + Intention  
13 → Perception + Intention + Planning  
29 → Perception + Intention + Planning + Action

---

## Intent and Action Examples

Intent:

{
  "state": { "value": 5 },
  "goal": "collect_input"
}

Action:

{
  "intent": {
    "state": { "value": 5 },
    "goal": "collect_input"
  },
  "command": "read_sensor"
}
