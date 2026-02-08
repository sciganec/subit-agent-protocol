# SUBIT States

SUBIT defines a 6‑bit technical state model based on six binary operational phases.  
Each phase is represented by a single bit, and the combined configuration forms an integer from 0 to 63.

---

## Axes

A — Perception  
0: no new input  
1: new data available

B — Evaluation  
0: evaluation inactive  
1: evaluation active

C — Intention  
0: intention not defined  
1: intention formed

D — Planning  
0: planning inactive  
1: planning active

E — Action  
0: no action executed  
1: action executing

F — Feedback  
0: feedback not integrated  
1: feedback integration active

---

## Bit Order

bit0 = A (Perception)  
bit1 = B (Evaluation)  
bit2 = C (Intention)  
bit3 = D (Planning)  
bit4 = E (Action)  
bit5 = F (Feedback)

---

## State Space

The full state space consists of all 64 combinations of the six binary axes.  
Each state is represented as:

value = F E D C B A (binary)

Examples:

0  → 000000 → no phases active  
5  → 000101 → Perception + Intention  
63 → 111111 → all phases active

A complete table of all 64 states is included in the documentation.
