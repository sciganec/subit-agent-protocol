# Glossary

SUBIT State  
A 6‑bit technical configuration representing which operational phases of the agent are active.

Phase  
One of the six binary operational components: Perception, Evaluation, Intention, Planning, Action, Feedback.

A (Perception)  
Indicates whether new input data is available.

B (Evaluation)  
Indicates whether the agent is performing an evaluation step.

C (Intention)  
Indicates whether an intention has been formed.

D (Planning)  
Indicates whether planning is active.

E (Action)  
Indicates whether an action is currently being executed.

F (Feedback)  
Indicates whether feedback integration is active.

Encoder  
A function that converts phase flags into a 6‑bit integer (0–63).

Decoder  
A function that converts a 6‑bit integer back into phase flags.

FSM (Finite State Machine)  
A deterministic transition system mapping (state, event) pairs to next states.

Event  
A trigger that causes the FSM to transition from one state to another.

Intent  
A structure containing a state and a goal, representing the agent’s intended direction.

Action  
A structure containing an intent and a command, representing an executable operation.

Trajectory  
A sequence of SUBIT states representing the evolution of the agent over time.

Schema  
A JSON definition specifying the structure of protocol objects such as state, intent, action, and trajectory.
