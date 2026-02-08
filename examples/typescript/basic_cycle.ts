import { SubitEncoder } from "./src/encoder";
import { SubitDecoder } from "./src/decoder";
import { SubitFSM } from "./src/fsm";

// Basic SUBIT‑64 cycle demonstration:
// encode → decode → transition → loop

const encoder = new SubitEncoder();
const decoder = new SubitDecoder();

// Initial phases (A–F)
let axes = { A: 1, B: 0, C: 1, D: 0, E: 0, F: 1 };

// FSM transitions for demonstration
const transitions: Record<number, Record<string, number>> = {
  37: { observe: 5, act: 41 },
  41: { observe: 9, act: 45 },
  9: { observe: 1, act: 13 }
};

const fsm = new SubitFSM(transitions);

// Encode initial state
let state = encoder.encode(axes);

for (let step = 0; step < 3; step++) {
  const decoded = decoder.decode(state);

  console.log(`\nCycle ${step}`);
  console.log("Current state:", state);
  console.log("Decoded phases:", decoded);

  const event = step % 2 === 0 ? "act" : "observe";
  const nextState = fsm.next(state, event);

  console.log("Event:", event);
  console.log("Next state:", nextState);

  state = nextState;
}

console.log("\nDone.");
